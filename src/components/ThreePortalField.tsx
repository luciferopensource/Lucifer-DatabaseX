/**
 * <ThreePortalField /> - Sovereign 3D WebGL Motion Canvas
 * Inspired by ThreeUI.Com Portal Field & LiquidGL
 * Lucifer Open Source 3D Motion Graphics
 */

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GoldParticleCanvas } from './GoldParticleCanvas'

interface ThreePortalFieldProps {
  className?: string
}

export const ThreePortalField: React.FC<ThreePortalFieldProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [useFallback, setUseFallback] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setUseFallback(true)
      return
    }

    const container = containerRef.current
    if (!container) return

    // Scene setup
    let renderer: THREE.WebGLRenderer | null = null
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' })
    } catch {
      setUseFallback(true)
      return
    }

    const width = container.clientWidth || window.innerWidth
    const height = container.clientHeight || window.innerHeight

    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.z = 80

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xd4af37, 0.6)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xfcf6ba, 2.5, 150)
    pointLight.position.set(0, 0, 30)
    scene.add(pointLight)

    // 1. Portal Outer Torus Ring (Royal Gold Wireframe)
    const torusGeometry = new THREE.TorusGeometry(32, 1.2, 16, 100)
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    })
    const torusRing = new THREE.Mesh(torusGeometry, torusMaterial)
    scene.add(torusRing)

    // 2. Inner Concentric Relativistic Rings
    const innerTorusGeometry = new THREE.TorusGeometry(20, 0.6, 12, 80)
    const innerTorusMaterial = new THREE.MeshBasicMaterial({
      color: 0xaa771c,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    })
    const innerTorusRing = new THREE.Mesh(innerTorusGeometry, innerTorusMaterial)
    scene.add(innerTorusRing)

    // 3. Relativistic Gold Stardust Field (1,200 Particles)
    const particleCount = 1200
    const particleGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const scales = new Float32Array(particleCount)
    const speeds = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      // Cylinder / warp distribution along Z axis
      const theta = Math.random() * Math.PI * 2
      const radius = 10 + Math.random() * 55
      positions[i * 3] = Math.cos(theta) * radius
      positions[i * 3 + 1] = Math.sin(theta) * radius
      positions[i * 3 + 2] = (Math.random() - 0.5) * 160

      scales[i] = Math.random() * 2 + 1
      speeds[i] = Math.random() * 0.15 + 0.05
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1))

    // Radial gradient particle canvas texture
    const canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
      grad.addColorStop(0, 'rgba(252, 246, 186, 1)')
      grad.addColorStop(0.3, 'rgba(212, 175, 55, 0.8)')
      grad.addColorStop(0.8, 'rgba(191, 149, 63, 0.2)')
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, 32, 32)
    }
    const particleTexture = new THREE.CanvasTexture(canvas)

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xfcf6ba,
      size: 1.6,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // Pointer Parallax Tracking
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const handlePointerMove = (e: MouseEvent) => {
      const halfW = window.innerWidth / 2
      const halfH = window.innerHeight / 2
      targetX = (e.clientX - halfW) / halfW
      targetY = (e.clientY - halfH) / halfH
    }

    window.addEventListener('mousemove', handlePointerMove, { passive: true })

    // Window Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return
      const w = container.clientWidth || window.innerWidth
      const h = container.clientHeight || window.innerHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animationFrameId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const delta = clock.getDelta()

      // Smooth camera pointer tracking
      currentX += (targetX - currentX) * 0.05
      currentY += (targetY - currentY) * 0.05

      camera.position.x = currentX * 15
      camera.position.y = -currentY * 12
      camera.lookAt(0, 0, 0)

      // Rotate portal geometries
      torusRing.rotation.z += 0.003
      torusRing.rotation.x = Math.sin(clock.getElapsedTime() * 0.4) * 0.15
      torusRing.rotation.y = Math.cos(clock.getElapsedTime() * 0.3) * 0.2

      innerTorusRing.rotation.z -= 0.005
      innerTorusRing.rotation.x = -Math.cos(clock.getElapsedTime() * 0.5) * 0.2

      // Drift particles along Z towards camera
      const posAttr = particleGeometry.attributes.position as THREE.BufferAttribute
      const posArray = posAttr.array as Float32Array

      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3 + 2] += speeds[i] * 35 * delta
        if (posArray[i * 3 + 2] > 70) {
          posArray[i * 3 + 2] = -90
        }
      }
      posAttr.needsUpdate = true

      if (renderer) {
        renderer.render(scene, camera)
      }
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handlePointerMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)

      if (renderer) {
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement)
        }
        renderer.dispose()
      }

      torusGeometry.dispose()
      torusMaterial.dispose()
      innerTorusGeometry.dispose()
      innerTorusMaterial.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
      particleTexture.dispose()
    }
  }, [])

  if (useFallback) {
    return <GoldParticleCanvas className={className} />
  }

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    />
  )
}


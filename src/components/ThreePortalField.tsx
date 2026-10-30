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
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      })
    } catch {
      setUseFallback(true)
      return
    }

    const initialWidth = container.clientWidth || 400
    const initialHeight = container.clientHeight || 400

    renderer.setSize(initialWidth, initialHeight, false)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    renderer.domElement.style.position = 'absolute'
    renderer.domElement.style.inset = '0'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.pointerEvents = 'none'
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, initialWidth / initialHeight, 0.1, 1000)
    camera.position.z = 58

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xd4af37, 0.7)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xfcf6ba, 2.5, 120)
    pointLight.position.set(0, 0, 25)
    scene.add(pointLight)

    // 1. Portal Outer Torus Ring (Royal Gold Wireframe)
    const torusGeometry = new THREE.TorusGeometry(22, 0.75, 16, 90)
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    })
    const torusRing = new THREE.Mesh(torusGeometry, torusMaterial)
    scene.add(torusRing)

    // 2. Inner Concentric Relativistic Rings
    const innerTorusGeometry = new THREE.TorusGeometry(13, 0.45, 12, 70)
    const innerTorusMaterial = new THREE.MeshBasicMaterial({
      color: 0xaa771c,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    })
    const innerTorusRing = new THREE.Mesh(innerTorusGeometry, innerTorusMaterial)
    scene.add(innerTorusRing)

    // 3. Relativistic Gold Stardust Field
    const isMobile = window.innerWidth < 640
    const particleCount = isMobile ? 250 : 500
    const particleGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const scales = new Float32Array(particleCount)
    const speeds = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const radius = 5 + Math.random() * 30
      positions[i * 3] = Math.cos(theta) * radius
      positions[i * 3 + 1] = Math.sin(theta) * radius
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120

      scales[i] = Math.random() * 1.8 + 0.8
      speeds[i] = Math.random() * 0.16 + 0.06
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
      grad.addColorStop(0.35, 'rgba(212, 175, 55, 0.85)')
      grad.addColorStop(0.8, 'rgba(191, 149, 63, 0.25)')
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, 32, 32)
    }
    const particleTexture = new THREE.CanvasTexture(canvas)

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xfcf6ba,
      size: 1.4,
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

    // ResizeObserver on the container element
    let resizeObserver: ResizeObserver | null = null
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const w = entry.contentRect.width || container.clientWidth
          const h = entry.contentRect.height || container.clientHeight
          if (w > 0 && h > 0 && renderer) {
            camera.aspect = w / h
            camera.updateProjectionMatrix()
            renderer.setSize(w, h, false)
          }
        }
      })
      resizeObserver.observe(container)
    }

    // Animation Loop with Visibility Handling
    let animationFrameId: number
    let isTabVisible = true
    const clock = new THREE.Clock()

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      if (!isTabVisible) return

      const delta = Math.min(clock.getDelta(), 0.1)

      // Smooth camera pointer tracking
      currentX += (targetX - currentX) * 0.04
      currentY += (targetY - currentY) * 0.04

      camera.position.x = currentX * 8
      camera.position.y = -currentY * 6
      camera.lookAt(0, 0, 0)

      // Rotate portal geometries
      torusRing.rotation.z += 0.003
      torusRing.rotation.x = Math.sin(clock.getElapsedTime() * 0.35) * 0.12
      torusRing.rotation.y = Math.cos(clock.getElapsedTime() * 0.28) * 0.15

      innerTorusRing.rotation.z -= 0.004
      innerTorusRing.rotation.x = -Math.cos(clock.getElapsedTime() * 0.4) * 0.15

      // Drift particles along Z towards camera
      const posAttr = particleGeometry.attributes.position as THREE.BufferAttribute
      const posArray = posAttr.array as Float32Array

      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3 + 2] += speeds[i] * 30 * delta
        if (posArray[i * 3 + 2] > 50) {
          posArray[i * 3 + 2] = -70
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
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
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
      className={`relative overflow-hidden pointer-events-none ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    />
  )
}

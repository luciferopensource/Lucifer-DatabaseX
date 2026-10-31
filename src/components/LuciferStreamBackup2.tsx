import React, { useState, useEffect } from 'react'
import { IntelligenceHeader } from './channel-intelligence/IntelligenceHeader'
import {
  ReportAccordionSelector,
  ActiveReportTab
} from './channel-intelligence/ReportAccordionSelector'
import { ChannelAnalysisSection } from './channel-intelligence/ChannelAnalysisSection'
import { ResolutionIntelligenceSection } from './channel-intelligence/ResolutionIntelligenceSection'
import { StorageHighlightsSection } from './channel-intelligence/StorageHighlightsSection'
import { FileExtensionSection } from './channel-intelligence/FileExtensionSection'
import { TelegramPromotionalFooter } from './channel-intelligence/TelegramPromotionalFooter'
import { BACKUP_2_DATASET } from '../data/channelIntelligenceDataBackup2'
import { StorageUnitSelector } from './StorageUnitSelector'
import {
  ArrowLeft,
  Sparkles,
  Layers
} from 'lucide-react'

interface LuciferStreamBackup2Props {
  onBack?: () => void
}

export const LuciferStreamBackup2: React.FC<LuciferStreamBackup2Props> = ({ onBack }) => {
  // Report selection state (single-open accordion by default, initialized to 'channel-analysis')
  const [activeTab, setActiveTab] = useState<ActiveReportTab | null>('channel-analysis')
  const [showAllSections, setShowAllSections] = useState<boolean>(false)

  // Ensure scroll is at the top when mounted and page is fully scrollable
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleToggleTab = (tab: ActiveReportTab) => {
    if (showAllSections) {
      setShowAllSections(false)
      setActiveTab(tab)
      return
    }

    // Single-open accordion pattern: clicking active tab collapses it, clicking another opens it
    const nextTab = activeTab === tab ? null : tab
    setActiveTab(nextTab)

    // Smooth scroll to target report container if opening
    if (nextTab) {
      setTimeout(() => {
        const el = document.getElementById(`${nextTab}-report`)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 50)
    }
  }

  const handleToggleShowAll = () => {
    setShowAllSections((prev) => !prev)
    if (!showAllSections) {
      setActiveTab(null)
    } else {
      setActiveTab('channel-analysis')
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'transparent',
        color: '#f3e5ab',
        fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        overflowY: 'visible',
        width: '100%',
        position: 'relative'
      }}
    >
      {/* ── Sub-Navigation / Breadcrumb Bar (macOS Sovereign Liquid Glass) ── */}
      <nav
        aria-label="Sovereign Breadcrumb Navigation"
        style={{
          position: 'sticky',
          top: 'var(--sovereign-header-height, 56px)',
          zIndex: 40,
          background: 'linear-gradient(135deg, rgba(16, 14, 26, 0.88) 0%, rgba(10, 10, 16, 0.94) 100%)',
          backdropFilter: 'blur(36px) saturate(210%) contrast(105%) brightness(1.08)',
          WebkitBackdropFilter: 'blur(36px) saturate(210%) contrast(105%) brightness(1.08)',
          borderBottom: '1.5px solid rgba(212, 175, 55, 0.35)',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.85), inset 0 1.5px 1.5px rgba(255, 255, 255, 0.28), 0 0 24px rgba(212, 175, 55, 0.1)',
          padding: '10px 24px',
          boxSizing: 'border-box'
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap'
          }}
        >
          {/* Left: macOS Traffic Lights + Return Button + Breadcrumb Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', minWidth: 0 }}>
            {/* macOS Window Traffic Lights */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginRight: '4px' }}>
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#ff5f56',
                  boxShadow: '0 0 8px rgba(255, 95, 86, 0.65)',
                  display: 'inline-block'
                }}
                title="Sovereign Window: System Active"
              />
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#ffbd2e',
                  boxShadow: '0 0 8px rgba(255, 189, 46, 0.65)',
                  display: 'inline-block'
                }}
                title="Sovereign Window: Telemetry Synchronised"
              />
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#27c93f',
                  boxShadow: '0 0 8px rgba(39, 201, 63, 0.65)',
                  display: 'inline-block'
                }}
                title="Sovereign Window: Stream Backup 2 Online"
              />
            </div>

            {onBack && (
              <button
                type="button"
                onClick={onBack}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.22) 0%, rgba(28, 22, 40, 0.85) 100%)',
                  border: '1.5px solid rgba(212, 175, 55, 0.55)',
                  borderRadius: '10px',
                  padding: '7px 16px',
                  color: '#f3e5ab',
                  fontSize: '0.82rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  outline: 'none',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1.5px)'
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(212, 175, 55, 0.38) 0%, rgba(42, 34, 58, 0.95) 100%)'
                  e.currentTarget.style.borderColor = '#d4af37'
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(212, 175, 55, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.45)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(212, 175, 55, 0.22) 0%, rgba(28, 22, 40, 0.85) 100%)'
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.55)'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.3)'
                }}
              >
                <ArrowLeft size={14} style={{ color: '#d4af37' }} />
                <span>Return to Cinema 3D</span>
              </button>
            )}

            {/* Breadcrumb Frosted Glass Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(212, 175, 55, 0.22)',
                fontSize: '0.8rem',
                fontFamily: "'JetBrains Mono', monospace",
                color: 'rgba(243, 229, 171, 0.75)',
                whiteSpace: 'nowrap'
              }}
            >
              <span style={{ color: '#d4af37', fontWeight: 700 }}>Lucifer Database X</span>
              <span style={{ color: 'rgba(212, 175, 55, 0.4)' }}>/</span>
              <span>Digital Vault</span>
              <span style={{ color: 'rgba(212, 175, 55, 0.4)' }}>/</span>
              <span style={{ color: '#ffffff', fontWeight: 700 }}>Lucifer Stream Site 2 Backup</span>
            </div>
          </div>

          {/* Right: Quick Action Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <StorageUnitSelector compact />
            <button
              type="button"
              onClick={handleToggleShowAll}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: showAllSections
                  ? 'linear-gradient(135deg, #d4af37 0%, #b39029 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(20, 18, 30, 0.75) 100%)',
                color: showAllSections ? '#08080c' : '#f3e5ab',
                border: `1.5px solid ${showAllSections ? '#d4af37' : 'rgba(212, 175, 55, 0.35)'}`,
                borderRadius: '10px',
                padding: '7px 16px',
                fontSize: '0.8rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: showAllSections
                  ? '0 0 24px rgba(212, 175, 55, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.4)'
                  : '0 4px 14px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
                transition: 'all 0.2s',
                outline: 'none',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1.5px)'
                e.currentTarget.style.borderColor = '#d4af37'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.borderColor = showAllSections ? '#d4af37' : 'rgba(212, 175, 55, 0.35)'
              }}
            >
              <Layers size={14} />
              <span>{showAllSections ? 'Collapse to Tabbed View' : 'Expand All 4 Reports'}</span>
            </button>

            <a
              href="#sovereign-community"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.08) 100%)',
                color: '#f3e5ab',
                border: '1.5px solid rgba(212, 175, 55, 0.45)',
                borderRadius: '10px',
                padding: '7px 16px',
                fontSize: '0.8rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1.5px)'
                e.currentTarget.style.borderColor = '#d4af37'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.35)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.45)'
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.15)'
              }}
            >
              <Sparkles size={14} style={{ color: '#d4af37' }} />
              <span>Community Dispatch</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ── Main Dashboard Body (Liquid Glass Architecture) ── */}
      <main
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '36px 24px 80px',
          display: 'flex',
          flexDirection: 'column',
          gap: '36px'
        }}
      >
        {/* 1. Header & Target Dossier Strip */}
        <IntelligenceHeader dataset={BACKUP_2_DATASET} />

        {/* 2. Interactive 4-Report Selector Accordion Tabs (Liquid Glass) */}
        <ReportAccordionSelector
          activeTab={showAllSections ? null : activeTab}
          onToggleTab={handleToggleTab}
          dataset={BACKUP_2_DATASET}
        />

        {/* 3. Report Content Panels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {/* Section 1: Channel Analysis Report */}
          {(showAllSections || activeTab === 'channel-analysis') && (
            <section id="channel-analysis-report">
              <ChannelAnalysisSection dataset={BACKUP_2_DATASET} />
            </section>
          )}

          {/* Section 2: Resolution Intelligence Report */}
          {(showAllSections || activeTab === 'resolution') && (
            <section id="resolution-report">
              <ResolutionIntelligenceSection dataset={BACKUP_2_DATASET} />
            </section>
          )}

          {/* Section 3: Storage Highlights Report */}
          {(showAllSections || activeTab === 'storage') && (
            <section id="storage-report">
              <StorageHighlightsSection dataset={BACKUP_2_DATASET} />
            </section>
          )}

          {/* Section 4: File Extension Intelligence Report (All 6 Pages) */}
          {(showAllSections || activeTab === 'extensions') && (
            <section id="extensions-report">
              <FileExtensionSection dataset={BACKUP_2_DATASET} />
            </section>
          )}
        </div>

        {/* 4. Sovereign Community & Telegram Promotion Footer */}
        <TelegramPromotionalFooter />
      </main>
    </div>
  )
}

export default LuciferStreamBackup2

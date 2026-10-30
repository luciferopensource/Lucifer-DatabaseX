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
import {
  ArrowLeft,
  Sparkles,
  Layers
} from 'lucide-react'

interface LuciferStreamBackupProps {
  onBack?: () => void
}

export const LuciferStreamBackup: React.FC<LuciferStreamBackupProps> = ({ onBack }) => {
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
        background: 'rgba(8, 8, 14, 0.52)',
        backdropFilter: 'blur(12px) saturate(160%)',
        WebkitBackdropFilter: 'blur(12px) saturate(160%)',
        color: '#f3e5ab',
        fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        overflowY: 'visible',
        width: '100%',
        position: 'relative'
      }}
    >
      {/* ── Sub-Navigation / Breadcrumb Bar (Liquid Glass) ── */}
      <div
        style={{
          position: 'sticky',
          top: '58px',
          zIndex: 40,
          background: 'rgba(10, 10, 16, 0.85)',
          backdropFilter: 'blur(24px) saturate(200%)',
          WebkitBackdropFilter: 'blur(24px) saturate(200%)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.65)',
          padding: '12px 24px'
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
          {/* Left: Back button & Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            {onBack && (
              <button
                onClick={onBack}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.18) 0%, rgba(20, 18, 30, 0.7) 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.45)',
                  borderRadius: '10px',
                  padding: '7px 14px',
                  color: '#f3e5ab',
                  fontSize: '0.82rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)'
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(212, 175, 55, 0.32) 0%, rgba(30, 26, 42, 0.85) 100%)'
                  e.currentTarget.style.borderColor = '#d4af37'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.25)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(212, 175, 55, 0.18) 0%, rgba(20, 18, 30, 0.7) 100%)'
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.45)'
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.2)'
                }}
              >
                <ArrowLeft size={14} style={{ color: '#d4af37' }} />
                <span>Return to Cinema 3D</span>
              </button>
            )}

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.8rem',
                fontFamily: "'JetBrains Mono', monospace",
                color: 'rgba(243, 229, 171, 0.65)'
              }}
            >
              <span style={{ color: '#d4af37' }}>Lucifer Database X</span>
              <span style={{ color: 'rgba(243, 229, 171, 0.3)' }}>/</span>
              <span>Digital Vault</span>
              <span style={{ color: 'rgba(243, 229, 171, 0.3)' }}>/</span>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Lucifer Stream Site 1 Backup</span>
            </div>
          </div>

          {/* Right: Quick Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handleToggleShowAll}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: showAllSections
                  ? 'linear-gradient(135deg, #d4af37 0%, #b39029 100%)'
                  : 'rgba(255, 255, 255, 0.05)',
                color: showAllSections ? '#08080c' : '#f3e5ab',
                border: `1px solid ${showAllSections ? '#d4af37' : 'rgba(212, 175, 55, 0.3)'}`,
                borderRadius: '10px',
                padding: '7px 14px',
                fontSize: '0.8rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: showAllSections
                  ? '0 0 20px rgba(212, 175, 55, 0.4)'
                  : '0 2px 8px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.2s'
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
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.16) 0%, rgba(212, 175, 55, 0.06) 100%)',
                color: '#f3e5ab',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                borderRadius: '10px',
                padding: '7px 14px',
                fontSize: '0.8rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#d4af37'
                e.currentTarget.style.boxShadow = '0 0 16px rgba(212, 175, 55, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)'
              }}
            >
              <Sparkles size={14} style={{ color: '#d4af37' }} />
              <span>Community Dispatch</span>
            </a>
          </div>
        </div>
      </div>

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
        <IntelligenceHeader />

        {/* 2. Interactive 4-Report Selector Accordion Tabs (Liquid Glass) */}
        <ReportAccordionSelector
          activeTab={showAllSections ? null : activeTab}
          onToggleTab={handleToggleTab}
        />

        {/* 3. Report Content Panels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {/* Section 1: Channel Analysis Report */}
          {(showAllSections || activeTab === 'channel-analysis') && (
            <section id="channel-analysis-report">
              <ChannelAnalysisSection />
            </section>
          )}

          {/* Section 2: Resolution Intelligence Report */}
          {(showAllSections || activeTab === 'resolution') && (
            <section id="resolution-report">
              <ResolutionIntelligenceSection />
            </section>
          )}

          {/* Section 3: Storage Highlights Report */}
          {(showAllSections || activeTab === 'storage') && (
            <section id="storage-report">
              <StorageHighlightsSection />
            </section>
          )}

          {/* Section 4: File Extension Intelligence Report (All 7 Pages) */}
          {(showAllSections || activeTab === 'extensions') && (
            <section id="extensions-report">
              <FileExtensionSection />
            </section>
          )}
        </div>

        {/* 4. Sovereign Community & Telegram Promotion Footer */}
        <TelegramPromotionalFooter />
      </main>
    </div>
  )
}

export default LuciferStreamBackup

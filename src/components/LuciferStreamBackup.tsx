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
      className="min-h-screen bg-[#08080c] text-[#f3e5ab] selection:bg-[#d4af37]/30 selection:text-[#f3e5ab]"
      style={{
        fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        overflowY: 'visible',
        width: '100%'
      }}
    >
      {/* ── Sub-Navigation / Breadcrumb Bar ── */}
      <div className="sticky top-[58px] z-40 bg-[#08080c]/95 backdrop-blur-md border-b border-[#d4af37]/20 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          {/* Back button & Location */}
          <div className="flex items-center gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-mono transition-colors"
                title="Return to 3D Cinema Experience"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Cinema 3D</span>
              </button>
            )}

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-[#d4af37]">Lucifer Database X</span>
              <span>/</span>
              <span className="text-[#f3e5ab]">Digital Vault Archive</span>
              <span>/</span>
              <span className="text-white font-semibold">Lucifer Stream Site 1 Backup</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleShowAll}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border transition-all ${
                showAllSections
                  ? 'bg-[#d4af37] text-black border-[#d4af37] font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{showAllSections ? 'Collapse to Tabbed View' : 'Expand All 4 Reports'}</span>
            </button>

            <a
              href="#sovereign-community"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#d4af37]/20 to-[#b39029]/20 hover:from-[#d4af37]/30 hover:to-[#b39029]/30 text-[#f3e5ab] border border-[#d4af37]/40 text-xs font-mono transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Community Dispatch</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Dashboard Body ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-12">
        {/* 1. Header & Target Dossier Strip */}
        <IntelligenceHeader />

        {/* 2. Interactive 4-Report Selector Accordion Tabs */}
        <ReportAccordionSelector
          activeTab={showAllSections ? null : activeTab}
          onToggleTab={handleToggleTab}
        />

        {/* 3. Report Content Panels */}
        <div className="space-y-16">
          {/* Section 1: Channel Analysis Report */}
          {(showAllSections || activeTab === 'channel-analysis') && (
            <section id="channel-analysis-report" className="transition-opacity duration-300">
              <ChannelAnalysisSection />
            </section>
          )}

          {/* Section 2: Resolution Intelligence Report */}
          {(showAllSections || activeTab === 'resolution') && (
            <section id="resolution-report" className="transition-opacity duration-300">
              <ResolutionIntelligenceSection />
            </section>
          )}

          {/* Section 3: Storage Highlights Report */}
          {(showAllSections || activeTab === 'storage') && (
            <section id="storage-report" className="transition-opacity duration-300">
              <StorageHighlightsSection />
            </section>
          )}

          {/* Section 4: File Extension Intelligence Report (All 7 Pages) */}
          {(showAllSections || activeTab === 'extensions') && (
            <section id="extensions-report" className="transition-opacity duration-300">
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

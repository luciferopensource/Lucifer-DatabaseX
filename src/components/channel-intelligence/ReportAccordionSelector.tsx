import React from 'react'
import {
  PieChart,
  Tv,
  HardDrive,
  FileCode,
  ChevronDown
} from 'lucide-react'

export type ActiveReportTab = 'channel-analysis' | 'resolution' | 'storage' | 'extensions'

interface ReportTabConfig {
  id: ActiveReportTab
  title: string
  subtitle: string
  icon: React.ReactNode
  tag: string
}

interface ReportAccordionSelectorProps {
  activeTab: ActiveReportTab | null
  onToggleTab: (tab: ActiveReportTab) => void
}

export const ReportAccordionSelector: React.FC<ReportAccordionSelectorProps> = ({
  activeTab,
  onToggleTab
}) => {
  const tabs: ReportTabConfig[] = [
    {
      id: 'channel-analysis',
      title: 'CHANNEL ANALYSIS REPORT',
      subtitle: '999,977 Messages • 8 Categories • Integrity Audit',
      icon: <PieChart size={20} />,
      tag: 'CACHED'
    },
    {
      id: 'resolution',
      title: 'RESOLUTION INTELLIGENCE REPORT',
      subtitle: '4K UHD to 240p Low • 9 Profiles • Distribution Matrix',
      icon: <Tv size={20} />,
      tag: 'SAVED'
    },
    {
      id: 'storage',
      title: 'STORAGE HIGHLIGHTS REPORT',
      subtitle: '945.67 TB Total • 3.91 GB Largest • 991.64 MB Avg',
      icon: <HardDrive size={20} />,
      tag: 'AUDITED'
    },
    {
      id: 'extensions',
      title: 'FILE EXTENSION REPORT',
      subtitle: '364 Unique Extensions • Pages 1 to 7 • Full Audit',
      icon: <FileCode size={20} />,
      tag: '7 PAGES'
    }
  ]

  return (
    <div
      role="tablist"
      aria-label="Intelligence Reports Accordion Controls"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '12px',
        marginBottom: '28px'
      }}
    >
      {tabs.map((tab) => {
        const isOpen = activeTab === tab.id
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`report-tab-${tab.id}`}
            aria-selected={isOpen}
            aria-expanded={isOpen}
            aria-controls={`report-panel-${tab.id}`}
            onClick={() => onToggleTab(tab.id)}
            style={{
              backdropFilter: 'blur(28px) saturate(200%)',
              WebkitBackdropFilter: 'blur(28px) saturate(200%)',
              background: isOpen
                ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.28) 0%, rgba(28, 24, 42, 0.82) 45%, rgba(10, 10, 18, 0.90) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, rgba(18, 16, 26, 0.68) 50%, rgba(8, 8, 14, 0.82) 100%)',
              border: `1.5px solid ${isOpen ? '#d4af37' : 'rgba(212, 175, 55, 0.35)'}`,
              borderRadius: '16px',
              padding: '18px 20px',
              cursor: 'pointer',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: isOpen
                ? '0 18px 45px rgba(0, 0, 0, 0.85), 0 0 32px rgba(212, 175, 55, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.45), inset 0 -1px 2px rgba(0, 0, 0, 0.7)'
                : '0 8px 24px rgba(0, 0, 0, 0.6), inset 0 1px 1.5px rgba(255, 255, 255, 0.18), inset 0 -1px 1.5px rgba(0, 0, 0, 0.5)',
              transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s, box-shadow 0.2s, background 0.2s',
              transform: isOpen ? 'translateY(-2px)' : 'none',
              outline: 'none'
            }}
            onMouseEnter={(e) => {
              if (!isOpen) {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.65)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.7), 0 0 14px rgba(212, 175, 55, 0.15)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isOpen) {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.28)'
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(212, 175, 55, 0.1)'
              }
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = '2px solid rgba(212, 175, 55, 0.8)'
              e.currentTarget.style.outlineOffset = '2px'
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none'
            }}
          >
            {/* Liquid glass top specular reflection highlight */}
            <span
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1.5px',
                background: isOpen
                  ? 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 30%, rgba(243, 229, 171, 0.9) 50%, rgba(255, 255, 255, 0.6) 70%, transparent 100%)'
                  : 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%)',
                pointerEvents: 'none'
              }}
            />

            {/* Top gold active glow bar */}
            {isOpen && (
              <span
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #aa771c 0%, #d4af37 50%, #f3e5ab 100%)',
                  boxShadow: '0 0 14px #d4af37'
                }}
              />
            )}

            {/* Header row: Icon, Tag, Chevron */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    color: isOpen ? '#d4af37' : 'rgba(243, 229, 171, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: isOpen ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${isOpen ? 'rgba(212, 175, 55, 0.5)' : 'rgba(255, 255, 255, 0.08)'}`,
                    transition: 'all 0.2s'
                  }}
                >
                  {tab.icon}
                </span>

                <span
                  style={{
                    fontSize: '0.66rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: isOpen ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    color: isOpen ? '#f3e5ab' : 'rgba(243, 229, 171, 0.5)',
                    border: `1px solid ${isOpen ? 'rgba(212, 175, 55, 0.4)' : 'rgba(255, 255, 255, 0.1)'}`
                  }}
                >
                  {tab.tag}
                </span>
              </div>

              {/* Animated chevron */}
              <span
                style={{
                  color: isOpen ? '#d4af37' : 'rgba(243, 229, 171, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <ChevronDown size={18} />
              </span>
            </div>

            {/* Title & Subtitle */}
            <div style={{ marginTop: '4px' }}>
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: isOpen ? '#f3e5ab' : '#d4af37',
                  transition: 'color 0.2s'
                }}
              >
                {tab.title}
              </div>
              <div
                style={{
                  fontSize: '0.74rem',
                  color: isOpen ? 'rgba(243, 229, 171, 0.85)' : 'rgba(243, 229, 171, 0.5)',
                  marginTop: '4px',
                  lineHeight: 1.4,
                  transition: 'color 0.2s'
                }}
              >
                {tab.subtitle}
              </div>
            </div>

            {/* Open / Closed status pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.68rem',
                fontWeight: 600,
                color: isOpen ? '#2ecc71' : 'rgba(243, 229, 171, 0.4)',
                marginTop: '4px'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: isOpen ? '#2ecc71' : 'rgba(243, 229, 171, 0.3)',
                  boxShadow: isOpen ? '0 0 6px #2ecc71' : 'none'
                }}
              />
              <span>{isOpen ? 'REPORT EXPANDED' : 'CLICK TO EXPAND'}</span>
            </div>
          </button>
        )
      })}
    </div>
  )
}


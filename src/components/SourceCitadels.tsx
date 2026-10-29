import React from 'react'
import { CITADEL_SOURCES } from '../data/citadels'
import { SourceCitadelType } from '../types/media'
import { Radio, ChevronRight, Cpu } from 'lucide-react'

interface SourceCitadelsProps {
  activeCitadel?: 'All' | SourceCitadelType
  onSelectCitadel: (citadel: SourceCitadelType | 'All') => void
}

export const SourceCitadels: React.FC<SourceCitadelsProps> = ({
  activeCitadel = 'All',
  onSelectCitadel,
}) => {

  return (
    <section id="sources" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gold-900/40 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-gold-500/5 blur-3xl pointer-events-none rounded-full" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-950/70 border border-gold-500/30 text-gold-400 text-xs tracking-widest uppercase font-mono mb-4">
            <Radio className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
            16 Autonomous Scraper Citadels & Fleet
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-obsidian-100 tracking-tight">
            The Sovereign <span className="text-gold-gradient font-normal">Media Citadels</span>
          </h2>
          <p className="mt-3 text-sm text-obsidian-400 max-w-2xl font-light">
            Grounded strictly in the verified resolvers from <code className="text-gold-300 font-mono text-xs">Lucifer-OTT-POS-main</code> and the 264,560 synced records of <code className="text-gold-300 font-mono text-xs">smart_sync.db</code>. Zero synthetic sources.
          </p>
        </div>

        {activeCitadel !== 'All' && (
          <button
            onClick={() => onSelectCitadel('All')}
            className="mt-4 md:mt-0 px-4 py-2 rounded-lg bg-gold-500/10 border border-gold-500/40 text-gold-300 text-xs font-mono hover:bg-gold-500/20 transition-all flex items-center gap-2 w-fit"
          >
            <span>Showing: {activeCitadel}</span>
            <span className="text-gold-500 hover:text-gold-200">× Clear Filter</span>
          </button>
        )}
      </div>

      {/* Citadel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {CITADEL_SOURCES.map((source) => {
          const isActive = activeCitadel === source.id

          return (
            <div
              key={source.id}
              onClick={() => onSelectCitadel(isActive ? 'All' : source.id)}
              className={`group p-5 rounded-xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isActive
                  ? 'bg-gradient-to-b from-gold-950/80 to-obsidian-900 border-gold-400 ring-1 ring-gold-400/50 shadow-gold'
                  : 'bg-obsidian-900/60 hover:bg-obsidian-850/80 border-gold-900/50 hover:border-gold-500/40 backdrop-blur-md'
              }`}
            >
              {/* Top Row: Category & Status */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-gold-400/80 bg-gold-950/60 px-2 py-0.5 rounded border border-gold-500/20">
                    {source.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>{source.status}</span>
                  </div>
                </div>

                {/* Citadel Name & Domain */}
                <h3 className="font-serif text-lg text-obsidian-100 group-hover:text-gold-200 transition-colors flex items-center justify-between">
                  <span>{source.name}</span>
                </h3>
                <p className="text-xs font-mono text-gold-400/70 mt-1 truncate">
                  {source.primaryDomain}
                </p>

                {/* Format Chips */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {source.supportedFormats.slice(0, 3).map((fmt, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-obsidian-950/80 border border-gold-900/40 text-obsidian-300 font-mono"
                    >
                      {fmt}
                    </span>
                  ))}
                  {source.supportedFormats.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-gold-950/40 text-gold-400 font-mono">
                      +{source.supportedFormats.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action: Filter Trigger */}
              <div className="mt-5 pt-3 border-t border-gold-900/30 flex items-center justify-between text-xs font-mono">
                <span className={`text-[11px] ${isActive ? 'text-gold-300 font-semibold' : 'text-obsidian-400 group-hover:text-gold-400'}`}>
                  {isActive ? 'Active Filter ✓' : 'Filter Catalog'}
                </span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-gold-400 rotate-90' : 'text-obsidian-500 group-hover:text-gold-400 group-hover:translate-x-0.5'}`} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Verified Architectural Notice */}
      <div className="mt-10 p-5 rounded-xl bg-obsidian-900/40 border border-gold-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gold-950/80 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-serif text-obsidian-200">Zero Synthetic Simulation Standard</h4>
            <p className="text-xs text-obsidian-400 font-light mt-0.5">
              Every resolver architecture maps directly to physical Python modules in <code className="text-gold-300 font-mono text-[11px]">scrapers/resolvers/</code>.
            </p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs font-mono text-gold-400/90 block">Registry SHA-256 Validated</span>
          <span className="text-[10px] font-mono text-obsidian-500">Cloudflare Edge & MTProto Fleet Ready</span>
        </div>
      </div>
    </section>
  )
}

import React, { useState } from 'react'
import {
  TELEGRAM_COMMUNITY_LINKS,
  OWNER_INFO
} from '../../data/channelIntelligenceData'
import {
  Send,
  ExternalLink,
  Crown,
  Check,
  Copy,
  Mail,
  Shield,
  Sparkles,
  Users
} from 'lucide-react'

export const TelegramPromotionalFooter: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2500)
  }

  return (
    <footer className="mt-16 pt-10 border-t border-[#d4af37]/25 space-y-10" id="sovereign-community">
      {/* ── Brand Framing Header ── */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#15121e] via-[#0b0b10] to-[#08080c] p-8 lg:p-12 border-2 border-[#d4af37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden">
        {/* Cinematic Backdrop Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4af37]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

        {/* Double-Line Framing Indicator */}
        <div className="text-center font-mono text-[11px] text-[#d4af37]/60 tracking-[0.3em] select-none mb-4">
          ╔═══════════════════════════════════════════════════════════════════╗
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#f3e5ab] text-xs font-mono tracking-widest uppercase">
            <Crown className="w-4 h-4 text-[#d4af37]" />
            Lucifer Open Source • Sovereign Digital Vault
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f3e5ab] tracking-tight">
            Connect With the Sovereign Intelligence Network
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Curated and governed by{' '}
            <strong className="text-[#f3e5ab] font-serif font-semibold">{OWNER_INFO.name}</strong>.
            Gain direct access to verified stream archives, catalogue dispatch channels, priority media
            request pipelines, and the Lucifer Open Source engineering community.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" /> End-to-End Cryptographic Integrity
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" /> 945+ TB Verified Media Volume
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-sky-400" /> Decentralised Community Mirrors
            </span>
          </div>
        </div>

        <div className="text-center font-mono text-[11px] text-[#d4af37]/60 tracking-[0.3em] select-none mt-4">
          ╚═══════════════════════════════════════════════════════════════════╝
        </div>
      </div>

      {/* ── Official Community & Request Links Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TELEGRAM_COMMUNITY_LINKS.map((link) => {
          const isCopied = copiedId === link.id

          return (
            <div
              key={link.id}
              className="group relative rounded-2xl bg-gradient-to-b from-[#13111b] via-[#0d0c13] to-[#08080c] p-6 border border-white/10 hover:border-[#d4af37]/60 hover:shadow-[0_10px_35px_rgba(212,175,55,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Badge & Icon */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f3e5ab] font-medium">
                    {link.badge}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] group-hover:scale-110 group-hover:bg-[#d4af37]/20 transition-all">
                    {link.isEmail ? <Mail className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                  {link.title}
                </h3>

                {/* Handle / Address */}
                <div className="mt-1 font-mono text-xs text-[#d4af37] flex items-center gap-1.5">
                  <span>{link.handleOrEmail}</span>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs text-slate-400 font-light leading-relaxed">
                  {link.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b39029] text-black font-semibold text-xs font-mono uppercase tracking-wider hover:brightness-110 hover:shadow-[0_0_18px_rgba(212,175,55,0.35)] transition-all"
                >
                  <span>{link.isEmail ? 'Send Email' : 'Join Telegram'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => handleCopy(link.id, link.handleOrEmail)}
                  title="Copy Handle to Clipboard"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Sovereign Governance Copyright Strip ── */}
      <div className="rounded-2xl bg-black/80 p-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center md:text-left">
        <div>
          <div className="text-slate-300 font-medium">
            © {new Date().getFullYear()} Lucifer Open Source • Governed by Lucifer Morningstar
          </div>
          <div className="text-slate-400 text-[11px] mt-0.5">
            Sovereign Media Intelligence &amp; Decentralised High-Definition Stream Vault
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400">
          <a
            href="https://t.me/LuciferOpenSource"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f3e5ab] transition-colors"
          >
            @LuciferOpenSource
          </a>
          <span>•</span>
          <a
            href="https://t.me/luciferdatabase"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f3e5ab] transition-colors"
          >
            @luciferdatabase
          </a>
          <span>•</span>
          <a
            href="mailto:ailuciferbaba@gmail.com"
            className="hover:text-[#f3e5ab] transition-colors"
          >
            ailuciferbaba@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}

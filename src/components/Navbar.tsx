import React, { useState, useEffect } from 'react'
import {
  Database,
  Film,
  Layers,
  Code2,
  Info,
  Search,
  Menu,
  X,
  Crown,
} from 'lucide-react'
import { GithubIcon, GitlabIcon } from './Icons'

interface NavbarProps {
  onSearchClick: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(7, 7, 11, 0.92)'
          : 'rgba(7, 7, 11, 0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isScrolled
          ? '1px solid rgba(212, 175, 55, 0.3)'
          : '1px solid rgba(212, 175, 55, 0.12)',
        boxShadow: isScrolled
          ? '0 10px 30px rgba(0, 0, 0, 0.8), 0 1px 0 rgba(212, 175, 55, 0.15)'
          : 'none',
      }}
    >
      <div className="container-royal">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '78px',
          }}
        >
          {/* Brand Logo & Name */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                background:
                  'linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(14, 14, 22, 0.95) 100%)',
                border: '1.5px solid var(--color-gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--glow-gold-sm)',
              }}
            >
              <Database size={22} color="var(--color-gold-primary)" />
              <Crown
                size={12}
                color="#fcf6ba"
                style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-5px',
                  filter: 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.8))',
                }}
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-royal)',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  letterSpacing: '0.08em',
                  lineHeight: 1.1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span className="text-gold-gradient">LUCIFER</span>
                <span style={{ color: '#ffffff' }}>DATABASE X</span>
                <span style={{ fontSize: '0.95rem' }}>🗄️</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.66rem',
                  letterSpacing: '0.12em',
                  color: 'rgba(212, 175, 55, 0.75)',
                  textTransform: 'uppercase',
                }}
              >
                Sovereign Media Matrix
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2rem',
            }}
            className="desktop-nav"
          >
            <a
              href="#explorer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#d4d4e2',
                textDecoration: 'none',
                fontFamily: 'var(--font-modern)',
                fontSize: '0.92rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fcf6ba')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#d4d4e2')}
            >
              <Film size={15} color="var(--color-gold-primary)" />
              <span>Media Explorer</span>
            </a>

            <a
              href="#collections"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#d4d4e2',
                textDecoration: 'none',
                fontFamily: 'var(--font-modern)',
                fontSize: '0.92rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fcf6ba')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#d4d4e2')}
            >
              <Layers size={15} color="var(--color-gold-primary)" />
              <span>Royal Collections</span>
            </a>

            <a
              href="#sources"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#d4d4e2',
                textDecoration: 'none',
                fontFamily: 'var(--font-modern)',
                fontSize: '0.92rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fcf6ba')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#d4d4e2')}
            >
              <Database size={15} color="var(--color-gold-primary)" />
              <span>16 Citadels</span>
            </a>

            <a
              href="#schema"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#d4d4e2',
                textDecoration: 'none',
                fontFamily: 'var(--font-modern)',
                fontSize: '0.92rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fcf6ba')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#d4d4e2')}
            >
              <Code2 size={15} color="var(--color-gold-primary)" />
              <span>Architecture</span>
            </a>

            <a
              href="#about"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#d4d4e2',
                textDecoration: 'none',
                fontFamily: 'var(--font-modern)',
                fontSize: '0.92rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fcf6ba')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#d4d4e2')}
            >
              <Info size={15} color="var(--color-gold-primary)" />
              <span>About</span>
            </a>
          </nav>

          {/* Right Action Icons: Search & Git Repos */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
            }}
          >
            {/* Quick Search Trigger */}
            <button
              onClick={onSearchClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                padding: '0.45rem 0.95rem',
                borderRadius: '6px',
                color: '#eaeaf2',
                fontFamily: 'var(--font-modern)',
                fontSize: '0.84rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.16)'
                e.currentTarget.style.borderColor = 'var(--color-gold-primary)'
                e.currentTarget.style.boxShadow = 'var(--glow-gold-sm)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.08)'
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              aria-label="Search media catalog"
            >
              <Search size={15} color="var(--color-gold-primary)" />
              <span style={{ display: 'none' }} className="search-label">
                Search Catalog
              </span>
              <kbd
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  padding: '0.1rem 0.35rem',
                  borderRadius: '3px',
                  background: 'rgba(0, 0, 0, 0.45)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  color: 'var(--color-gold-light)',
                }}
              >
                /
              </kbd>
            </button>

            {/* GitHub Link */}
            <a
              href="https://github.com/luciferopensource"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#d4d4e2',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff'
                e.currentTarget.style.borderColor = 'var(--color-gold-primary)'
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#d4d4e2'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
              }}
              title="Lucifer Open Source on GitHub"
              aria-label="GitHub Repository"
            >
              <GithubIcon size={18} />
            </a>

            {/* GitLab Link */}
            <a
              href="https://gitlab.com/luciferopensource"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#fc6d26',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gold-primary)'
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
              }}
              title="Lucifer Open Source on GitLab"
              aria-label="GitLab Organization"
            >
              <GitlabIcon size={18} />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                borderRadius: '6px',
                color: 'var(--color-gold-primary)',
                cursor: 'pointer',
              }}
              className="mobile-nav-toggle"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(9, 9, 14, 0.98)',
            borderBottom: '1px solid var(--color-gold-primary)',
            padding: '1.25rem 2rem 2rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}
          className="mobile-drawer"
        >
          <a
            href="#explorer"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#f0f0fa',
              textDecoration: 'none',
              fontSize: '1.05rem',
              fontFamily: 'var(--font-royal)',
            }}
          >
            <Film size={18} color="var(--color-gold-primary)" />
            <span>Media Explorer</span>
          </a>
          <a
            href="#collections"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#f0f0fa',
              textDecoration: 'none',
              fontSize: '1.05rem',
              fontFamily: 'var(--font-royal)',
            }}
          >
            <Layers size={18} color="var(--color-gold-primary)" />
            <span>Royal Collections</span>
          </a>
          <a
            href="#sources"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#f0f0fa',
              textDecoration: 'none',
              fontSize: '1.05rem',
              fontFamily: 'var(--font-royal)',
            }}
          >
            <Database size={18} color="var(--color-gold-primary)" />
            <span>16 Citadels</span>
          </a>
          <a
            href="#schema"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#f0f0fa',
              textDecoration: 'none',
              fontSize: '1.05rem',
              fontFamily: 'var(--font-royal)',
            }}
          >
            <Code2 size={18} color="var(--color-gold-primary)" />
            <span>Architecture</span>
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#f0f0fa',
              textDecoration: 'none',
              fontSize: '1.05rem',
              fontFamily: 'var(--font-royal)',
            }}
          >
            <Info size={18} color="var(--color-gold-primary)" />
            <span>About Lucifer Database X</span>
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
          .search-label {
            display: inline !important;
          }
        }
      `}</style>
    </header>
  )
}

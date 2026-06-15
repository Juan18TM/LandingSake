import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(8,11,18,0.95)' : 'rgba(8,11,18,0.6)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: scrolled ? '1px solid var(--outline)' : '1px solid transparent',
      transition: 'all 0.3s',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 48px',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img
            src="/SakeAnimeLogo.png"
            alt="SakeAnime"
            style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'cover' }}
          />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 18, fontWeight: 700, color: '#fff',
            letterSpacing: '-0.01em',
          }}>
            SakeAnime
          </span>
        </a>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {[
           
            { href: '#install', label: 'Instalar' },
             { href: '#app-preview', label: 'Visualización' },
            { href: '#features', label: 'Features' },
            { href: '#tech', label: 'Tech' },
          ].map(({ href, label }) => (
            <NavLink key={href} href={href}>{label}</NavLink>
          ))}

          <a
            href="https://github.com/Juan18TM/SakeAnime"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-github"
            style={{
              display: 'flex', alignItems: 'center', gap: 7,
              padding: '8px 16px',
              fontSize: 14, fontWeight: 600,
              color: 'var(--primary)',
              border: '1px solid rgba(255,107,138,0.3)',
              borderRadius: 10,
              marginLeft: 8,
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,107,138,0.1)'
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--primary)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,107,138,0.3)'
            }}
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        padding: '8px 14px',
        fontSize: 14, fontWeight: 500,
        color: 'var(--muted)',
        borderRadius: 8,
        transition: 'color 0.2s, background 0.2s',
      }}
      onMouseEnter={e => {
        ;(e.currentTarget as HTMLAnchorElement).style.color = '#fff'
        ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)'
      }}
      onMouseLeave={e => {
        ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)'
        ;(e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
      }}
    >
      {children}
    </a>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

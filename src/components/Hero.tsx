import { useEffect, useRef } from 'react'

/* ── keyframes injected once ── */
const css = `
@keyframes orb-float-a { 0%,100%{transform:translate(0,0)} 50%{transform:translate(40px,25px)} }
@keyframes orb-float-b { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-30px,20px)} }
@keyframes fade-up     { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
@keyframes fade-right  { from{opacity:0;transform:translateX(36px) scale(.95)} to{opacity:1;transform:translateX(0) scale(1)} }
@keyframes pulse-dot   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.75)} }
@keyframes glow-pulse  { 0%,100%{opacity:.55} 50%{opacity:1} }
@keyframes scroll-anim { 0%{transform:scaleY(0);transform-origin:top} 50%{transform:scaleY(1);transform-origin:top} 51%{transform:scaleY(1);transform-origin:bottom} 100%{transform:scaleY(0);transform-origin:bottom} }

.hero-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}
.hero-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.hero-btn-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  animation: fade-up .55s cubic-bezier(.22,1,.36,1) .24s both;
}
@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr;
    padding: 60px 20px 48px;
    gap: 32px;
    text-align: center;
  }
  .hero-text {
    align-items: center;
  }
  .hero-btn-row {
    justify-content: center;
  }
}
@media (max-width: 480px) {
  .hero-grid {
    padding: 56px 16px 40px;
  }
  .hero-btn-row {
    flex-direction: column;
    width: 100%;
  }
  .hero-btn-row a {
    width: 100%;
    justify-content: center;
  }
}
`


export default function Hero() {
  const styleRef = useRef<HTMLStyleElement | null>(null)
  useEffect(() => {
    if (!styleRef.current) {
      const s = document.createElement('style')
      s.textContent = css
      document.head.appendChild(s)
      styleRef.current = s
    }
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 80,
        overflow: 'hidden',
      }}
    >
      {/* Background Video */}
      <video
        src="/Wallpaper1.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.6, // Mayor opacidad porque ahora tenemos el overlay encima
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
        }}
      />

      {/* Overlay gradiente oscuro (izquierda) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(8,11,18,0.95) 0%, rgba(8,11,18,0.6) 45%, transparent 100%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* — Background orbs — */}
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(255,107,138,.15) 0%, transparent 70%)',
        filter: 'blur(90px)',
        top: -180, left: -150,
        animation: 'orb-float-a 9s ease-in-out infinite',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        width: 550, height: 550,
        background: 'radial-gradient(circle, rgba(100,108,255,.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
        bottom: -80, right: -60,
        animation: 'orb-float-b 11s ease-in-out infinite',
        zIndex: 0,
      }} />



      {/* — Main content — */}
      <div className="hero-grid">
        {/* Left: text */}
        <div className="hero-text">
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px',
            background: 'rgba(255,107,138,.1)',
            border: '1px solid rgba(255,107,138,.28)',
            borderRadius: 99,
            fontSize: 13, fontWeight: 600, color: 'var(--primary)',
            marginBottom: 28,
            animation: 'fade-up .55s cubic-bezier(.22,1,.36,1) both',
          }}>
            <span style={{
              width: 7, height: 7,
              background: 'var(--primary)',
              borderRadius: '50%',
              animation: 'pulse-dot 2s ease-in-out infinite',
              display: 'inline-block',
            }} />
            Disponible ahora · Windows
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px, 5.5vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: '#fff',
            marginBottom: 24,
            animation: 'fade-up .55s cubic-bezier(.22,1,.36,1) .08s both',
          }}>
            Tu anime,<br />
            <span style={{
              background: 'linear-gradient(135deg, #FF6B8A 0%, #FF8DA5 55%, #FFB3C6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              sin límites.
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 18, lineHeight: 1.72,
            color: 'var(--muted)',
            marginBottom: 44,
            maxWidth: 480,
            animation: 'fade-up .55s cubic-bezier(.22,1,.36,1) .16s both',
          }}>
            Aplicación de escritorio <strong style={{ color: '#fff' }}>100% gratuita</strong> para
            ver anime en Windows. Sin anuncios.
          </p>

          <div className="hero-btn-row">
            <PrimaryBtn
              href="https://1drv.ms/u/c/a8a6637d98513c41/IQDR5f2FXfUHQoyD7GG4Lk6JAVzv6P-USSEAUP77zowYgY4"
              id="btn-download-hero"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadIcon />
              Descargar .exe
            </PrimaryBtn>

            <SecondaryBtn
              href="https://github.com/Juan18TM/SakeAnime"
              id="btn-github-hero"
            >
              <GitHubIcon />
              Ver en GitHub
            </SecondaryBtn>
          </div>

          {/* Small note */}
          <p style={{
            marginTop: 20, fontSize: 13, color: 'rgba(161,161,170,.55)',
            animation: 'fade-up .55s cubic-bezier(.22,1,.36,1) .32s both',
          }}>
            Windows 10 / 11 · 64-bit · Gratis para siempre
          </p>
        </div>

      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1,
      }}>
        <div style={{
          width: 1.5, height: 52,
          background: 'linear-gradient(to bottom, rgba(255,107,138,.7), transparent)',
          animation: 'scroll-anim 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  )
}

/* ── Shared button components ── */
function PrimaryBtn({ href, id, download, target, rel, children }: { href: string; id?: string; download?: string; target?: string; rel?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      id={id}
      download={download}
      target={target}
      rel={rel}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        padding: '14px 28px',
        background: 'linear-gradient(135deg, #FF6B8A, #e8506b)',
        color: '#fff',
        fontSize: 15, fontWeight: 700,
        borderRadius: 13,
        boxShadow: '0 0 32px rgba(255,107,138,.38), 0 4px 16px rgba(0,0,0,.35)',
        transition: 'transform .2s, box-shadow .2s, filter .2s',
      }}
      onMouseEnter={e => {
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
        ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 52px rgba(255,107,138,.55), 0 8px 24px rgba(0,0,0,.45)'
        ;(e.currentTarget as HTMLAnchorElement).style.filter = 'brightness(1.06)'
      }}
      onMouseLeave={e => {
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
        ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 32px rgba(255,107,138,.38), 0 4px 16px rgba(0,0,0,.35)'
        ;(e.currentTarget as HTMLAnchorElement).style.filter = 'brightness(1)'
      }}
    >
      {children}
    </a>
  )
}

function SecondaryBtn({ href, id, children }: { href: string; id?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      id={id}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        padding: '14px 28px',
        background: 'rgba(255,255,255,.05)',
        color: '#fff',
        fontSize: 15, fontWeight: 600,
        borderRadius: 13,
        border: '1px solid var(--outline)',
        transition: 'background .2s, border-color .2s, transform .2s',
      }}
      onMouseEnter={e => {
        ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,.09)'
        ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,.18)'
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,.05)'
        ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--outline)'
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
      }}
    >
      {children}
    </a>
  )
}

function DownloadIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

import { useState, useEffect, useRef } from 'react'
import { useInView } from '../hooks/useInView'

const COMMAND = 'irm https://raw.githubusercontent.com/Juan18TM/SakeAnime/main/scripts/install.ps1 | iex'

export default function Install() {
  const [copied, setCopied] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(COMMAND)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = COMMAND
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section
      id="install"
      ref={sectionRef}
      style={{
        padding: '110px 0',
        background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface) 50%, var(--bg) 100%)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>

        {/* Header */}
        <SectionHeader
          tag="Instalación"
          title="Un comando y listo"
          subtitle={<>Ejecuta esto en <strong style={{ color: '#fff' }}>PowerShell</strong> y SakeAnime se descarga e instala solo.</>}
          inView={inView}
        />

        {/* Command card */}
        <div
          id="command-card"
          style={{
            background: '#060910',
            border: '1px solid rgba(255,107,138,.22)',
            borderRadius: 18,
            maxWidth: 780,
            margin: '0 auto 64px',
            overflow: 'hidden',
            boxShadow: '0 0 70px rgba(255,107,138,.1), 0 24px 56px rgba(0,0,0,.45)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity .6s .1s, transform .6s .1s',
          }}
        >
          {/* Terminal header */}
          <div style={{
            padding: '12px 20px',
            background: 'rgba(17,21,29,.9)',
            borderBottom: '1px solid rgba(255,255,255,.05)',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E', display: 'inline-block' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840', display: 'inline-block' }} />
            <span style={{
              marginLeft: 'auto',
              fontSize: 11, fontWeight: 600, letterSpacing: '.08em',
              color: 'var(--muted)', textTransform: 'uppercase',
            }}>PowerShell</span>
          </div>

          {/* Command line */}
          <div style={{
            padding: '22px 24px',
            display: 'flex', alignItems: 'center', gap: 12,
            overflowX: 'auto',
          }}>
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 14, fontWeight: 700,
              color: 'var(--primary)',
              whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              PS C:\&gt;
            </span>
            <code
              id="command-text"
              style={{
                fontFamily: "'Courier New', 'Cascadia Code', monospace",
                fontSize: 13.5,
                color: '#e2e8f0',
                whiteSpace: 'nowrap',
                letterSpacing: '.01em',
              }}
            >
              {COMMAND}
            </code>
          </div>

          {/* Copy button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 20px 18px' }}>
            <button
              id="copy-btn"
              onClick={handleCopy}
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '8px 18px',
                background: copied ? 'rgba(74,222,128,.12)' : 'rgba(255,107,138,.1)',
                border: `1px solid ${copied ? 'rgba(74,222,128,.35)' : 'rgba(255,107,138,.28)'}`,
                borderRadius: 9,
                color: copied ? '#4ade80' : 'var(--primary)',
                fontSize: 13, fontWeight: 600,
                cursor: 'pointer',
                transition: 'all .2s',
              }}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
              {copied ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>
        </div>

        {/* Steps */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
          gap: 0, maxWidth: 780, margin: '0 auto 64px', flexWrap: 'wrap',
        }}>
          {STEPS.map((step, i) => (
            <div key={step.title} style={{ display: 'contents' }}>
              <Step
                number={i + 1}
                title={step.title}
                desc={step.desc}
                delay={0.15 + i * 0.1}
                inView={inView}
              />
              {i < STEPS.length - 1 && (
                <div style={{
                  width: 60, height: 1, marginTop: 24, flexShrink: 0,
                  background: 'linear-gradient(90deg, rgba(255,107,138,.35), rgba(255,107,138,.1))',
                }} />
              )}
            </div>
          ))}
        </div>

        {/* Manual download */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 20 }}>
            ¿Prefieres instalar manualmente?
          </p>
          <a
            href="https://1drv.ms/u/c/a8a6637d98513c41/IQDR5f2FXfUHQoyD7GG4Lk6JAVzv6P-USSEAUP77zowYgY4"
            id="btn-download-manual"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '16px 40px',
              background: 'linear-gradient(135deg, #FF6B8A, #e8506b)',
              color: '#fff', fontSize: 16, fontWeight: 700,
              borderRadius: 14,
              boxShadow: '0 0 40px rgba(255,107,138,.4), 0 8px 24px rgba(0,0,0,.35)',
              transition: 'transform .2s, box-shadow .2s',
            }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)'
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 60px rgba(255,107,138,.55), 0 12px 32px rgba(0,0,0,.4)'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 40px rgba(255,107,138,.4), 0 8px 24px rgba(0,0,0,.35)'
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Descargar SakeAnime Setup.exe
          </a>
          <p style={{ marginTop: 12, fontSize: 13, color: 'rgba(161,161,170,.5)' }}>
            Windows 10 / 11 · 64-bit · Gratis
          </p>
        </div>

      </div>
    </section>
  )
}

/* ── Sub-components ── */
const STEPS = [
  {
    title: 'Abre PowerShell',
    desc: <>Presiona <Kbd>Win + R</Kbd>, escribe <Code>powershell</Code> y Enter.</>,
  },
  {
    title: 'Pega el comando',
    desc: <>Copia el comando de arriba y pégalo con <Kbd>Ctrl + V</Kbd>.</>,
  },
  {
    title: '¡Disfruta!',
    desc: <>El instalador se descarga solo. SakeAnime listo para el maratón.</>,
  },
]

function Step({ number, title, desc, delay, inView }: {
  number: number; title: string; desc: React.ReactNode; delay: number; inView: boolean
}) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      textAlign: 'center', flex: 1, minWidth: 160, padding: '0 12px',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity .55s ${delay}s, transform .55s ${delay}s`,
    }}>
      <div style={{
        width: 52, height: 52, borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(255,107,138,.2), rgba(255,107,138,.05))',
        border: '1px solid rgba(255,107,138,.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 20, fontWeight: 800, color: 'var(--primary)',
        marginBottom: 16,
      }}>
        {number}
      </div>
      <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>{desc}</div>
    </div>
  )
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd style={{
      display: 'inline-block', padding: '1px 6px',
      background: 'var(--card)', border: '1px solid var(--outline)',
      borderRadius: 4, fontFamily: 'monospace', fontSize: 12, color: '#e2e8f0',
    }}>{children}</kbd>
  )
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code style={{ color: 'var(--primary)', fontFamily: 'monospace', fontSize: 12 }}>
      {children}
    </code>
  )
}

export function SectionHeader({ tag, title, subtitle, inView }: {
  tag: string; title: string; subtitle: React.ReactNode; inView: boolean
}) {
  return (
    <div style={{
      textAlign: 'center', marginBottom: 64,
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(24px)',
      transition: 'opacity .55s, transform .55s',
    }}>
      <span style={{
        display: 'inline-block', padding: '4px 14px',
        background: 'rgba(255,107,138,.1)',
        border: '1px solid rgba(255,107,138,.22)',
        borderRadius: 99,
        fontSize: 12, fontWeight: 700, letterSpacing: '.08em',
        color: 'var(--primary)', textTransform: 'uppercase',
        marginBottom: 16,
      }}>
        {tag}
      </span>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(28px, 4vw, 44px)',
        fontWeight: 800, letterSpacing: '-.02em',
        color: '#fff', marginBottom: 16, lineHeight: 1.2,
      }}>
        {title}
      </h2>
      <p style={{
        fontSize: 17, color: 'var(--muted)', lineHeight: 1.7,
        maxWidth: 560, margin: '0 auto',
      }}>
        {subtitle}
      </p>
    </div>
  )
}

function CopyIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

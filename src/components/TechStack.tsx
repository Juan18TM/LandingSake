import { useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './Install'

const STACK = [
  {
    id: 'tech-react',
    color: '#61DAFB',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2.3" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
    name: 'React',
    desc: 'UI Framework',
  },
  {
    id: 'tech-electron',
    color: '#47848F',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="9" ry="4.5" stroke="#47848F" strokeWidth="1.4" fill="none"/>
        <ellipse cx="12" cy="12" rx="9" ry="4.5" stroke="#47848F" strokeWidth="1.4" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="9" ry="4.5" stroke="#47848F" strokeWidth="1.4" fill="none" transform="rotate(120 12 12)"/>
        <circle cx="12" cy="12" r="2" fill="#47848F"/>
      </svg>
    ),
    name: 'Electron',
    desc: 'Desktop Runtime',
  },
  {
    id: 'tech-ts',
    color: '#3178C6',
    icon: (
      <svg width="34" height="34" viewBox="0 0 28 28" fill="none">
        <rect width="28" height="28" rx="4" fill="#3178C6"/>
        <text x="5" y="21" fontFamily="sans-serif" fontSize="13" fontWeight="800" fill="white">TS</text>
      </svg>
    ),
    name: 'TypeScript',
    desc: 'Tipado estricto',
  },
  {
    id: 'tech-vite',
    color: '#646CFF',
    icon: (
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
        <path d="M29 6L16.2 28.5 13.5 23.5 22.8 6H29z" fill="#646CFF"/>
        <path d="M3 6l12.8 22.5 2.7-5L9.2 6H3z" fill="#FF8C00" opacity=".8"/>
        <path d="M18.5 6L16 10.5 13.5 6H18.5z" fill="#BD34FE"/>
      </svg>
    ),
    name: 'Vite',
    desc: 'Build & Dev Server',
  },
  {
    id: 'tech-tailwind',
    color: '#38BDF8',
    icon: (
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
        <path d="M16 8c-3.555 0-5.777 1.767-6.667 5.3 1.333-1.767 2.888-2.428 4.667-1.988 1.015.252 1.74.984 2.541 1.794C17.85 14.463 19.363 16 22.667 16c3.555 0 5.777-1.767 6.667-5.3-1.333 1.767-2.888 2.428-4.667 1.988-1.015-.252-1.74-.984-2.541-1.794C20.817 9.537 19.303 8 16 8zM9.333 16c-3.555 0-5.777 1.767-6.667 5.3 1.333-1.767 2.888-2.428 4.667-1.988 1.015.252 1.74.984 2.541 1.794C11.183 22.463 12.697 24 16 24c3.555 0 5.777-1.767 6.667-5.3-1.333 1.767-2.888 2.428-4.667 1.988-1.015-.252-1.74-.984-2.541-1.794C14.15 17.537 12.637 16 9.333 16z" fill="#38BDF8"/>
      </svg>
    ),
    name: 'Tailwind CSS',
    desc: 'Utility-first CSS',
  },
  {
    id: 'tech-hlsjs',
    color: '#FF6B8A',
    icon: (
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="6" width="28" height="20" rx="3" stroke="#FF6B8A" strokeWidth="1.6" fill="rgba(255,107,138,.08)"/>
        <polygon points="13,11 13,21 22,16" fill="#FF6B8A"/>
      </svg>
    ),
    name: 'hls.js',
    desc: 'Video Streaming',
  },
  {
    id: 'tech-turbo',
    color: '#EF4444',
    icon: (
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="13" stroke="#EF4444" strokeWidth="1.6" fill="rgba(239,68,68,.08)"/>
        <path d="M10 16h12M18 10l6 6-6 6" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    name: 'Turborepo',
    desc: 'Monorepo Build',
  },
  {
    id: 'tech-supabase',
    color: '#3ECF8E',
    icon: (
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
        <path d="M15.73 2.05c-.02-1.31-1.68-1.88-2.5-.85L1.02 16.07c-.82 1.12-.01 2.6 1.37 2.6h12.04l-.18 11.88c.02 1.31 1.68 1.88 2.5.85L28.98 15.93c.82-1.12.01-2.6-1.37-2.6H15.57l.16-11.28z" fill="#3ECF8E"/>
      </svg>
    ),
    name: 'Supabase',
    desc: 'Backend & DB',
  },
]

export default function TechStack() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)

  return (
    <section
      id="tech"
      ref={ref}
      style={{
        padding: 'var(--section-py, 110px) 0',
        background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface) 50%, var(--bg) 100%)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--section-px, 48px)' }}>
        <SectionHeader
          tag="Tech Stack"
          title="Hecho con lo mejor"
          subtitle="Stack moderno pensado para rendimiento real y mantenibilidad a largo plazo."
          inView={inView}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
          {STACK.map((tech, i) => (
            <TechBadge key={tech.id} tech={tech} delay={0.05 + i * 0.06} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TechBadge({
  tech,
  delay,
  inView,
}: {
  tech: typeof STACK[0]
  delay: number
  inView: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      id={tech.id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '16px 24px',
        background: hovered ? 'var(--card-hover)' : 'var(--card)',
        border: `1px solid ${hovered ? `${tech.color}44` : 'var(--outline)'}`,
        borderRadius: 16,
        cursor: 'default',
        opacity: inView ? 1 : 0,
        transform: inView ? (hovered ? 'translateY(-4px)' : 'translateY(0)') : 'translateY(20px)',
        boxShadow: hovered ? `0 12px 36px rgba(0,0,0,.3), 0 0 20px ${tech.color}22` : 'none',
        transition: `opacity .5s ${delay}s, transform .5s ${delay}s, background .22s, border-color .22s, box-shadow .22s`,
      }}
    >
      {tech.icon}
      <div>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{tech.name}</div>
        <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{tech.desc}</div>
      </div>
    </div>
  )
}

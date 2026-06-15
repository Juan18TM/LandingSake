import { useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './Install'

const FEATURES = [
  {
    id: 'feat-providers',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: 'Múltiples proveedores',
    desc: 'TioAnime, AnimeFenix2. Si uno falla, cambias al siguiente en segundos.',
  },
  {
    id: 'feat-player',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" opacity=".25"/>
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
    title: 'Reproductor integrado',
    desc: 'Soporte HLS nativo y controles completos. Sin abrir el navegador, todo dentro de la app.',
  },
  {
    id: 'feat-history',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Historial de visto',
    desc: 'Retoma exactamente donde lo dejaste. Tu progreso se guarda automáticamente.',
  },
  {
    id: 'feat-favorites',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor" opacity=".2"/>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Lista de favoritos',
    desc: 'Guarda tus series favoritas para acceder rápido sin buscarlas cada vez.',
  },
  {
    id: 'feat-noads',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
      </svg>
    ),
    title: 'Sin anuncios',
    desc: 'Cero publicidad. Cero interrupciones. Solo tú y tu anime favorito.',
  },
  {
    id: 'feat-desktop',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'App de escritorio',
    desc: 'Electron nativo en Windows. Dark mode siempre activo.',
  },
]

export default function Features() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)

  return (
    <section id="features" ref={ref} style={{ padding: '110px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <SectionHeader
          tag="Features"
          title="Todo lo que necesitas"
          subtitle="SakeAnime viene cargado con lo esencial para una experiencia de anime premium."
          inView={inView}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.id} feature={f} delay={0.05 + i * 0.08} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
  delay,
  inView,
}: {
  feature: typeof FEATURES[0]
  delay: number
  inView: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      id={feature.id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '28px 28px 32px',
        background: hovered ? 'var(--card-hover)' : 'var(--card)',
        border: `1px solid ${hovered ? 'rgba(255,107,138,.22)' : 'var(--outline)'}`,
        borderRadius: 18,
        cursor: 'default',
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered ? 'translateY(-5px)' : 'translateY(0)'
          : 'translateY(28px)',
        boxShadow: hovered
          ? '0 16px 48px rgba(0,0,0,.32), 0 0 32px rgba(255,107,138,.07)'
          : 'none',
        transition: `opacity .5s ${delay}s, transform .5s ${delay}s, background .25s, border-color .25s, box-shadow .25s`,
      }}
    >
      <div style={{
        width: 56, height: 56, borderRadius: 14,
        background: hovered ? 'rgba(255,107,138,.16)' : 'rgba(255,107,138,.08)',
        border: '1px solid rgba(255,107,138,.18)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--primary)',
        marginBottom: 20,
        transition: 'background .25s',
      }}>
        {feature.icon}
      </div>
      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 10 }}>
        {feature.title}
      </h3>
      <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.68 }}>
        {feature.desc}
      </p>
    </div>
  )
}

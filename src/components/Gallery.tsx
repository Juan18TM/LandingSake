import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './Install'

export default function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)

  return (
    <section id="app-preview" ref={ref} style={{ padding: '110px 0', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <SectionHeader
          tag="Visualización app"
          title="Conoce SakeAnime"
          subtitle="Una interfaz limpia, moderna y enfocada en lo que importa: tu anime."
          inView={inView}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: 32,
          marginTop: 64,
        }}>
          {['/Home.png', '/Animes.png', '/AnimeCap.png', '/AnimeCap2.png'].map((src, index) => (
            <div
              key={src}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--outline)',
                borderRadius: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ${index * 0.15}s, transform 0.6s ${index * 0.15}s, border-color 0.3s`,
                cursor: 'pointer',
                overflow: 'hidden',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,107,138,.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--outline)'
              }}
            >
              <img 
                src={src} 
                alt={`Captura ${index + 1}`} 
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

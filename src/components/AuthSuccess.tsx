import React from 'react'

export default function AuthSuccess() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '100vh', background: 'var(--bg)', color: '#fff', textAlign: 'center', padding: 20
    }}>
      <div style={{
        background: 'var(--surface)', padding: '48px 40px', borderRadius: 24,
        border: '1px solid var(--outline)', maxWidth: 460, width: '100%',
        boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,107,138,0.1)',
      }}>
        <div style={{
          width: 72, height: 72, borderRadius: '50%', background: 'rgba(74,222,128,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px',
          color: '#4ade80', border: '1px solid rgba(74,222,128,0.3)'
        }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, marginBottom: 16 }}>
          ¡Cuenta Confirmada!
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 32 }}>
          Tu correo electrónico ha sido verificado exitosamente. Ya puedes cerrar esta ventana y volver a <strong>SakeAnime</strong> para iniciar sesión y disfrutar.
        </p>
        
        <a href="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '12px 28px', background: 'var(--card)',
          color: 'var(--primary)', borderRadius: 12, textDecoration: 'none', fontWeight: 600,
          border: '1px solid rgba(255,107,138,0.2)', transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255,107,138,0.1)'
          e.currentTarget.style.borderColor = 'rgba(255,107,138,0.4)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--card)'
          e.currentTarget.style.borderColor = 'rgba(255,107,138,0.2)'
        }}>
          Ir al inicio de la página
        </a>
      </div>
    </div>
  )
}

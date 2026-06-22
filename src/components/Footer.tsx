export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        padding: '64px 0 40px',
        borderTop: '1px solid var(--outline)',
        background: 'var(--surface)',
      }}
    >
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 var(--section-px, 48px)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 16, textAlign: 'center',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img
            src="/SakeAnimeLogo.png"
            alt="SakeAnime"
            style={{ width: 42, height: 42, borderRadius: 10, objectFit: 'cover' }}
          />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22, fontWeight: 700, color: '#fff',
          }}>
            SakeAnime
          </span>
        </div>

        <p style={{ fontSize: 14, color: 'var(--muted)', maxWidth: 420, lineHeight: 1.6 }}>
          Aplicación de escritorio open source para ver anime en Windows.
         
        </p>

        {/* Links */}
        <div style={{ display: 'flex', gap: 20, marginTop: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { href: 'https://github.com/Juan18TM/SakeAnime', label: 'GitHub', id: 'footer-github' },
            { href: 'https://github.com/Juan18TM/SakeAnime/releases', label: 'Releases', id: 'footer-releases' },
            { href: 'https://github.com/Juan18TM/SakeAnime/issues', label: 'Reportar bug', id: 'footer-issues' },
          ].map(({ href, label, id }) => (
            <FooterLink key={id} href={href} id={id}>{label}</FooterLink>
          ))}
        </div>

        {/* Divider */}
        <div style={{
          width: '100%', maxWidth: 480, height: 1,
          background: 'var(--outline)', marginTop: 8,
        }} />

        <p style={{ fontSize: 13, color: 'rgba(161,161,170,.45)' }}>
          © 2026 SakeAnime · MIT License · Hecho de ❤️ y mucho anime
        </p>
      </div>
    </footer>
  )
}

function FooterLink({ href, id, children }: { href: string; id: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      id={id}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontSize: 14, fontWeight: 500,
        color: 'var(--muted)',
        transition: 'color .2s',
      }}
      onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--primary)'}
      onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)'}
    >
      {children}
    </a>
  )
}

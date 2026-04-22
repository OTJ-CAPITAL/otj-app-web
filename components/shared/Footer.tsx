'use client'
export default function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid #1E1E1E', padding: '64px 32px 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
        <div>
          <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', color: '#FFFFFF', marginBottom: '12px' }}>OTJ <span style={{ color: '#C9A84C' }}>APP</span></div>
          <div style={{ color: '#555555', fontSize: '14px', lineHeight: 1.8 }}>See everything. In real time.</div>
        </div>
        <div>
          <div style={{ color: '#888888', fontSize: '11px', letterSpacing: '3px', marginBottom: '16px', fontFamily: 'Space Grotesk' }}>ECOSYSTEM</div>
          {[['OTJ Holdings', 'https://otjholdings.com'], ['OTJ Capital', 'https://otjcapital.com'], ['OTJ Fellowship', 'https://otjfellowship.com'], ['OTJ App', 'https://otj.app']].map(([n, u]) => (
            <a key={n} href={u} style={{ display: 'block', color: '#555555', fontSize: '14px', textDecoration: 'none', marginBottom: '8px' }} onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')} onMouseLeave={e => (e.currentTarget.style.color = '#555555')}>{n} →</a>
          ))}
        </div>
        <div>
          <div style={{ color: '#888888', fontSize: '11px', letterSpacing: '3px', marginBottom: '16px', fontFamily: 'Space Grotesk' }}>CONTACT</div>
          <a href="mailto:hello@otjholdings.com" style={{ color: '#555555', fontSize: '14px', textDecoration: 'none' }}>hello@otjholdings.com</a>
        </div>
      </div>
      <div style={{ maxWidth: '1280px', margin: '48px auto 0', paddingTop: '24px', borderTop: '1px solid #1E1E1E' }}>
        <span style={{ color: '#555555', fontSize: '13px' }}>© 2026 OTJ Holdings. All rights reserved.</span>
      </div>
    </footer>
  )
}

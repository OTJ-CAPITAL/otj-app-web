'use client'
export default function Footer() {
  return (
    <footer style={{ borderTop:'1px solid #E5E5E5',padding:'48px 32px' }}>
      <div style={{ maxWidth:'1280px',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'32px' }}>
        <div>
          <div style={{ fontFamily:'var(--font-sg)',fontWeight:700,fontSize:'14px',marginBottom:'12px' }}>OTJ App</div>
          <p style={{ fontSize:'13px',color:'#888',lineHeight:1.6 }}>The investor dashboard for<br />OTJ Capital.</p>
        </div>
        <div>
          <div style={{ fontFamily:'var(--font-sg)',fontWeight:600,fontSize:'12px',letterSpacing:'1px',color:'#888',marginBottom:'12px' }}>ECOSYSTEM</div>
          {[['OTJ Capital','https://otjcapital.com'],['OTJ Holdings','https://otjholdings.com'],['OTJ Fellowship','https://otjfellowship.com']].map(([l,h])=>(
            <a key={l} href={h} style={{ display:'block',fontSize:'13px',color:'#555',marginBottom:'8px' }} onMouseEnter={e=>(e.currentTarget.style.color='#000')} onMouseLeave={e=>(e.currentTarget.style.color='#555')}>{l}</a>
          ))}
        </div>
        <div>
          <div style={{ fontFamily:'var(--font-sg)',fontWeight:600,fontSize:'12px',letterSpacing:'1px',color:'#888',marginBottom:'12px' }}>CONTACT</div>
          <a href="mailto:app@otjcapital.com" style={{ fontSize:'13px',color:'#555' }}>app@otjcapital.com</a>
        </div>
      </div>
      <div style={{ maxWidth:'1280px',margin:'24px auto 0',paddingTop:'24px',borderTop:'1px solid #F0F0F0',fontSize:'12px',color:'#BBB' }}>© 2026 OTJ Capital.</div>
    </footer>
  )
}

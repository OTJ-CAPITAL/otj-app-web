'use client'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['Features', 'Dashboard']

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.95)' : '#fff',
        borderBottom: scrolled ? '1px solid #E5E5E5' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'all 0.2s',
        padding: '0 32px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{ fontFamily:'var(--font-sg)',fontWeight:700,fontSize:'16px',letterSpacing:'-0.5px' }}>OTJ App</span>

        {/* Desktop nav */}
        <div style={{ display:'flex',gap:'32px',alignItems:'center' }} className="nav-desktop">
          {links.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontFamily:'var(--font-inter)',fontSize:'14px',color:'#555',textDecoration:'none' }}>{item}</a>
          ))}
          <a href="#waitlist" style={{ background:'#000',color:'#fff',padding:'8px 18px',fontSize:'14px',fontFamily:'var(--font-sg)',fontWeight:600,textDecoration:'none' }}>Get Access</a>
        </div>

        {/* Hamburger — visible < 768px */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '20px',
            color: '#000',
            padding: '4px',
            lineHeight: 1,
          }}
          className="nav-hamburger"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          background: '#fff',
          borderBottom: '1px solid #E5E5E5',
          zIndex: 99,
          display: 'none',
          flexDirection: 'column',
          padding: '8px 0',
        }} className="nav-mobile-menu">
          {links.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                color: '#111',
                textDecoration: 'none',
                padding: '16px 32px',
                borderBottom: '1px solid #F0F0F0',
                display: 'block',
              }}
            >{item}</a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-sg)',
              fontWeight: 600,
              fontSize: '16px',
              color: '#fff',
              background: '#000',
              textDecoration: 'none',
              padding: '16px 32px',
              display: 'block',
            }}
          >Get Access</a>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
          .nav-mobile-menu { display: flex !important; }
        }
      `}</style>
    </>
  )
}

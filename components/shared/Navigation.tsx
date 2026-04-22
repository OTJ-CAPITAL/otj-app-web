'use client'
import { useEffect, useState, useRef } from 'react'
import { Bell } from 'lucide-react'

const notifications = [
  { text: 'BTC/USDT LONG signal executed', time: '2m ago' },
  { text: 'Monthly return: +12.4%', time: '1h ago' },
  { text: 'New signal: ETH/USDT HOLD', time: '3h ago' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const [hasNew, setHasNew] = useState(true)
  const notifRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false)
      }
    }
    if (notifOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [notifOpen])

  function toggleNotif() {
    setNotifOpen(o => !o)
    if (!notifOpen) setHasNew(false)
  }

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

          {/* Notification bell */}
          <div ref={notifRef} style={{ position:'relative' }}>
            <button
              onClick={toggleNotif}
              style={{
                background:'none',
                border:'none',
                cursor:'pointer',
                padding:'4px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                position:'relative',
                color:'#000',
              }}
              aria-label="Notifications"
            >
              <Bell size={18} color="#000" />
              {hasNew && (
                <span style={{
                  position:'absolute',
                  top:'2px',
                  right:'2px',
                  width:'8px',
                  height:'8px',
                  borderRadius:'50%',
                  background:'#ef4444',
                  display:'block',
                }} />
              )}
            </button>

            {/* Notification dropdown */}
            {notifOpen && (
              <div style={{
                position:'absolute',
                right:0,
                top:'48px',
                width:'200px',
                background:'#fff',
                border:'1px solid #E5E5E5',
                zIndex:200,
                padding:'16px',
                boxShadow:'0 4px 16px rgba(0,0,0,0.08)',
              }}>
                {notifications.map((n, i) => (
                  <div key={i} style={{
                    borderBottom: i < notifications.length - 1 ? '1px solid #F0F0F0' : 'none',
                    padding:'10px 0',
                  }}>
                    <div style={{ fontFamily:'var(--font-inter)',fontSize:'13px',color:'#111',marginBottom:'4px',lineHeight:1.4 }}>{n.text}</div>
                    <div style={{ fontFamily:'var(--font-mono)',fontSize:'11px',color:'#888' }}>{n.time}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

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

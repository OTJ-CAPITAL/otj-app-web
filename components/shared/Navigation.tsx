'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled ? 'rgba(8,8,8,0.97)' : '#080808',
          borderBottom: '1px solid #1E1E1E',
          backdropFilter: 'blur(12px)',
          transition: 'background-color 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Left: Wordmark */}
          <Link href="/" className="nav-wordmark">
            <span className="nav-wordmark-otj">OTJ</span>
            <span className="nav-wordmark-app">APP</span>
          </Link>

          {/* Center nav links — desktop */}
          <div className="nav-links-desktop">
            <Link href="#features" className="nav-link">Features</Link>
            <Link href="#dashboard" className="nav-link">Dashboard</Link>
            <Link href="#waitlist" className="nav-link">Waitlist</Link>
          </div>

          {/* CTA + mobile toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link href="#waitlist" className="nav-cta nav-links-desktop">
              Join Waitlist →
            </Link>

            {/* Mobile menu button */}
            <button
              className="nav-mobile-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} className="nav-hamburger-line" />
              <span style={{ opacity: menuOpen ? 0 : 1 }} className="nav-hamburger-line" />
              <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} className="nav-hamburger-line" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="nav-mobile-menu">
            <Link href="#features" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Features</Link>
            <Link href="#dashboard" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Dashboard</Link>
            <Link href="#waitlist" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Waitlist</Link>
            <Link href="#waitlist" className="nav-mobile-cta" onClick={() => setMenuOpen(false)}>
              Join Waitlist →
            </Link>
          </div>
        )}
      </nav>

      <style>{`
        .nav-wordmark {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .nav-wordmark-otj {
          font-family: var(--font-space), sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: #C9A84C;
          letter-spacing: -0.5px;
        }
        .nav-wordmark-app {
          font-family: var(--font-space), sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: #FFFFFF;
          letter-spacing: -0.5px;
        }
        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-link {
          font-family: var(--font-inter), sans-serif;
          font-weight: 400;
          font-size: 14px;
          color: #888888;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .nav-link:hover { color: #FFFFFF; }
        .nav-cta {
          font-family: var(--font-inter), sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: #080808;
          background-color: #C9A84C;
          padding: 8px 18px;
          border-radius: 2px;
          text-decoration: none;
          white-space: nowrap;
          transition: background-color 0.2s ease;
        }
        .nav-cta:hover { background-color: #E8C96A; }
        .nav-mobile-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          display: none;
          flex-direction: column;
          gap: 5px;
        }
        .nav-hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          transition: all 0.2s;
        }
        .nav-mobile-menu {
          background-color: #111111;
          border-top: 1px solid #1E1E1E;
          padding: 16px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          display: none;
        }
        .nav-mobile-link {
          font-family: var(--font-inter), sans-serif;
          font-weight: 400;
          font-size: 16px;
          color: #AAAAAA;
          text-decoration: none;
          padding: 4px 0 16px;
          border-bottom: 1px solid #1E1E1E;
        }
        .nav-mobile-cta {
          font-family: var(--font-inter), sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: #080808;
          background-color: #C9A84C;
          padding: 12px 18px;
          border-radius: 2px;
          text-decoration: none;
          text-align: center;
          margin-top: 8px;
        }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
          .nav-mobile-menu { display: flex !important; }
        }
      `}</style>
    </>
  )
}

'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#080808',
        borderTop: '1px solid #1E1E1E',
        padding: '64px 24px 32px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Main footer grid */}
        <div className="footer-grid" style={{ marginBottom: '48px' }}>
          {/* Left: Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginBottom: '12px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-space), sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#C9A84C',
                }}
              >
                OTJ
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-space), sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#FFFFFF',
                }}
              >
                APP
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '14px',
                color: '#555555',
                lineHeight: 1.6,
                maxWidth: '240px',
              }}
            >
              See everything. In real time.
            </p>
          </div>

          {/* Middle: Ecosystem */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-space), sans-serif',
                fontWeight: 600,
                fontSize: '11px',
                color: '#C9A84C',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Ecosystem
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <FooterLink href="https://otjcapital.com">otjcapital.com</FooterLink>
              <FooterLink href="https://otjholdings.com">otjholdings.com</FooterLink>
              <FooterLink href="https://otjfellowship.com">otjfellowship.com</FooterLink>
              <FooterLink href="https://otj.app">otj.app</FooterLink>
            </div>
          </div>

          {/* Right: Contact */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-space), sans-serif',
                fontWeight: 600,
                fontSize: '11px',
                color: '#C9A84C',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Contact
            </p>
            <a href="mailto:hello@otjholdings.com" className="footer-email-link">
              hello@otjholdings.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid #1E1E1E',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '13px',
              color: '#555555',
            }}
          >
            © 2026 OTJ Holdings. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '13px',
              color: '#2A2A2A',
            }}
          >
            The Transparency Layer
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
        }
        .footer-link {
          font-family: var(--font-inter), sans-serif;
          font-size: 14px;
          color: #888888;
          text-decoration: none;
          display: block;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #C9A84C;
        }
        .footer-email-link {
          font-family: var(--font-inter), sans-serif;
          font-size: 14px;
          color: #888888;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-email-link:hover {
          color: #C9A84C;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="footer-link"
    >
      {children}
    </a>
  )
}

'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const inputStyle: React.CSSProperties = {
  background: '#111',
  color: '#fff',
  border: '1px solid #333',
  padding: '12px 16px',
  width: '100%',
  fontFamily: 'var(--font-inter)',
  fontSize: '15px',
  outline: 'none',
  boxSizing: 'border-box',
}

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: 'none',
  cursor: 'pointer',
}

const btnStyle: React.CSSProperties = {
  background: '#fff',
  color: '#000',
  padding: '14px 28px',
  border: 'none',
  fontFamily: 'var(--font-sg)',
  fontWeight: 700,
  fontSize: '15px',
  cursor: 'pointer',
  marginTop: '16px',
}

const backBtnStyle: React.CSSProperties = {
  background: 'transparent',
  color: '#555',
  padding: '10px 0',
  border: 'none',
  fontFamily: 'var(--font-inter)',
  fontSize: '14px',
  cursor: 'pointer',
  marginTop: '12px',
}

export default function Waitlist() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [capital, setCapital] = useState('')

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = '#fff'
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = '#333'
  }

  return (
    <section id="waitlist" ref={ref} style={{ padding:'120px 32px',background:'#000' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'} style={{ maxWidth:'560px',margin:'0 auto' }}>
        <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-mono)',fontSize:'11px',letterSpacing:'2px',color:'#555',marginBottom:'32px' }}>EARLY ACCESS</motion.div>
        <motion.h2 variants={fadeUp} style={{ fontFamily:'var(--font-sg)',fontWeight:800,fontSize:'clamp(32px,5vw,56px)',color:'#fff',letterSpacing:'-1.5px',lineHeight:1.1,marginBottom:'24px' }}>Get in before<br />it opens.</motion.h2>
        <motion.p variants={fadeUp} style={{ fontSize:'17px',color:'#888',lineHeight:1.7,marginBottom:'40px' }}>OTJ App launches Q3 2026. Early access goes to founding investors and Fellowship members first.</motion.p>

        {step < 4 && (
          <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-mono)',fontSize:'11px',color:'#555',marginBottom:'24px',letterSpacing:'1px' }}>
            Step {step} of 3
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity:0,y:8 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-8 }} transition={{ duration:0.2 }}>
              <label style={{ fontFamily:'var(--font-inter)',fontSize:'13px',color:'#888',display:'block',marginBottom:'8px' }}>Email address</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <button
                onClick={() => { if (email) setStep(2) }}
                style={btnStyle}
              >Join Waitlist →</button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity:0,y:8 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-8 }} transition={{ duration:0.2 }}>
              <div style={{ marginBottom:'20px' }}>
                <label style={{ fontFamily:'var(--font-inter)',fontSize:'13px',color:'#888',display:'block',marginBottom:'8px' }}>Full name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label style={{ fontFamily:'var(--font-inter)',fontSize:'13px',color:'#888',display:'block',marginBottom:'8px' }}>Role</label>
                <select
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  style={selectStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                >
                  <option value="" disabled style={{ background:'#111' }}>Select your role</option>
                  {['Fund Manager','Individual Investor','Family Office','Crypto Trader','Other'].map(r => (
                    <option key={r} value={r} style={{ background:'#111' }}>{r}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => { if (name && role) setStep(3) }}
                style={btnStyle}
              >→ Continue</button>
              <br />
              <button onClick={() => setStep(1)} style={backBtnStyle}>← Back</button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity:0,y:8 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-8 }} transition={{ duration:0.2 }}>
              <label style={{ fontFamily:'var(--font-inter)',fontSize:'13px',color:'#888',display:'block',marginBottom:'8px' }}>How much capital are you considering allocating?</label>
              <select
                value={capital}
                onChange={e => setCapital(e.target.value)}
                style={selectStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <option value="" disabled style={{ background:'#111' }}>Select a range</option>
                {['<$50K','$50K-$250K','$250K-$1M','>$1M','Just exploring'].map(c => (
                  <option key={c} value={c} style={{ background:'#111' }}>{c}</option>
                ))}
              </select>
              <button
                onClick={() => { if (capital) setStep(4) }}
                style={btnStyle}
              >→ Continue</button>
              <br />
              <button onClick={() => setStep(2)} style={backBtnStyle}>← Back</button>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" initial={{ opacity:0,y:8 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-8 }} transition={{ duration:0.2 }}>
              <div style={{ padding:'32px',border:'1px solid #fff' }}>
                <div style={{ fontFamily:'var(--font-sg)',color:'#fff',fontSize:'18px',fontWeight:700,marginBottom:'12px' }}>
                  You are on the waitlist.
                </div>
                <p style={{ fontFamily:'var(--font-inter)',fontSize:'15px',color:'#888',lineHeight:1.7,marginBottom:'20px' }}>
                  We will reach out when we are ready.
                </p>
                <div style={{ fontFamily:'var(--font-mono)',fontSize:'13px',color:'#555',letterSpacing:'1px' }}>
                  You are <span style={{ color:'#fff',fontWeight:600 }}>#847</span> on the list.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {step < 4 && (
          <motion.p variants={fadeUp} style={{ fontFamily:'var(--font-inter)',fontSize:'12px',color:'#444',marginTop:'16px' }}>No spam. One email when access opens.</motion.p>
        )}
      </motion.div>
    </section>
  )
}

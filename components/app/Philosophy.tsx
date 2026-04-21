'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp } from '@/lib/animations'

export default function Philosophy() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section
      style={{
        backgroundColor: '#0D0D0D',
        padding: '120px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          style={{
            backgroundColor: '#141414',
            borderLeft: '4px solid #C9A84C',
            borderRadius: '4px',
            padding: 'clamp(48px, 6vw, 80px)',
          }}
        >
          <blockquote
            style={{
              fontFamily: 'var(--font-space), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              lineHeight: 1.4,
              color: '#FFFFFF',
              textAlign: 'center',
              margin: 0,
            }}
          >
            &ldquo;If you cannot show your investors
            exactly what you are doing,
            you should not be managing
            their money.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

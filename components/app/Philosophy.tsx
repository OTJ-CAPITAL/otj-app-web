'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp } from '@/lib/animations'

export default function Philosophy() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section ref={ref} style={{ background: '#0D0D0D', padding: '120px 32px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{ borderLeft: '4px solid #C9A84C', padding: '48px 56px', background: '#141414', borderRadius: '4px' }}>
          <p style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 40px)', color: '#FFFFFF', lineHeight: 1.5 }}>
            "If you cannot show your investors exactly what you are doing, you should not be managing their money."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

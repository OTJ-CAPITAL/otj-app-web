'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp } from '@/lib/animations'

export default function Philosophy() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  return (
    <section ref={ref} style={{ padding:'96px 32px',background:'#F5F5F5',borderBottom:'1px solid #E5E5E5' }}>
      <motion.div variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} style={{ maxWidth:'800px',margin:'0 auto' }}>
        <p style={{ fontFamily:'var(--font-sg)',fontWeight:800,fontSize:'clamp(22px,3vw,38px)',color:'#000',lineHeight:1.4,letterSpacing:'-0.5px',borderLeft:'4px solid #000',paddingLeft:'32px' }}>
          &quot;If you cannot show your investors exactly what you are doing with their money, you should not be managing it.&quot;
        </p>
      </motion.div>
    </section>
  )
}

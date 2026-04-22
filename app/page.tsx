import dynamic from 'next/dynamic'
import Navigation from '@/components/shared/Navigation'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/app/Hero'
import Philosophy from '@/components/app/Philosophy'
import Features from '@/components/app/Features'
import LiveFeed from '@/components/app/LiveFeed'
import Waitlist from '@/components/app/Waitlist'

const DashboardPreview = dynamic(() => import('@/components/app/DashboardPreview'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Philosophy />
      <Features />
      <LiveFeed />
      <DashboardPreview />
      <Waitlist />
      <Footer />
    </main>
  )
}

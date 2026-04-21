import Navigation from '@/components/shared/Navigation'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/app/Hero'
import Philosophy from '@/components/app/Philosophy'
import Features from '@/components/app/Features'
import DashboardPreview from '@/components/app/DashboardPreview'
import Waitlist from '@/components/app/Waitlist'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Philosophy />
      <Features />
      <DashboardPreview />
      <Waitlist />
      <Footer />
    </main>
  )
}

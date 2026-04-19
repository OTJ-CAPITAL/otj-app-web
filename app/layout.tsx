import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OTJ App — Investor Dashboard',
  description: 'Real-time portfolio visibility, AI signals, and full trade transparency for OTJ Capital investors.',
  openGraph: { title: 'OTJ App', url: 'https://otj.app' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}

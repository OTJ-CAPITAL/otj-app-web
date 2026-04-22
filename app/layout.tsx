import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
const spaceGrotesk = Space_Grotesk({ subsets:['latin'], weight:['400','500','600','700'], variable:'--font-sg' })
const inter = Inter({ subsets:['latin'], weight:['400','500','600'], variable:'--font-inter' })
const mono = JetBrains_Mono({ subsets:['latin'], weight:['400','500'], variable:'--font-mono' })
export const metadata: Metadata = {
  title: 'OTJ App — See Every Trade Live',
  description: 'Real-time portfolio transparency for OTJ Capital investors.',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}

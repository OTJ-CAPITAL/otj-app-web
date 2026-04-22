import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'OTJ App — See Everything. In Real Time.', description: 'Your capital. Always visible. Every trade. Every signal. Every position. Auditable.' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}

import type { Metadata } from 'next'
import './globals.css'
import '../styles/fonts.css'

export const metadata: Metadata = {
  title: 'Anita Gattei Art Portfolio',
  description: 'Contemporary Visual Artworks',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

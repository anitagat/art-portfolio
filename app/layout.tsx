import type { Metadata } from 'next'
import './globals.css'
import '../styles/fonts.css'
import Head from 'next/head'

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
      <Head>
        <link rel="icon" href="/images/depths_copia.png" type="image/png" />
      </Head>
      <body>{children}</body>
    </html>
  )
}

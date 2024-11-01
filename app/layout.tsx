import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PressPlay',
  description: 'PressPlay is a music streaming platform that allows you to listen to your favorite songs and artists.',
  manifest: '/manifest.json',
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
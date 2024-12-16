import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'

const cormorantGaramond = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Anna Dobson',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.className} antialiased bg-[#1d16f0] text-xl font-semibold overflow-hidden text-neutral-50`}
      >
        <Header />
        <div className="relative">{children}</div>
      </body>
    </html>
  )
}

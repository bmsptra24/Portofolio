import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Background from '@/components/Background/Background'

const josh = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bmsptra24 Blog',
  description: 'Blog by Bima Saputra',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={josh.className}>
        <main className="text-xl text-slate-800 leading-7 tracking-wide flex flex-col items-center w-full relative">
          {children}
        </main>
      </body>
    </html>
  )
}

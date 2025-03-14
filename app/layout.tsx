import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React from 'react'
import Providers from '@/components/providers'

export const poppins: Poppins = {
  subsets: ['latin'],
  weight: ['500', '800']
}

export const metadata: Metadata = {
  title: 'Full Stack Developer Portfolio',
  description: 'Portfolio website for a full stack web developer'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`Poppins.className`}>
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

import React from 'react'
import { Inter } from 'next/font/google'
import NavHome
 from '@/components/NavHome'
const inter = Inter({ subsets: ['latin'] })

export default function ResumeLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className='h-screen bg-slate-800'>
        <main className={inter.className}>{children}</main>
        </body>
      </html>
    )
  }
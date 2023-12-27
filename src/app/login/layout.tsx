'use client'
import React from 'react'
import '@/styles/globals.css'
import '@/styles/variables.module.scss'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {children}
    </main>
  )
}

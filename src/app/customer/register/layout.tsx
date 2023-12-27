import React from 'react'

import '@/styles//globals.css'
import '@/styles/variables.module.scss'

import Footer from '@/components/layoutComponents/footer'
import NavBar from "@/components/layoutComponents/navBar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar/>
        {children}
      <Footer/>
    </>
  )
}

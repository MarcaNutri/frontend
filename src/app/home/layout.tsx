import React from 'react'

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

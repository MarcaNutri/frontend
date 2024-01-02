import React from 'react'

import '@/styles//globals.css'
import '@/styles/variables.module.scss'

import Footer from '@/components/layoutComponents/footer'
import NavBar from "@/components/layoutComponents/navBar"
import Banner from '@/components/layoutComponents/banner'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar/>
      <Banner text='Redefinição de senha'/>
        {children}
    </>
  )
}

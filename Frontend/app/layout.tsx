"use client"
import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import { AuthProvider, useAuth } from './(auth)/AuthContext'
import { useEffect } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <html lang="en">
        <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <AuthProvider>
              <Header />
              {children}
              <Banner />
            </AuthProvider>
          </div>
        </body>
      </html>
    </GoogleOAuthProvider>
  )
}

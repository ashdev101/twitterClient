import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleAuthProvider from '@/providers/GoogleAuthProvider';
import { Toaster } from 'react-hot-toast';
import ReactQueryProvider from '@/providers/ReactQueryProvider';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAuthProvider>
          <ReactQueryProvider>
            <Toaster />
            {children}
          </ReactQueryProvider>
        </GoogleAuthProvider>

      </body>
    </html>
  )
}

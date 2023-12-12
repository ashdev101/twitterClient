import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleAuthProvider from '@/providers/GoogleAuthProvider';
import { Toaster } from 'react-hot-toast';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import ReduxProvider from '@/providers/ReduxProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: "twitterclient/public/twitter.png"
  },
  title: 'X',
  description: '',
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
          <ReduxProvider>
            <ReactQueryProvider>
              <Toaster />
              {children}
            </ReactQueryProvider>
          </ReduxProvider>
        </GoogleAuthProvider>

      </body>
    </html>
  )
}

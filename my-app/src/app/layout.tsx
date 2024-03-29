import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/src/styles/globals.css'
import '@/src/styles/main.scss'
import Footer from '@/src/components/layout/footer/page'
import Navbar from '@/src/components/layout/navbar/page'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AppContextProvider } from '../context/AppContext'
import { AuthProvider } from '../context/user/userContextProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MindBender',
  description:
    'Main purpose of MindBender is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.',
  keywords: ['Next.js', 'React', 'JavaScript'],
  openGraph: {
    title: 'Layout',
    description: 'Layout',
  },
  metadataBase: new URL('https://www.codebloglab.website'),
  twitter: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Next.js" />
        <meta name="author" content="Muhammad Muzammil Safdar" />
        <link rel="author" href="https://codebloglab.website/" />
        <meta name="generator" content="Next.js" />
        <meta name="keywords" content="Next.js,React,JavaScript" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="color-scheme" content="light" />
        <meta name="creator" content="codebloglab.website" />
        <meta name="publisher" content="codebloglab.website" />
        {/* og */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="codebloglab.website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        {/* icon */}
        <meta name="theme-color" content="#f73e3e" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <link
          rel="apple-touch-icon"
          href="/favicon/apple-touch-icon.png"
          type="image/png"
        />

        <link
          rel="apple-touch-icon"
          href="/favicon/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        {/* twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@codebloglab" />
        <meta property="twitter:domain" content="codebloglab.website" />
        <meta
          name="ahrefs-site-verification"
          content="234939215ab82c4e0069a4dfb6f90dcda6f5777af678e3dffac7654efdddbf42"
        ></meta>
        <meta
          name="google-site-verification"
          content="TLC1ScjuJKnpeLltQJOI6Xu0QwitVD-gOYWCfoQarwo"
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <ToastContainer />
        </AuthProvider>
        {/* <Footer /> */}
      </body>
    </html>
  )
}

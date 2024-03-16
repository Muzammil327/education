import React from 'react'
import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'

const data = {
  title: 'About Us | MindBender',
  description:
    'Main purpose of MindBender is to empowering through education and technical skills. Dive into study and technical work for personal and professional growth.',
  canonical: '/about',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://www.mindbenderquiz.com/about',
  keywords: [
    'mindbender about',
    'about mindbender',
    'Mindbender about',
    'about Mindbender',
  ],
}
export default function page() {
  return (
    <>
      <SubHeader title="About Us" />
    </>
  )
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    images: [
      {
        url: data.image,
        alt: data.title,
      },
    ],
  },
  alternates: {
    canonical: data.canonical,
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow,
    },
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: data.image,
      alt: data.title,
    },
  },
}

import React from 'react'
import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import EnglishComp from './UrduComp'

const data = {
  title: 'Class 9 Punjab Board Biology Books Urdu Medium',
  description:
    'You can download the Class 9 Punjab Board biology book urdu medium in PDF format, also include the chapter-wise, and for free. Enjoy learning!',
  canonical: '/class-9/punjab/punjab-board/biology/urdu',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://www.mindbenderquiz.com/class-9/punjab-board/biology/urdu',
  keywords: [
    'mindbender Class 9 Punjab Board Biology Books Urdu Medium',
    'Class 9 Punjab Board Biology Books Urdu Medium mindbender',
    'Mindbender Class 9 Punjab Board Biology Books Urdu Medium',
    'Class 9 Punjab Board Biology Books Urdu Medium Mindbender',
  ],
}
export default function page() {
  return (
    <>
      <SubHeader title="Class 9 Punjab Board Biology Books Urdu Medium " />
      <EnglishComp />
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

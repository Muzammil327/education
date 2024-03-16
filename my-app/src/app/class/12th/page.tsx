import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Container from '@/src/components/elements/container/page'
import Card from '@/src/components/cards/page'
import { CardDataType } from '@/src/types/card/page'
import { Class12CardData } from '@/src/app/class/12th/data'

const data = {
  title: 'Class 12 | MindBender',
  description:
    'Explore essential resources for Class 12 students in Pakistan: Date Sheets, Past Papers, Results, Study Tools, and more available here!',
  canonical: '/class/12th',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://www.mindbenderquiz.com/class/12th',
  keywords: [
    'mindbender class 12',
    'mindbender class 12th',
    'class 12th mindbender',
    'class 12 mindbender',
    'class 12 books',
    'class 12 notes',
    'class 12 past paper',
    'class 12 pairing scheme',
  ],
}

export default function Page() {
  return (
    <>
      <SubHeader title="Class 12" />
      <Container>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 py-12 mb-12 md:gap-6">
          {Class12CardData.map((data: CardDataType) => (
            <Card
              key={data.id}
              title={data.title}
              description={data.description}
              href={data.href}
              image={data.image}
            />
          ))}
        </div>
      </Container>
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

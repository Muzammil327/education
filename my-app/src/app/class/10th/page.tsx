import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Container from '@/src/components/elements/container/page'
import Card from '@/src/components/cards/page'
import { CardDataType } from '@/src/types/card/page'
import { Class10CardData } from '@/src/app/class/10th/data'

const data = {
  title: 'Class 10 | MindBender',
  description:
    'Explore essential resources for Class 10 students in Pakistan: Date Sheets, Past Papers, Results, Study Tools, and more available here!',
  canonical: '/class/10th',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://www.mindbenderquiz.com/class/10th',
  keywords: [
    'mindbender class 10',
    'mindbender class 10th',
    'class 10th mindbender',
    'class 10 mindbender',
    'class 10 books',
    'class 10 notes',
    'class 10 past paper',
    'class 10 pairing scheme',
  ],
}

export default function Page() {
  return (
    <>
      <SubHeader title="Class 10" />
      <Container>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 py-12 mb-12 md:gap-6">
          {Class10CardData.map((data: CardDataType) => (
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

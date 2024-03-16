import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Container from '@/src/components/elements/container/page'
import Card from '@/src/components/cards/page'
import { CardDataType } from '@/src/types/card/page'
import { Class11NotesCardData } from '@/src/app/class/11th/notes/data'

const data = {
  title: 'Class 9 Books | MindBender',
  description:
    'Access class 9 textbooks online for all subjects and boards. Enhance your learning experience now, with study online or download pdf.',
  canonical: '/class-9/book',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://www.mindbenderquiz.com/class-9/book',
  keywords: [
    'mindbender Class 9 Books',
    'Class 9 Books mindbender',
    'Class 9 Books',
    'Class 9th Books',
    '9 Class Books',
    '9th Class Books',
  ],
}

export default function Page() {
  return (
    <>
      <SubHeader title="Class 9 Books" />
      <Container>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 py-12 mb-12 md:gap-6">
          {Class11NotesCardData.map((data: CardDataType) => (
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

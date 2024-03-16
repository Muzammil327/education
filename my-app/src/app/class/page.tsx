import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Container from '@/src/components/elements/container/page'
import Card from '@/src/components/cards/page'
import { CardDataType } from '@/src/types/card/page'
import { ClassCardData } from '@/src/app/class/data'

const data = {
  title: 'All Classes Complete Guide | MindBender',
  description:
    'Explore essential resources for students in Pakistan all classes: Date Sheets, Past Papers, Results, Study Tools, and more available here!',
  canonical: '/class',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://www.mindbenderquiz.com/class',
  keywords: [
    'mindbender',
    'class 9 mindbender',
    'class 10 mindbender',
    'class 11 mindbender',
    'class 12 mindbender',
    'class books',
    'class notes',
    'class past paper',
  ],
}

export default function Page() {
  return (
    <>
      <SubHeader title={data.title} />
      <Container>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 py-12 mb-12 md:gap-6">
          {ClassCardData.map((data: CardDataType) => {
            return (
              <Card
                key={data.id}
                title={data.title}
                description={data.description}
                href={data.href}
                image={data.image}
              />
            )
          })}
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

import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Container from '@/src/components/elements/container/page'
import { CardDataType } from '@/src/types/card/page'
import { Class9BiologyMcqsCardData } from '@/src/app/class/9th/mcqs/biology/data'
import SCard from '@/src/components/cards/SCard/page'

const data = {
  title: 'Class 9 Biology MCQs | MindBender',
  description:
    'MCQs for Class 9 Book Biology Organized chapter-wise, these MCQs cover essential topics to help you, in your studies.',
  canonical: '/class/9th/mcqs',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://www.mindbenderquiz.com/class/9th/mcqs',
  keywords: [
    'mindbender class 9 mcqs',
    'mindbender class 9th mcqs',
    'class 9th mindbender mcqs',
    'class 9 mcqs',
    'class 9 books',
    'class 9 physics mcqs',
    'class 9 biology mcqs',
    'class 9 chemistry mcqs',
    'class 9 math mcqs',
  ],
}

export default function Page() {
  return (
    <>
      <SubHeader title={data.title} />
      <Container>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 py-12 mb-12 md:gap-6">
          {Class9BiologyMcqsCardData.map((data: CardDataType) => {
            return (
              <SCard key={data.id} data={data}/>
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

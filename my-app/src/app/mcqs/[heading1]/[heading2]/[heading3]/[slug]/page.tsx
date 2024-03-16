'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Link from 'next/link'
import Container from '@/src/components/elements/container/page'
import slugify from 'slugify'
import { useParams } from 'next/navigation'
import McqsSkeletonLoader from '@/src/components/mcqs/skeleton/mcqs/page'
import McqsContainer from './slider'

interface McqsData {
  _id: string
  McqsId: number
  name: string
  correct: string
  image: string
  tags: string[]
  options: string[]
  slug: string
  __v: number
}

const datas = {
  title: 'Class 9 Chapter 1 Biology MCQs',
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
  const params = useParams()
  const slug = params.slug
  let formattedSlug: string;
  if (typeof slug === 'string') {
      formattedSlug = slug.replace(/-/g, ' ');
  } else {
      formattedSlug = slug.join(' ').replace(/-/g, ' ');
  }

  const [data, setData] = useState<McqsData | null>(null)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = `${process.env.NEXT_PUBLIC_API_KEY}get/mcqs/${slug}`
        const response = await axios.get(URL)
        setData(response.data)
        setLoader(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoader(false)
      }
    }
    fetchData()
  }, [slug])

  return (
    <>
      <SubHeader title={formattedSlug} />
      <McqsContainer loader={loader} data={data} />
    </>
  )
}

// export async function generateMetadata(props: any) {
//   const slug = props.params.slug;
//   // const post = getPostContent(slug, directories);
//   return {
//     // title: post?.data.title,
//     // description: post?.data.para,
//     // keywords: data.keywords,
//     alternates: {
//       canonical: `posts/${slug}`,
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//       },
//     },
//     openGraph: {
//       // title: post?.data.title,
//       // description: post?.data.para,
//       url: `posts/${slug}`,
//       images: [
//         {
//           // url: post?.data.image,
//           // alt: post?.data.para,
//         },
//       ],
//     },
//     twitter: {
//       // title: post?.data.title,
//       // description: post?.data.para,
//       images: {
//         // url: post?.data.image,
//         // alt: post?.data.para,
//       },
//     },
//   };
// }


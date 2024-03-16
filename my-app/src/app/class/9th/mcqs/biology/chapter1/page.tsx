'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Container from '@/src/components/elements/container/page'
import McqsSkeletonLoader from '@/src/components/mcqs/skeleton/chapter/page'
import MCQItem from './MCQItem'
import ButtonWithLoader from '@/src/components/elements/button/page'

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
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.NEXT_PUBLIC_API_KEY}get/mcqs`

      const response = await axios.get(URL)
      setData(response.data)
      setLoader(false)
    }
    fetchData()
  }, [])

  const dataFilter = data.filter(
    (datas: any) =>
      datas.tags.includes('class 9') &&
      datas.tags.includes('biology') &&
      datas.tags.includes('chapter 1')
  )

  return (
    <>
      <SubHeader title={datas.title} />

      <Container>
        {/* total array length */}
        <ButtonWithLoader href="" className="">
          {dataFilter.length}
        </ButtonWithLoader>
        {loader ? (
          <>
            <McqsSkeletonLoader />
            <McqsSkeletonLoader />
            <McqsSkeletonLoader />
            <McqsSkeletonLoader />
            <McqsSkeletonLoader />
          </>
        ) : (
          <>
            {dataFilter.splice(0, 15).map((datas: any) => {
              return (
                <>
                  <MCQItem mcq={datas} />
                </>
              )
            })}
          </>
        )}
        {/* array map with filter first 15 */}

        <div className="btngroup flex justify-between items-center mb-12">
          <ButtonWithLoader
            href="/class/9th/mcqs/biology/chapter1/set2"
            className={''}
          >
            Set 2
          </ButtonWithLoader>
        </div>
      </Container>
    </>
  )
}

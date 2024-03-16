'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { SubjectCardTypes } from '@/src/components/card/subjectCard/type'
import SubHeader from '@/src/components/layout/header/subheader/page'
import axios from 'axios'
import Container from '@/src/components/elements/container/page'
import slugify from 'slugify'
import Footer from '@/src/components/layout/footer/page'
import Image from 'next/image'
import { easeOut, motion, useTime, useTransform } from 'framer-motion'

export default function Mcqs() {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.NEXT_PUBLIC_API_KEY}get/book`

      const response = await axios.get(URL)
      setData(response.data)
    }
    fetchData()
  }, [])

  return (
    <>
      <SubHeader title="Mcqs" />
      <section>
        <Container>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-20">
            {loader ? (
              <>
                <Loader />
              </>
            ) : (
              <>
                {data.map((data: any) => {
                  const heading1 = slugify(data.name, { lower: true })
                  return (
                    <>
                      <div
                        className="md:mt-8 mt-4 hover:shadow-md rounded-lg shadow-xl transition-all bg-gray-100/2 dark:bg-gray-800 "
                        key={data.id}
                      >
                        <div className="flex justify-start items-center text-center px-4">
                          <Image
                            src={`/mcqs/book${data.image}`}
                            alt={data.name}
                            title={data.title}
                            width={140}
                            height={140}
                            className="h-28 w-28 p-4"
                          />
                        </div>
                        <div className="pb-3 px-3 rounded-lg">
                          <Link href={`/mcqs/${heading1}`}>
                            <h3 className="font-semibold text-2xl py-2 textld transition-all hover:text-indigo-500 block capitalize">
                              {data.name}
                            </h3>
                          </Link>

                          <p className="text-base text-gray-500 font-normal text-left">
                            {data.para}
                          </p>
                        </div>
                      </div>
                    </>
                  )
                })}
              </>
            )}
          </div>
        </Container>
      </section>
      <Footer />
    </>
  )
}

const data: SubjectCardTypes[] = [
  {
    id: 0,
    title: 'Physics',
    url: '/mcqs/physics',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam minus nostrum.',
    tag1: '22 Lessons',
    tag2: '22 Books',
    image: '/images.jpeg',
  },
  {
    id: 1,
    url: '/mcqs/chemistry',
    title: 'Chemistry',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam minus nostrum.',
    tag1: '22 Lessons',
    tag2: '22 Books',
    image: '/images.jpeg',
  },
  {
    id: 2,
    url: '/mcqs/biology',
    title: 'Biology',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam minus nostrum.',
    tag1: '22 Lessons',
    tag2: '22 Books',
    image: '/images.jpeg',
  },
]

export function Loader() {
  const time = useTime()
  const pulseOpacity = useTransform(
    time,
    [0, 1000, 2000, 3000, 4000, 5000],
    [1, 0, 1, 0, 1, 0],
    {
      ease: easeOut,
    }
  )
  return (
    <>
      <motion.div
        className="md:mt-8 mt-4 hover:shadow-md rounded-lg shadow-xl transition-all bg-gray-100/4 dark:bg-gray-800 "
        style={{ opacity: pulseOpacity }}
      >
        <motion.div className="flex justify-center items-center">
          <image className="h-28 w-28 bg-gray-200 rounded-full mx-auto relative my-4" />
        </motion.div>
        <div className="px-4">
          <Link href="">
            <h3 className="h-6 w-7/12 mb-4 relative bg-gray-200" />
          </Link>
          <p className="h-16 w-full mb-8 relative bg-gray-200" />
        </div>
      </motion.div>
    </>
  )
}

'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import SubHeader from '@/src/components/layout/header/subheader/page'
import axios from 'axios'
import Container from '@/src/components/elements/container/page'
import slugify from 'slugify'

interface Iprops {
  heading3: any
  heading2: any
  heading1: any
}

export default function Propsfdf({ heading2, heading1, heading3 }: Iprops) {
  const heading1slug = heading1.replace(/-/g, ' ')
  const heading2slug = heading2.replace(/-/g, ' ')
  const heading3slug = heading3.replace(/-/g, ' ')
  // filter data on the basis of pages
  const [filterdata, setFilterData] = useState([])
  const [mcqsfilter, setMcqsFilter] = useState([])
  console.log(mcqsfilter)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_KEY}get/heading3`
      )
      const filterpage = response.data.filter((data: any) => {
        return (
          data.heading1 === heading1slug &&
          data.heading2 === heading2slug &&
          data.heading3 === heading3slug
        )
      })
      setFilterData(filterpage)
    }

    fetchData()
  }, [heading1, heading1slug, heading2, heading2slug, heading3, heading3slug])

  // filter data on the basis of mcqs

  useEffect(() => {
    const fetchMcqsData = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_KEY}get/mcqs`
      )
      filterdata.map((data: any) => {
        const filteredMcqs = response.data.filter((mcq: any) =>
          mcq.tags.includes(data.name)
        );
        setMcqsFilter(filteredMcqs);
      });
      
    }
    fetchMcqsData()
  }, [filterdata])

  return (
    <>
      <SubHeader title="Mcqs" />
      <section>
        <Container>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-20">
            {filterdata.map((data: any) => {
              const slug = slugify(data.name, { lower: true })
              return (
                <>
                  <ul>
                    <li>
                      <Link
                        href={`/mcqs/${heading1}/${heading2}/${heading3}/${slug}`}
                      >
                        {data.name}
                      </Link>
                    </li>
                  </ul>
                </>
              )
            })}
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-20">
            {mcqsfilter.map((data: any) => {
              const slug = slugify(data.name, { lower: true })

              return (
                <>
                  <ul>
                    <li>
                      <Link
                        href={`/mcqs/${heading1}/${heading2}/${heading3}/${slug}`}
                      >
                        {data.name}
                      </Link>
                    </li>
                  </ul>
                </>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}

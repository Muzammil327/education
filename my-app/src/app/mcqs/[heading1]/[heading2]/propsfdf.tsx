'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import SubHeader from '@/src/components/layout/header/subheader/page'
import axios from 'axios'
import Container from '@/src/components/elements/container/page'
import slugify from 'slugify'

interface Iprops {
  heading2: any
  heading1: any
}

export default function Propsfdf({ heading2, heading1 }: Iprops) {
  const [data, setData] = useState([])
  const [filterdata, setFilterData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.NEXT_PUBLIC_API_KEY}get/heading2`

      const response = await axios.get(URL)
      setData(response.data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const filter = data.filter((data: any) => {
      const heading1slug = heading1.replace(/-/g, ' ');
      const heading2slug = heading2.replace(/-/g, ' ');

      return data.heading2 === heading2slug && data.heading1 === heading1slug
    })
    setFilterData(filter)
  }, [data, heading2, heading1])

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
                      <Link href={`/mcqs/${heading1}/${heading2}/${slug}`}>
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

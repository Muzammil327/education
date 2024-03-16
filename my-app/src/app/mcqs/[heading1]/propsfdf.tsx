'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import SubHeader from '@/src/components/layout/header/subheader/page'
import axios from 'axios'
import Container from '@/src/components/elements/container/page'
import slugify from 'slugify'

interface Iprops {
  heading1: any
}

export default function Propsfdf({ heading1 }: Iprops) {
  const [data, setData] = useState([])
  const [filterdata, setFilterData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.NEXT_PUBLIC_API_KEY}get/heading1`

      const response = await axios.get(URL)
      setData(response.data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const filter = data.filter((data: any) => {
      const heading1slug = heading1.replace('-', ' ')
      return data.heading1 === heading1slug
    })
    setFilterData(filter)
  }, [data, heading1])

  return (
    <>
      <SubHeader title="Mcqs" />
      <section>
        <Container>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-20">
            {filterdata.map((data: any) => {
              const heading2 = slugify(data.name, { lower: true })
              return (
                <>
                  <ul>
                    <li>
                      <Link href={`/mcqs/${heading1}/${heading2}`}>
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

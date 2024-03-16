'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Page() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.NEXT_PUBLIC_API_KEY}get/mcqs`

      const response = await axios.get(URL)
      setData(response.data)
    }
    fetchData()
  }, [])
  return (
    <>
      {data
        .filter(
          (datas: any) =>
            datas.tags.includes('class 9') && 
            datas.tags.includes('biology') && 
            datas.tags.includes('chapter 1')
        )
        .map((datas: any) => {
          console.log(datas)
          return (
            <>
              <option key={datas.McqsId}>{datas.name}</option>
            </>
          )
        })}
    </>
  )
}

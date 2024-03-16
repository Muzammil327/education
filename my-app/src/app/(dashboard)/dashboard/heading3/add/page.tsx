'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { Iprops } from '../data'

export default function Book() {
  const router = useRouter()

  const [fetchdata, setFetchData] = useState<Iprops[]>([])
  const [fetchdata1, setFetchData1] = useState<Iprops[]>([])
  const [fetchdata2, setFetchData2] = useState<Iprops[]>([])

  const [data, setData] = useState({
    name: '',
    para: '',
    image: '',
    url: '',
    heading1: '',
    heading2: '',
    heading3: '',
  })

  const SubmitHandle = async (e: any) => {
    e.preventDefault()

    try {
      const { para, name, image, url, heading1, heading2, heading3 } = data

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_KEY}post/heading3`,
        {
          para,
          name,
          image,
          url,
          heading1,
          heading2,
          heading3,
        }
      )

      if (response.data.error) {
        toast.error(response.data.error)
        console.log(response.data.error)
      } else {
        setData({
          name: '',
          para: '',
          image: '',
          url: '',
          heading1: '',
          heading2: '',
          heading3: '',
        })
        toast.success(response.data.message)
        router.push('/dashboard/heading3')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // book fetch
    const fetchData = async () => {
      const URL = `${process.env.NEXT_PUBLIC_API_KEY}get/book`

      const response = await axios.get(URL)
      setFetchData(response.data)
    }
    fetchData()

    // heading1 fetch
    const fetchData1 = async () => {
      const URL = `${process.env.NEXT_PUBLIC_API_KEY}get/heading1`

      const response = await axios.get(URL)
      setFetchData1(response.data)
    }
    fetchData1()

    // heading2 fetch

    const fetchData2 = async () => {
      const URL = `${process.env.NEXT_PUBLIC_API_KEY}get/heading2`

      const response = await axios.get(URL)
      setFetchData2(response.data)
    }
    fetchData2()
  }, [])

  return (
    <form className="mx-6 mt-28" onSubmit={SubmitHandle}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12 mt-10">
          <h2 className="text-lg textld font-semibold leading-7 text-center">
            Add Heading 3
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 textld"
              >
                Book Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  id="name"
                  className="block w-full inputld"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 textld"
              >
                Image
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  value={data.image}
                  onChange={(e) => setData({ ...data, image: e.target.value })}
                  id="name"
                  className="block w-full inputld"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="url"
                className="block text-sm font-medium leading-6 textld"
              >
                URL
              </label>
              <div className="mt-2">
                <input
                  type="url"
                  name="name"
                  value={data.url}
                  onChange={(e) => setData({ ...data, url: e.target.value })}
                  id="name"
                  className="block w-full inputld"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="heading1"
                className="block text-sm font-medium leading-6 textld"
              >
                Book Name
              </label>
              <div className="mt-2">
                <select
                  id="heading1"
                  name="heading1"
                  value={data.heading1}
                  onChange={(e) =>
                    setData({ ...data, heading1: e.target.value })
                  }
                  autoComplete="heading1"
                  className="block w-full inputld"
                >
                  <option className="block w-full inputld dark:bg-gray-700">
                    Select
                  </option>
                  {fetchdata.map((data: any) => {
                    return (
                      <>
                        <option className="block w-full inputld dark:bg-gray-700">
                          {data.name}
                        </option>
                      </>
                    )
                  })}
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="heading2"
                className="block text-sm font-medium leading-6 textld"
              >
                Heading 2
              </label>
              <div className="mt-2">
                <select
                  id="heading2"
                  name="heading2"
                  value={data.heading2}
                  onChange={(e) =>
                    setData({ ...data, heading2: e.target.value })
                  }
                  autoComplete="heading2"
                  className="block w-full inputld"
                >
                  <option className="block w-full inputld dark:bg-gray-700">
                    Select
                  </option>
                  {fetchdata1.map((data: any) => {
                    return (
                      <>
                        <option className="block w-full inputld dark:bg-gray-700">
                          {data.name}
                        </option>
                      </>
                    )
                  })}
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="heading3"
                className="block text-sm font-medium leading-6 textld"
              >
                Heading 3
              </label>
              <div className="mt-2">
                <select
                  id="heading3"
                  name="heading3"
                  value={data.heading3}
                  onChange={(e) =>
                    setData({ ...data, heading3: e.target.value })
                  }
                  autoComplete="heading3"
                  className="block w-full inputld"
                >
                  <option className="block w-full inputld dark:bg-gray-700">
                    Select
                  </option>
                  {fetchdata2.map((data: any) => {
                    console.log(data)
                    return (
                      <>
                        <option className="block w-full inputld dark:bg-gray-700">
                          {data.name}
                        </option>
                      </>
                    )
                  })}
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 textld"
              >
                Paragraph
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  value={data.para}
                  onChange={(e) =>
                    setData({
                      ...data,
                      para: e.target.value,
                    })
                  }
                  name="about"
                  rows={3}
                  className="block w-full inputld"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}

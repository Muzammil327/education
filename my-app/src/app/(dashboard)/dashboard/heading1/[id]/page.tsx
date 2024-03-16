'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useParams, useRouter } from 'next/navigation'
import { Iprops } from '../data'

export default function Book() {
  const [fetchdata1, setFetchData1] = useState<Iprops[]>([])

  const { id } = useParams()
  const router = useRouter()

  const [data, setData] = useState({
    heading1: '',
    name: '',
    para: '',
    image: '',
    url: '',
  })

  const SubmitHandle = async (e: any) => {
    e.preventDefault()

    try {
      const { para, name, image, url, heading1 } = data

      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_KEY}update/heading1/${id}`,
        {
          para,
          name,
          image,
          url,
          heading1,
        }
      )

      if (response.data.error) {
        toast.error(response.data.error)
        console.log(response.data.error)
      } else {
        setData({
          heading1: '',
          name: '',
          para: '',
          image: '',
          url: '',
        })
        toast.success(response.data.message)
        router.push('/dashboard/heading1')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.NEXT_PUBLIC_API_KEY}get/sheading1/${id}`

      const response = await axios.get(URL)
      setData(response.data)
    }
    fetchData()

    const fetchData1 = async () => {
      const URL = `${process.env.NEXT_PUBLIC_API_KEY}get/book`
  
      const response = await axios.get(URL)
      setFetchData1(response.data)
    }
    fetchData1()
  }, [id])

  return (
    <form className="mx-6 mt-28" onSubmit={SubmitHandle}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12 mt-10">
          <h2 className="text-lg textld font-semibold leading-7 text-center">
            Update Heading1
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

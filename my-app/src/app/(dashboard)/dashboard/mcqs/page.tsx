'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { Iprops } from './data'

export default function Page() {
  const [data, setData] = useState<Iprops[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.NEXT_PUBLIC_API_KEY}get/mcqs`

      const response = await axios.get(URL)
      setData(response.data)
    }
    fetchData()
  }, [])

  const handleDeleteItem = async (_id: string) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_KEY}delete/mcqs/${_id}`)
      setData(data.filter((item: Iprops) => item._id !== _id))
    } catch (error) {
      console.error('Error deleting item:', error)
    }
  }

  return (
    <>
      <div className="block mt-24">
        <Link
          href="/dashboard/mcqs/add"
          className="btn1 block py-2 px-6 my-3 w-28"
        >
          Add New
        </Link>
      </div>{' '}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mr-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="pr-2 pl-10 py-3">
                Name
              </th>
              <th scope="col" className="pr-2 pl-10 py-3">
                Image
              </th>
              <th scope="col" className="pr-2 pl-20 py-3">
                Option
              </th>
              <th scope="col" className="pr-2 pl-20 py-3">
                Correct
              </th>
              <th scope="col" className="pr-2 pl-10 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((data: Iprops) => {
              return (
                <>
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={data._id}
                  >
                    <th
                      scope="row"
                      className="pr-2 pl-10 capitalize w-4 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data.name}
                    </th>
                    <td className="relative pr-2 pl-10 py-5">
                      <Image
                        src={`/mcqs/book${data.image}`}
                        alt={data.name}
                        title={data.name}
                        height={400}
                        width={1000} // Increase width to 1000 pixels
                        className="h-16 w-auto cursor-pointer"
                      />
                    </td>
                    <td className="pr-2 pl-20 py-5 flex ">
                      <ul>
                        {data.options.map((data, index) => (
                          <li key={index}>{data}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="pr-2 pl-20 py-5 "> {data.correct}</td>
                    <td className="flex items-center pr-2 pl-10 py-5 ">
                      <Link
                        href={`/dashboard/heading3/${data._id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDeleteItem(data._id)}
                        className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

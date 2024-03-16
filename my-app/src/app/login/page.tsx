'use client'
import { useState } from 'react'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Page() {
  const router = useRouter()

  const [data, setData] = useState({
    email: '',
    role: '',
    password: '',
  })

  const SubmitHandle = async (e: any) => {
    e.preventDefault()

    try {
      const { email, password, role } = data

      const response = await axios.post(
        `http://localhost:8000/api/authentication/login`,
        data
      )
      localStorage.setItem('token', response.data.token)

      if (response.data.error) {
        toast.error(response.data.error)
        console.log(response.data.error)
      } else {
        setData({
          email: '',
          password: '',
          role: '',
        })
        toast.success(response.data.message)
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form className="max-w-md mx-auto mt-20" onSubmit={SubmitHandle}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            value={data.email}
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={data.password}
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        <div>
          <label htmlFor="role">Select Role:</label>
          <select
            id="role"
            value={data.role}
            onChange={(e) =>
              setData({
                ...data,
                role: e.target.value,
              })
            }
          >
            <option value="">Select...</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <Link href="/register">Register</Link>
      </form>
    </>
  )
}

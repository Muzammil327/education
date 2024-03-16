'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function NewsletterForm() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    email: '',
  })

  const handleFormSubmit = async (e: any) => {
    e.preventDefault()
    if (loading) return // Prevent multiple submissions while loading
    try {
      setLoading(true)
      const URL = `${process.env.NEXT_PUBLIC_API_KEY}post/newsletter`
      const response = await axios.post(URL, data)
      if (response.data.error) {
        // console.log(response.data.error);
        toast.error(response.data.error)
        setData({
          email: '',
        })
      } else {
        setData({
          email: '',
        })
        toast.success(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error('An error occurred. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className="mt-6 flex max-w-md gap-x-4">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          autoComplete="email"
          required
          className="min-w-0 outline-none flex-auto rounded-md border-0 dark:bg-white/5 px-3.5 py-2 textld shadow-sm ring-1 ring-inset dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <div className="loadingAnimation">
              <div className="loader"></div>
            </div>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>
    </>
  )
}

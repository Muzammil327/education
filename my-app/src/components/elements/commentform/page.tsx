'use client'
import { useState } from 'react'
import ButtonWithLoader from '../button/page'

export default function CommentForm(props: { url: string }) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    fname: '',
    lname: '',
    email: '',
    url: '',
    message: '',
  })

  const handleClick = () => {
    setLoading(true)
    console.log('Button clicked')

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="my-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight textld sm:text-4xl">
          Comment Here
        </h2>
      </div>
      <form className="mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-normal font-semibold leading-6 textld"
            >
              First name :
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={data.fname}
                onChange={(e) => setData({ ...data, fname: e.target.value })}
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full inputld"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-normal font-semibold leading-6 textld"
            >
              Last name :
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                value={data.lname}
                onChange={(e) => setData({ ...data, lname: e.target.value })}
                id="last-name"
                autoComplete="family-name"
                className="block w-full inputld"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-normal font-semibold leading-6 textld"
            >
              Email :
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full inputld"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-normal font-semibold leading-6 textld"
            >
              Url :
            </label>
            <div className="mt-2.5">
              <input
                type="url"
                value={props.url}
                onChange={(e) => setData({ ...data, url: e.target.value })}
                name="url"
                id="url"
                disabled
                className="block w-full inputld"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-normal font-semibold leading-6 textld"
            >
              Message :
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                rows={4}
                className="block w-full inputld"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <ButtonWithLoader
            className="w-full"
            onClick={handleClick}
            setLoading={setLoading}
          >
            Submit Here
          </ButtonWithLoader>
        </div>
      </form>
    </div>
  )
}

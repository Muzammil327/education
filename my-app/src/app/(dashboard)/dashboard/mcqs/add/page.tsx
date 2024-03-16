'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { COUNTRIES } from './countries'

const suggestions = COUNTRIES

export default function Mcqs() {
  const [tags, setTags] = useState<string[]>([])
  const [suggestedTags, setSuggestedTags] = useState<string[]>([])
  const [options, setOptions] = useState<string[]>([])
  const [suggestedOptions, setSuggestedOptions] = useState<string[]>([])

  const [formData, setFormData] = useState<{
    name: string
    image: string
    correct: string
    para: string
    tags: string[] // Specify type as string[]
    options: string[] // Specify type as string[]
  }>({
    name: '',
    correct: '',
    image: '',
    para: '',
    tags: [], // Initialize as empty array
    options: [], // Initialize as empty array
  })

  const removeItem = (
    indexToRemove: number,
    setItems: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    )
  }

  const addItem = (
    event: React.KeyboardEvent<HTMLInputElement>,
    items: string[],
    setItems: React.Dispatch<React.SetStateAction<string[]>>,
    setSuggestedItems: React.Dispatch<React.SetStateAction<string[]>>,
    formDataKey?: keyof typeof formData
  ) => {
    const target = event.target as HTMLInputElement
    if (target.value !== '') {
      const newItem = target.value.trim()
      if (newItem && !items.includes(newItem)) {
        setItems((prevItems) => [...prevItems, newItem])
        if (formDataKey)
          setFormData((prevFormData) => ({
            ...prevFormData,
            [formDataKey]: [...prevFormData[formDataKey], newItem],
          }))
      }
      target.value = ''
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    const { name, value } = target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    const inputValue = value.trim()
    if (name === 'name') {
      const suggestedTags = suggestions.filter((tag) =>
        tag.toLowerCase().includes(inputValue.toLowerCase())
      )
      setSuggestedTags(suggestedTags)
    } else {
      const suggestedOptions = suggestions.filter((option) =>
        option.toLowerCase().includes(inputValue.toLowerCase())
      )
      setSuggestedOptions(suggestedOptions)
    }
  }

  const SubmitHandle = async (e: any) => {
    e.preventDefault()
    const URL = `${process.env.NEXT_PUBLIC_API_KEY}post/mcqs`
    const response = await axios.post(URL, formData)
    try {
      if (response.data.error) {
        console.log(response.data.error)
      } else {
        setFormData({
          name: '',
          correct: '',
          image: '',
          para: '',
          tags: [], // Initialize as empty array
          options: [], // Initialize as empty array
        })
        setTags([]) // Clear the tags field
        setOptions([]) // Clear the options field
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      className="mx-6 mt-28"
      onSubmit={SubmitHandle}
      onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12 mt-10">
          <h2 className="text-lg textld font-semibold leading-7 text-center">
            Add Mcqs
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 textld"
              >
                Question Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
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
                Correct Answer
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  value={formData.correct}
                  onChange={(e) =>
                    setFormData({ ...formData, correct: e.target.value })
                  }
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
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  id="name"
                  className="block w-full inputld"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="options"
                className="block text-sm font-medium leading-6 textld"
              >
                Add Options
              </label>
              <div className="mt-2">
                <ul id="flex gap-4">
                  {options.map((option, index) => (
                    <li key={index} className="bg-red-400 py-2 px-3">
                      <span className="text-white">{option}</span>
                      <span
                        className="bg-white p-1 rounded-full"
                        onClick={() => removeItem(index, setOptions)}
                      >
                        x
                      </span>
                    </li>
                  ))}
                </ul>
                <input
                  type="text"
                  onKeyUp={(event) =>
                    event.key === 'Enter'
                      ? addItem(
                          event,
                          options,
                          setOptions,
                          setSuggestedOptions,
                          'options'
                        )
                      : null
                  }
                  onChange={handleChange}
                  className="block w-full inputld"
                  placeholder="Press enter to add options"
                />
                <datalist id="suggestions-options">
                  {suggestedOptions.map((option, index) => (
                    <option key={index} value={option} />
                  ))}
                </datalist>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="tags"
                className="block text-sm font-medium leading-6 textld"
              >
                Add Tags
              </label>
              <div className="mt-2">
                <ul id="flex gap-4">
                  {tags.map((tag, index) => (
                    <li key={index} className="bg-red-400 py-2 px-3">
                      <span className="text-white">{tag}</span>
                      <span
                        className="bg-white p-1 rounded-full"
                        onClick={() => removeItem(index, setTags)}
                      >
                        x
                      </span>
                    </li>
                  ))}
                </ul>
                <input
                  type="text"
                  onKeyUp={(event) =>
                    event.key === 'Enter'
                      ? addItem(event, tags, setTags, setSuggestedTags, 'tags')
                      : null
                  }
                  onChange={handleChange}
                  list="suggestions"
                  className="block w-full inputld"
                  placeholder="Press enter to add tags"
                />
                <datalist id="suggestions">
                  {suggestedTags.map((tag, index) => (
                    <option key={index} value={tag} />
                  ))}
                </datalist>
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
                  value={formData.para}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
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

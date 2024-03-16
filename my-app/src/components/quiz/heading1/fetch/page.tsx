import { useEffect, useState } from 'react'

type BookDescriptions = {
  [book: string]: string
}

const useBookDescriptions = () => {
  const [bookDescriptions, setBookDescriptions] = useState<BookDescriptions>({})
  console.log(bookDescriptions)

  useEffect(() => {
    const fetchBookDescriptions = async () => {
      try {
        const baseUrl =
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:8000'
            : 'https://education-website-backend.vercel.app'

        const apiUrl = `${baseUrl}/api/get/all-descriptions`
        const response = await fetch(apiUrl)
        console.log(response)

        if (response.ok) {
          const data = await response.json()
          setBookDescriptions(data)
        } else {
          console.error(
            'Failed to fetch book descriptions:',
            response.statusText
          )
        }
      } catch (error) {
        console.error('Error fetching book descriptions:', error)
      }
    }

    fetchBookDescriptions()
  }, [])

  return bookDescriptions
}

export default useBookDescriptions

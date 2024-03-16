'use client'
import { useState, useEffect, Key } from 'react'
import slugify from 'slugify'
import Link from 'next/link'
import { Mcq } from '@/src/types/quiz/page'
import Container from '@/src/components/elements/container/page'

export default function QuizHeading1(props: { params: string }) {
  const [uniqueBooks, setUniqueBooks] = useState<string[]>([])
  // console.log("uniqueBooks:", uniqueBooks);
  // console.log("check param:", params.book);

  useEffect(() => {
    const fetchMcqs = async () => {
      try {
        let baseUrl

        if (process.env.NODE_ENV === 'development') {
          baseUrl = 'http://localhost:8000'
        } else {
          baseUrl = 'https://education-website-backend.vercel.app'
        }

        const apiUrl = `${baseUrl}/api/get/book/${props.params}`
        const response = await fetch(apiUrl)
        const data: { [key: string]: Mcq } = await response.json()
        // console.log("response:", response);
        // console.log("data:", data);

        // Convert the object into an array
        const mcqsArray = Object.values(data)
        // console.log("mcqsArray:", mcqsArray);

        // Filter the strings
        const filteredMcqsArray = mcqsArray.filter((mcq) => {
          const normalizedBook = mcq.book.toLowerCase().replace(/\s+/g, '-')
          // console.log("normalizedBook:", normalizedBook);

          const normalizedSlug = props.params.toLowerCase()
          // console.log("normalizedSlug:", normalizedSlug);

          return normalizedBook === normalizedSlug
        })

        // Check if mcqsArray is not empty before setting the state
        if (Array.isArray(filteredMcqsArray) && filteredMcqsArray.length > 0) {
          // Extract unique books
          const uniqueBooks: string[] = Array.from(
            new Set(filteredMcqsArray.map((mcq) => mcq.heading1.toLowerCase()))
          )
          setUniqueBooks(uniqueBooks)
        } else {
          console.error('MCQs data is empty or not in the expected format')
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchMcqs()
  }, [props.params])

  return (
    <section>
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4">
          {uniqueBooks.map((heading1, index) => (
            <div className="ag-courses_box lg:py-12 py-1" key={index}>
              <div className="ag-courses_item">
                <Link
                  href={`/quiz/${props.params}/${slugify(heading1, {
                    lower: true,
                  })}`}
                  className="ag-courses-item_link"
                >
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title capitalize">
                    {heading1}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import slugify from 'slugify'
import Container from '@/src/components/elements/container/page'
import { Mcq } from '@/src/types/quiz/page'

export default function QuizBookSection() {
  const [uniqueBooks, setUniqueBooks] = useState<string[]>([])

  useEffect(() => {
    const fetchMcqs = async () => {
      try {
        let baseUrl

        if (process.env.NODE_ENV === 'development') {
          baseUrl = 'http://localhost:8000'
        } else {
          baseUrl = 'https://education-website-backend.vercel.app'
        }

        const apiUrl = `${baseUrl}/api/get/pakstudy`

        const response = await fetch(apiUrl)
        const data: { [key: string]: Mcq } = await response.json()

        // Convert the object into an array of MCQ objects
        const mcqsArray = Object.values(data)

        // Check if mcqsArray is not empty before setting the state
        if (Array.isArray(mcqsArray) && mcqsArray.length > 0) {
          // Extract unique books
          const uniqueBooks: string[] = Array.from(
            new Set(mcqsArray.map((mcq) => mcq.book))
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
  }, [])

  return (
    <section>
      <Container>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-5 mb-16">
          {uniqueBooks.map((book, index) => (
            <Link href={`/quiz/${slugify(book, { lower: true })}`} key={index}>
              <div className="card bg-gray-900">
                <span className="icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z" />
                    <path d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z" />
                    <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
                    <path d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z" />
                  </svg>
                </span>
                <h4>{book}</h4>
                <div className="shine"></div>
                <div className="background">
                  <div className="tiles">
                    <div className="tile tile-1"></div>
                    <div className="tile tile-2"></div>
                    <div className="tile tile-3"></div>
                    <div className="tile tile-4"></div>

                    <div className="tile tile-5"></div>
                    <div className="tile tile-6"></div>
                    <div className="tile tile-7"></div>
                    <div className="tile tile-8"></div>

                    <div className="tile tile-9"></div>
                    <div className="tile tile-10"></div>
                  </div>

                  <div className="line line-1"></div>
                  <div className="line line-2"></div>
                  <div className="line line-3"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

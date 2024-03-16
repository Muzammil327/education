'use client'
import { useState, useEffect } from 'react'
import slugify from 'slugify'
import Link from 'next/link'
import { Mcq } from '@/src/types/quiz/page'
import Container from '@/src/components/elements/container/page'

export default function QuizHeading2(props: { book: string; subSlug: string }) {
  const [uniqueBooks, setUniqueBooks] = useState<string[]>([])
  // console.log("uniqueBooks:", uniqueBooks);
  // console.log("check param:", params.book);
  // console.log("check param:", params.subSlug);

  useEffect(() => {
    const fetchMcqs = async () => {
      try {
        let baseUrl

        if (process.env.NODE_ENV === 'development') {
          baseUrl = 'http://localhost:8000'
        } else {
          baseUrl = 'https://education-website-backend.vercel.app'
        }

        const apiUrl = `${baseUrl}/api/get/heading-1/${props.subSlug}`

        const response = await fetch(apiUrl)
        const data: { [key: string]: Mcq } = await response.json()
        // console.log("response:", response);
        // console.log("data:", data);

        // Convert the object into an array
        const mcqsArray = Object.values(data)
        // console.log("mcqsArray:", mcqsArray);

        // Filter the strings
        const filteredMcqsArray = mcqsArray.filter((mcq) => {
          const normalizedBook = mcq.heading1.toLowerCase().replace(/\s+/g, '-')
          // console.log("normalizedBook:", normalizedBook);

          const normalizedSlug = props.subSlug.toLowerCase()
          // console.log("normalizedSlug:", normalizedSlug);

          return normalizedBook === normalizedSlug
        })

        // Check if mcqsArray is not empty before setting the state
        if (Array.isArray(filteredMcqsArray) && filteredMcqsArray.length > 0) {
          // Extract unique books
          const uniqueBooks: string[] = Array.from(
            new Set(filteredMcqsArray.map((mcq) => mcq.heading2.toLowerCase()))
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
  }, [props.book, props.subSlug])

  return (
    <section>
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-3 mb-8">
          {uniqueBooks.map((heading2, index) => (
            <Link
              href={`/quiz/${props.book}/${props.subSlug}/${slugify(heading2, {
                lower: true,
              })}`}
              key={index}
            >
              <div className="subslugcard md:h-52 h-52 md:w-80 w-full">
                <img
                  className="background-image"
                  src="https://i.pinimg.com/736x/8f/a0/51/8fa051251f5ac2d0b756027089fbffde--terry-o-neill-al-pacino.jpg"
                  alt="Background Image"
                />
                <div className="border">
                  <h2>{heading2}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

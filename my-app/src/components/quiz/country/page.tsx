'use client'
import { useState, useEffect } from 'react'
import slugify from 'slugify'
import { FaBolt } from 'react-icons/fa6'
import { Mcq } from '@/src/types/quiz/page'
import Container from '@/src/components/elements/container/page'

export default function QuizCountry(props: {
  book: string
  subSlug: string
  country: string
}) {
  const [mcqs, setMcqs] = useState<Mcq[]>([])
  // console.log("mcqs:", mcqs);
  // console.log("check param:", params.book);
  // console.log("check param:", params.subSlug);
  // console.log("check param:", params.country);

  useEffect(() => {
    const fetchMcqs = async () => {
      try {
        let baseUrl

        if (process.env.NODE_ENV === 'development') {
          baseUrl = 'http://localhost:8000'
        } else {
          baseUrl = 'https://education-website-backend.vercel.app'
        }

        const apiUrl = `${baseUrl}/api/get/book/${props.book}`
        const response = await fetch(apiUrl)
        // console.log("response:", response);

        const data: { [key: string]: Mcq } = await response.json()
        // console.log("data:", data);

        // Convert the object into an array of MCQ objects
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

        // Filter the strings
        const furtherFilteredMcqsArray = filteredMcqsArray.filter((mcq) => {
          const normalizedBook = mcq.heading2.toLowerCase().replace(/\s+/g, '-')
          // console.log("normalizedBook:", normalizedBook);

          const normalizedSlug = props.country.toLowerCase()
          // console.log("normalizedSlug:", normalizedSlug);

          return normalizedBook === normalizedSlug
        })

        setMcqs(furtherFilteredMcqsArray)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchMcqs()
  }, [props.country, props.book, props.subSlug])

  return (
    <section>
      <Container>
        <div className="grid md:grid-cols-9 gap-2">
          <div className="col-span-6">
            {mcqs &&
              mcqs.map((data: Mcq) => (
                <div className="questionCard" key={data.id}>
                  <a
                    href={`/quiz/${props.book}/${props.subSlug}/${
                      props.country
                    }/${slugify(data.question, { lower: true })}`}
                  >
                    <div className="cards flex gap-4 items-center lg:m-6 md:m-4 m-2 lg:p-5 md:p-4 p-1 w-auto min-h-[80px]">
                      <div className="icon">
                        <FaBolt />
                      </div>

                      <h2 className="title">{data.question}</h2>
                    </div>
                  </a>
                </div>
              ))}
          </div>
          <div className="col-span-3"></div>
        </div>
      </Container>
    </section>
  )
}

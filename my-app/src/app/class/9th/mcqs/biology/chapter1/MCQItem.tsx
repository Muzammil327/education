import React from 'react'
import Link from 'next/link'

const MCQItem = ({ mcq }: any) => {
  return (
    <div className="my-8">
      <Link href={`/mcqs/${mcq.slug}`} className="text-xl font-semibold py-2">
        {mcq.name}
      </Link>
      <ul className="ml-3 list-decimal">
        {mcq.options.map((option: any, optionIndex: any) => (
          <li key={optionIndex} className="my-2">
            {option === mcq.correct ? <strong>{option}</strong> : option}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MCQItem

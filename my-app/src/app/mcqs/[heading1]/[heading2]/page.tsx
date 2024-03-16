import React from 'react'
import Propsfdf from './propsfdf'

interface Iprops {
  params: {
    heading2: String
    heading1: String
  }
}

export default function Mcqs({ params }: Iprops) {
  return (
    <>
      <Propsfdf heading2={params.heading2} heading1={params.heading1} />
    </>
  )
}

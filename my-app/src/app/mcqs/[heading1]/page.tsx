
import React from 'react'
import Propsfdf from './propsfdf'

interface Iprops {
  params: {
    heading1: String
  }
}

export default function Mcqs({ params }: Iprops) {

  return (
    <>
     <Propsfdf heading1={params.heading1} />
    </>
  )
}

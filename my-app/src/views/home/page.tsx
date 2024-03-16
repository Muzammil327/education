import React from 'react'
import Header from '@/src/components/layout/header/page'
import Stat from '@/src/components/home/stat/page'
import Feature from '@/src/components/home/feature/page'
import VedioSection from '@/src/components/home/vedioSection/page'

export default function HomeView() {
  return (
    <>
      <Header title="Welcome to my Website." />
      <Feature />
      <Stat />
      <VedioSection />
    </>
  )
}

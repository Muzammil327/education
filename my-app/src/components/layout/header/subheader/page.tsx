import Link from 'next/link'
import Container from '@/src/components/elements/container/page'
import HeaderUpper from '../upper/page'

export default function SubHeader(props: { title: string }) {
  return (
    <section className="header">
      <Container>
        <div className="hero px-6 pt-14">
          <div className="bg1" aria-hidden="true">
            <div className="icon" />
          </div>
          <div className="text mx-auto max-w-3xl py-24 sm:py-36">
            <HeaderUpper data="text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20" />
            <div className="secondPart">
              <h1>{props.title}</h1>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

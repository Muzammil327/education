import React from 'react'
import Link from 'next/link'
import { SubjectCardTypes } from '@/src/components/card/subjectCard/type'
import Container from '@/src/components/elements/container/page'
import Image from 'next/image'

interface Iprops {
  datas: SubjectCardTypes[]
}

export default function SubjectCard({ datas }: Iprops) {
  return (
    <section>
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-20">
          {datas.map((data: SubjectCardTypes) => {
            return (
              <div
                className="mt-8 hover:shadow-md shadow-xl transition-all"
                key={data.id}
              >
                <div className="w-full">
                  <Link href={data.url}>
                    <Image
                      src={data.image}
                      alt={data.title}
                      title={data.title}
                      className="w-full rounded-tl-lg rounded-tr-lg"
                      height={500}
                      width={500}
                    />
                  </Link>
                </div>
                <div className="py-3 px-3">
                  <div className="mt-2 flex gap-4 items-center justify-between">
                    <span className="text-slate-400">{data.tag1}</span>
                    <span className="text-slate-400">{data.tag2}</span>
                  </div>
                  <Link href={data.url}>
                    <h3 className="font-semibold text-2xl py-2 text-gray-900 block">
                      {data.title}
                    </h3>
                  </Link>

                  <p className="text-base text-gray-600 font-normal">
                    {data.para}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

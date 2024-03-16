import React from 'react'
import { option, optiondata } from '@/src/types/card/page'

interface Iprops {
  datas: option
}

export default function Option({ datas }: Iprops) {
  return (
    <>
      <div className="my-8">
        <h2 className="text-xl font-semibold py-2">{datas.name}</h2>
        <ul className="ml-3 list-decimal">
          {datas.options.map((data: optiondata) => (
            <li key={data.optionIndex}>
              {data.option === datas.correct ? (
                <strong>{data.option}</strong>
              ) : (
                data.option
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

'use client'
import React from 'react'
import Container from '@/src/components/elements/container/page'
import McqsSkeletonLoader from '@/src/components/mcqs/skeleton/mcqs/page'
import { useState } from 'react'
import CommentForm from '@/src/components/elements/commentform/page'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

interface McqsData {
  _id: string;
  McqsId: number;
  name: string;
  correct: string;
  image: string;
  tags: string[];
  options: string[]; // Ensure options is typed as an array of strings
  __v: number;
}

interface McqsContainerProps {
  loader: boolean
  data: McqsData | null; // Ensure data is correctly typed
}

const McqsContainer = ({ loader, data }: McqsContainerProps) => {
  const url = usePathname()
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
  }

  return (
    <Container>
      <div className="grid lg:grid-cols-9 gap-5 my-12">
        <div className="col-span-6 min-w-full">
          {loader ? (
            <McqsSkeletonLoader />
          ) : (
            <>
              <div className="bg-slate-10 p-5">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold py-3 textld">{data?.name}.</h2>
                </div>

                <ul>
                  {data?.options.map((option: string, optionIndex: number) => {
                    return (
                      <li
                        key={optionIndex}
                        className={`py-3 flex justify-between capitalize px-4 items-center w-full inputld border-2 border-solid my-3 rounded ${
                          selectedOption === option &&
                          (option === data.correct
                            ? 'border-green-500'
                            : 'border-red-500')
                        }`}
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                        {selectedOption === option && (
                          <>
                            {option === data.correct ? (
                              <svg
                                width="25px"
                                height="25px"
                                viewBox="0 0 128 128"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--noto"
                                preserveAspectRatio="xMidYMid meet"
                              >
                                <path
                                  d="M116.46 3.96h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z"
                                  fill="#689f38"
                                ></path>
                                <path
                                  d="M110.16 3.96h-98.2a7.555 7.555 0 0 0-7.5 7.5v97.9c-.01 4.14 3.34 7.49 7.48 7.5H110.06c4.14.01 7.49-3.34 7.5-7.48V11.46c.09-4.05-3.13-7.41-7.18-7.5h-.22z"
                                  fill="#7cb342"
                                ></path>
                                <path
                                  d="M40.16 12.86c0-2.3-1.6-3-10.8-2.7c-7.7.3-11.5 1.2-13.8 4s-2.9 8.5-3 15.3c0 4.8 0 9.3 2.5 9.3c3.4 0 3.4-7.9 6.2-12.3c5.4-8.7 18.9-10.6 18.9-13.6z"
                                  opacity=".65"
                                  fill="#abc884"
                                ></path>
                                <path
                                  d="M108.71 95.08L77.54 64.2l30.88-31.17c3.5-3.53 3.47-9.23-.06-12.73s-9.23-3.47-12.73.06L64.75 51.53L33.57 20.65c-3.53-3.5-9.23-3.47-12.73.06c-3.5 3.53-3.47 9.23.06 12.73l31.18 30.88L21.19 95.5c-3.5 3.53-3.47 9.23.06 12.73a8.95 8.95 0 0 0 6.33 2.61c2.32 0 4.63-.89 6.39-2.67l30.89-31.18l31.18 30.88a8.95 8.95 0 0 0 6.33 2.61c2.32 0 4.63-.89 6.39-2.67c3.51-3.53 3.48-9.23-.05-12.73z"
                                  fill="#fbf9f9"
                                ></path>
                                <path
                                  d="M40.16 12.86c0-2.3-1.6-3-10.8-2.7c-7.7.3-11.5 1.2-13.8 4s-2.9 8.5-3 15.3c0 4.8 0 9.3 2.5 9.3c3.4 0 3.4-7.9 6.2-12.3c5.4-8.7 18.9-10.6 18.9-13.6z"
                                  opacity=".35"
                                  fill="#abc884"
                                ></path>
                              </svg>
                            ) : (
                              <svg
                                width="25px"
                                height="25px"
                                viewBox="0 0 64 64"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--emojione"
                                preserveAspectRatio="xMidYMid meet"
                              >
                                <path
                                  d="M62 52c0 5.5-4.5 10-10 10H12C6.5 62 2 57.5 2 52V12C2 6.5 6.5 2 12 2h40c5.5 0 10 4.5 10 10v40z"
                                  fill="#ff5a79"
                                ></path>
                                <path
                                  fill="#ffffff"
                                  d="M50 21.2L42.8 14L32 24.8L21.2 14L14 21.2L24.8 32L14 42.8l7.2 7.2L32 39.2L42.8 50l7.2-7.2L39.2 32z"
                                ></path>
                              </svg>
                            )}
                          </>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </>
          )}
          <CommentForm url={url} />
        </div>
        <div className="col-span-3 w-full">4</div>
      </div>
    </Container>
  )
}

export default McqsContainer

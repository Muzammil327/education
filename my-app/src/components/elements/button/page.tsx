'use client'
import React, { useState, ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  href?: string
  className: string
  children: ReactNode
  onClick?: () => void
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonWithLoader: React.FC<ButtonProps> = ({
  href,
  className,
  children,
  onClick,
  setLoading,
}) => {
  const [loading, internalSetLoading] = useState(false)

  const handleClick = () => {
    internalSetLoading(true)
    if (setLoading) {
      setLoading(true)
    }

    console.log('Button clicked')

    setTimeout(() => {
      internalSetLoading(false)
      if (setLoading) {
        setLoading(false)
      }
    }, 1000)
  }

  if (href) {
    return (
      <Link
        href={href}
        className={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
        onClick={handleClick}
        style={{ pointerEvents: loading ? 'none' : 'auto' }}
      >
        {loading ? (
          <div className="loadingAnimation">
            <div className="loader"></div>
          </div>
        ) : (
          children
        )}
      </Link>
    )
  } else {
    return (
      <button
        className={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
        type="button"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? (
          <div className="loadingAnimation">
            <div className="loader"></div>
          </div>
        ) : (
          children
        )}
      </button>
    )
  }
}

export default ButtonWithLoader

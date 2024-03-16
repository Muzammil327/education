
'use client'
import React, { useState, ReactNode } from 'react'

interface ButtonProps {
    className: string
    children: ReactNode
    handleClick?: () => Promise<void>
    loading?: boolean
  }
  

const ClickButtonWithLoader: React.FC<ButtonProps> = ({
  className,
  children,
  handleClick,
  loading,
}) => {
  return (
    <button
      className={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
      type="button"
      onClick={handleClick}
      disabled={loading} // Use loading directly here
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

export default ClickButtonWithLoader

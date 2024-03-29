"use client"
import { useContext } from 'react'
import React from 'react'

type ToastMessage = {
  message: string
  type: 'SUCCESS' | 'ERROR'
}

type AppContext = {
  showToast: (toastMessage: ToastMessage) => void
}

const AppContext = React.createContext<AppContext | undefined>(undefined)

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <AppContext.Provider
      value={{
        showToast: (ToastMessage) => {
          console.log(ToastMessage)
        },
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  return context as AppContext
}

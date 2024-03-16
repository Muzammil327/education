'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProfileChecker = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/authentication/profile'
        )
        console.log(response)
      } catch (error) {
        console.error('Error checking profile:', error)
        // Handle error, e.g., show error message
      } finally {
        setIsLoading(false)
      }
    }

    checkLoggedIn()
  }, [])

  return isLoading ? <p>Loading...</p> : null
}

export default ProfileChecker

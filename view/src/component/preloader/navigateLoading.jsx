"use client"
import React, { useState, useEffect } from 'react'
import Loading from '@/app/loading'
import { usePathname } from 'next/navigation'

const NavigateLoading = ({ children }) => {
  const pathname = usePathname();
  const [showPreloader, setShowPreloader] = useState(true)
  let timeoutId = null;

  useEffect(() => {
    setShowPreloader(true)
    timeoutId = setTimeout(() => {
      setShowPreloader(false)
    }, 600) // 3000ms = 3 seconds
    return () => {
      clearTimeout(timeoutId)
    }
  }, [pathname])

  return (
    <div>
      {showPreloader?  ( <Loading >{children}</Loading>) : (children) }
    </div>
  )
}

export default NavigateLoading
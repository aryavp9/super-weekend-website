"use client"

import type React from "react"
import { useEffect, useState } from "react"

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        const isAuth = localStorage.getItem("isAuthenticated") === "true"
        setIsAuthenticated(isAuth)
        setIsLoading(false)

        if (!isAuth) {
          // Redirect to sign in if not authenticated
          window.location.href = "/auth/signin"
        }
      }
    }

    checkAuth()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}

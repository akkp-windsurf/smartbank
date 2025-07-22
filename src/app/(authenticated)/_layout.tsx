import { Redirect, Stack } from "expo-router"
import { useEffect, useState } from "react"

import { supabase } from "@/supabase"

export default function AuthenticatedLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setIsAuthenticated(!!session)
    }

    checkAuth()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsAuthenticated(!!session)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  if (isAuthenticated === null) {
    return null
  }

  if (!isAuthenticated) {
    return <Redirect href="/welcome" />
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
      <Stack.Screen name="transfer" />
      <Stack.Screen name="exchange" />
      <Stack.Screen name="cards" />
      <Stack.Screen name="analytics" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="upload-avatar" />
    </Stack>
  )
}

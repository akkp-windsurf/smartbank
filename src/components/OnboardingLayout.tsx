import React from "react"
import { View, Text, ScrollView, Pressable } from "react-native"
import { router } from "expo-router"
import { cn } from "@/utils/cn"

import PageIndicator from "./PageIndicator"

interface OnboardingLayoutProps {
  headerText?: string
  headline: string
  children: React.ReactNode
  currentPage: number
  totalPages: number
  onNext?: () => void
  onSkip?: () => void
  showButtons?: boolean
}

export default function OnboardingLayout({
  headerText = "Welcome to SmartBank",
  headline,
  children,
  currentPage,
  totalPages,
  onNext,
  onSkip,
  showButtons = true,
}: OnboardingLayoutProps) {
  const handleSignUp = () => {
    router.push("/(unauthenticated)/signup")
  }

  const handleLogIn = () => {
    router.push("/(unauthenticated)/login")
  }

  return (
    <View className={cn("flex-1 bg-neutral-50")}>
      <ScrollView className={cn("flex-1 px-4 pt-16")}>
        <Text className={cn("text-base text-neutral-600 mb-4")}>{headerText}</Text>
        
        <Text className={cn("text-3xl font-bold text-neutral-900 mb-8 leading-tight")}>
          {headline}
        </Text>

        <View className={cn("flex-1 mb-8")}>
          {children}
        </View>

        <PageIndicator totalPages={totalPages} currentPage={currentPage} />
      </ScrollView>

      {showButtons && (
        <View className={cn("px-4 pb-8 pt-4")}>
          <Pressable
            className={cn("h-14 w-full items-center justify-center rounded-xl bg-primary-500 mb-4")}
            onPress={handleSignUp}
          >
            <Text className={cn("text-base font-bold text-white")}>Sign up</Text>
          </Pressable>
          
          <Pressable
            className={cn("h-14 w-full items-center justify-center rounded-xl border border-neutral-200 bg-white")}
            onPress={handleLogIn}
          >
            <Text className={cn("text-base font-bold text-primary-500")}>Log in</Text>
          </Pressable>
        </View>
      )}
    </View>
  )
}

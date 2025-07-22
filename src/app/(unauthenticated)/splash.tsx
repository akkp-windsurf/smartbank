import React from "react"
import { View, Text } from "react-native"
import { cn } from "@/utils/cn"

export default function SplashScreen() {
  return (
    <View className={cn("flex-1 bg-neutral-50 items-center justify-center px-4")}>
      <View className={cn("items-center mb-8")}>
        <View className={cn("w-20 h-20 bg-primary-600 rounded-2xl items-center justify-center mb-6")}>
          <Text className={cn("text-white text-4xl font-bold")}>S</Text>
        </View>
        <Text className={cn("text-3xl font-bold text-primary-600")}>SmartBank</Text>
      </View>
    </View>
  )
}

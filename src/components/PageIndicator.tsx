import React from "react"
import { View } from "react-native"
import { cn } from "@/utils/cn"

interface PageIndicatorProps {
  totalPages: number
  currentPage: number
}

export default function PageIndicator({ totalPages, currentPage }: PageIndicatorProps) {
  return (
    <View className={cn("flex-row justify-center items-center space-x-2 py-4")}>
      {Array.from({ length: totalPages }, (_, index) => (
        <View
          key={index}
          className={cn(
            "h-2 rounded-full",
            index === currentPage
              ? "w-8 bg-primary-500"
              : "w-2 bg-neutral-300"
          )}
        />
      ))}
    </View>
  )
}

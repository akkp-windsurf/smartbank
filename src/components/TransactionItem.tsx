import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { Text, View } from "react-native"

type TransactionItemProps = {
  name: string
  amount: string
  time: string
  type: "income" | "expense" | "transfer"
}

export default function TransactionItem({ name, amount, time, type }: TransactionItemProps) {
  const getIcon = () => {
    switch (type) {
      case "income":
        return "arrow-down-outline"
      case "transfer":
        return "swap-horizontal-outline"
      default:
        return "arrow-up-outline"
    }
  }

  const getIconColor = () => {
    switch (type) {
      case "income":
        return "#10B981"
      case "transfer":
        return "#2791B5"
      default:
        return "#EF4444"
    }
  }

  return (
    <View className="flex-row items-center p-4 bg-white rounded-xl border border-neutral-200">
      <View className="w-12 h-12 bg-neutral-100 rounded-full items-center justify-center mr-3">
        <Ionicons
          name={getIcon() as any}
          size={20}
          color={getIconColor()}
        />
      </View>
      <View className="flex-1">
        <Text className="text-[14px] font-semibold text-[#0C212C]">
          {name}
        </Text>
        <Text className="text-[12px] text-neutral-600">
          {time}
        </Text>
      </View>
      <Text
        className={`text-[14px] font-bold ${
          type === "income" ? "text-green-600" : "text-[#0C212C]"
        }`}
      >
        {amount}
      </Text>
    </View>
  )
}

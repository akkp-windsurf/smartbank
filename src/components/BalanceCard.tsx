import React from "react"
import { Text, View } from "react-native"

type BalanceCardProps = {
  balance: string
  cardNumber?: string
  showBalance?: boolean
}

export default function BalanceCard({ 
  balance, 
  cardNumber = "•••• •••• •••• 1234",
  showBalance = true 
}: BalanceCardProps) {
  return (
    <View
      className="w-full h-48 rounded-2xl p-6 shadow-lg bg-gradient-to-r from-slate-700 to-blue-500"
    >
      <View className="flex-1 justify-between">
        <View>
          <Text className="text-white text-base font-bold">
            SmartBank
          </Text>
        </View>
        
        {showBalance && (
          <View>
            <Text className="text-white/70 text-xs uppercase mb-1">
              Total Balance
            </Text>
            <Text className="text-white text-3xl font-bold">
              {balance}
            </Text>
          </View>
        )}
        
        <View>
          <Text className="text-white text-sm font-mono tracking-wider">
            {cardNumber}
          </Text>
        </View>
      </View>
    </View>
  )
}

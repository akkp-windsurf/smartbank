import { LinearGradient } from "expo-linear-gradient"
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
    <LinearGradient
      colors={["#265565", "#288FB1"]}
      className="w-full h-48 rounded-2xl p-6 shadow-lg"
    >
      <View className="flex-1 justify-between">
        <View>
          <Text className="text-white text-[16px] font-bold">
            SmartBank
          </Text>
        </View>
        
        {showBalance && (
          <View>
            <Text className="text-white/70 text-[12px] uppercase mb-1">
              Total Balance
            </Text>
            <Text className="text-white text-[32px] font-bold">
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
    </LinearGradient>
  )
}

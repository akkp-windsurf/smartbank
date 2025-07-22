import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { router } from "expo-router"
import React from "react"
import { Pressable, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function CardsScreen() {
  const cards = [
    {
      id: 1,
      type: "Virtual Card",
      number: "•••• •••• •••• 1234",
      balance: "$2,847.63",
      colors: ["#265565", "#288FB1"] as const,
      isActive: true,
    },
    {
      id: 2,
      type: "Physical Card",
      number: "•••• •••• •••• 5678",
      balance: "$1,250.00",
      colors: ["#1F2937", "#374151"] as const,
      isActive: false,
    },
  ]

  return (
    <View className="flex-1 bg-neutral-50">
      <SafeAreaView className="flex-1">
        <View className="h-11 w-full justify-center px-4">
          <Pressable
            className="absolute left-4 top-0 h-11 w-11 items-center justify-center"
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#2791B5" />
          </Pressable>
          <Text className="text-center text-[18px] font-bold text-[#132F38]">
            My Cards
          </Text>
        </View>

        <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
          <View className="mt-6">
            {cards.map((card) => (
              <View key={card.id} className="mb-6">
                <LinearGradient
                  colors={card.colors}
                  className="w-full h-48 rounded-2xl p-6 shadow-lg"
                >
                  <View className="flex-1 justify-between">
                    <View className="flex-row items-center justify-between">
                      <Text className="text-white text-[16px] font-bold">
                        SmartBank
                      </Text>
                      <View className="flex-row items-center">
                        <View
                          className={`w-2 h-2 rounded-full mr-2 ${
                            card.isActive ? "bg-green-400" : "bg-red-400"
                          }`}
                        />
                        <Text className="text-white text-[12px]">
                          {card.isActive ? "Active" : "Inactive"}
                        </Text>
                      </View>
                    </View>
                    
                    <View>
                      <Text className="text-white/70 text-[12px] uppercase mb-1">
                        {card.type}
                      </Text>
                      <Text className="text-white text-[32px] font-bold">
                        {card.balance}
                      </Text>
                    </View>
                    
                    <View>
                      <Text className="text-white text-[14px] font-mono tracking-wider">
                        {card.number}
                      </Text>
                    </View>
                  </View>
                </LinearGradient>

                <View className="flex-row mt-4 space-x-3">
                  <Pressable className="flex-1 h-12 bg-white rounded-xl border border-neutral-200 items-center justify-center">
                    <Text className="text-[14px] font-semibold text-primary-500">
                      View Details
                    </Text>
                  </Pressable>
                  <Pressable className="flex-1 h-12 bg-white rounded-xl border border-neutral-200 items-center justify-center">
                    <Text className="text-[14px] font-semibold text-primary-500">
                      {card.isActive ? "Freeze Card" : "Activate Card"}
                    </Text>
                  </Pressable>
                </View>
              </View>
            ))}

            <Pressable className="h-16 w-full bg-white rounded-xl border-2 border-dashed border-neutral-300 items-center justify-center mb-8">
              <Ionicons name="add-outline" size={24} color="#9CA3AF" />
              <Text className="text-[14px] font-semibold text-neutral-500 mt-1">
                Add New Card
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

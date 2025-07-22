import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import React from "react"
import { Pressable, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function AnalyticsScreen() {
  const categories = [
    { name: "Food & Dining", amount: "$456.78", percentage: 35, color: "#EF4444" },
    { name: "Shopping", amount: "$324.50", percentage: 25, color: "#F59E0B" },
    { name: "Transportation", amount: "$198.32", percentage: 15, color: "#10B981" },
    { name: "Entertainment", amount: "$156.40", percentage: 12, color: "#8B5CF6" },
    { name: "Others", amount: "$164.00", percentage: 13, color: "#6B7280" },
  ]

  const monthlyData = [
    { month: "Jan", income: 2500, expenses: 1800 },
    { month: "Feb", income: 2800, expenses: 2100 },
    { month: "Mar", income: 2600, expenses: 1950 },
    { month: "Apr", income: 3200, expenses: 2400 },
    { month: "May", income: 2900, expenses: 2200 },
    { month: "Jun", income: 3100, expenses: 2350 },
  ]

  return (
    <View className="flex-1 bg-neutral-50">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="h-11 w-full justify-center px-4">
          <Pressable
            className="absolute left-4 top-0 h-11 w-11 items-center justify-center"
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#2791B5" />
          </Pressable>
          <Text className="text-center text-[18px] font-bold text-[#132F38]">
            Analytics
          </Text>
        </View>

        <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
          <View className="mt-6">
            <View className="p-6 bg-white rounded-2xl border border-neutral-200 mb-6">
              <Text className="text-[18px] font-bold text-[#132F38] mb-4">
                This Month Overview
              </Text>
              
              <View className="flex-row justify-between mb-6">
                <View className="flex-1 mr-3">
                  <Text className="text-[12px] text-neutral-600 mb-1">Income</Text>
                  <Text className="text-[24px] font-bold text-green-600">
                    $3,100.00
                  </Text>
                </View>
                <View className="flex-1 ml-3">
                  <Text className="text-[12px] text-neutral-600 mb-1">Expenses</Text>
                  <Text className="text-[24px] font-bold text-red-600">
                    $2,350.00
                  </Text>
                </View>
              </View>

              <View className="p-4 bg-green-50 rounded-xl border border-green-200">
                <Text className="text-[14px] font-semibold text-green-800 mb-1">
                  Net Savings
                </Text>
                <Text className="text-[20px] font-bold text-green-800">
                  $750.00
                </Text>
              </View>
            </View>

            <View className="p-6 bg-white rounded-2xl border border-neutral-200 mb-6">
              <Text className="text-[18px] font-bold text-[#132F38] mb-4">
                Spending by Category
              </Text>
              
              <View className="space-y-4">
                {categories.map((category, index) => (
                  <View key={index} className="flex-row items-center">
                    <View
                      className="w-4 h-4 rounded-full mr-3"
                      style={{ backgroundColor: category.color }}
                    />
                    <View className="flex-1">
                      <View className="flex-row justify-between items-center mb-1">
                        <Text className="text-[14px] font-semibold text-[#0C212C]">
                          {category.name}
                        </Text>
                        <Text className="text-[14px] font-bold text-[#0C212C]">
                          {category.amount}
                        </Text>
                      </View>
                      <View className="h-2 bg-neutral-200 rounded-full">
                        <View
                          className="h-2 rounded-full"
                          style={{
                            backgroundColor: category.color,
                            width: `${category.percentage}%`,
                          }}
                        />
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>

            <View className="p-6 bg-white rounded-2xl border border-neutral-200 mb-8">
              <Text className="text-[18px] font-bold text-[#132F38] mb-4">
                6-Month Trend
              </Text>
              
              <View className="space-y-3">
                {monthlyData.map((data, index) => (
                  <View key={index} className="flex-row items-center justify-between">
                    <Text className="text-[14px] font-semibold text-[#0C212C] w-12">
                      {data.month}
                    </Text>
                    <View className="flex-1 mx-4">
                      <View className="flex-row justify-between mb-1">
                        <Text className="text-[12px] text-green-600">
                          ${data.income}
                        </Text>
                        <Text className="text-[12px] text-red-600">
                          ${data.expenses}
                        </Text>
                      </View>
                      <View className="h-2 bg-neutral-200 rounded-full relative">
                        <View
                          className="h-2 bg-green-500 rounded-full absolute"
                          style={{ width: `${(data.income / 3500) * 100}%` }}
                        />
                        <View
                          className="h-2 bg-red-500 rounded-full absolute top-0"
                          style={{ width: `${(data.expenses / 3500) * 100}%`, opacity: 0.7 }}
                        />
                      </View>
                    </View>
                    <Text className="text-[12px] font-bold text-[#0C212C]">
                      ${data.income - data.expenses}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

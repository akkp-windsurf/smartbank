import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Pressable, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"

export default function TopUpScreen() {
  const [amount, setAmount] = useState("")

  const quickAmounts = ["$25", "$50", "$100", "$200"]

  return (
    <View className="flex-1 bg-neutral-50 pb-7 pt-1">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="h-11 w-full justify-center">
          <Pressable
            className="absolute left-0 top-0 h-11 w-11 items-center justify-center"
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#2791B5" />
          </Pressable>
        </View>
        <View className="flex-1 px-4">
          <Text className="mt-1 text-[28px] font-bold text-[#132F38]">
            Top Up Your Account
          </Text>
          <Text className="mt-2 text-[13px] font-medium text-neutral-600">
            Add money to your SmartBank account to start spending.
          </Text>
          
          <View className="flex-1 mt-8">
            <Text className="text-[16px] font-semibold text-[#0C212C] mb-4">
              Enter Amount
            </Text>
            
            <View className="relative mb-6">
              <Text className="absolute left-4 top-3 text-[18px] font-semibold text-neutral-600 z-10">
                $
              </Text>
              <TextInput
                className="h-12 w-full pl-8 pr-4 rounded-xl bg-white border border-neutral-200 text-[18px] font-semibold text-[#0C212C]"
                placeholder="0.00"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
              />
            </View>
            
            <Text className="text-[14px] font-semibold text-[#0C212C] mb-3">
              Quick Select
            </Text>
            
            <View className="flex-row flex-wrap gap-3 mb-8">
              {quickAmounts.map((quickAmount) => (
                <Pressable
                  key={quickAmount}
                  className="px-6 py-3 rounded-xl bg-white border border-neutral-200"
                  onPress={() => setAmount(quickAmount.replace("$", ""))}
                >
                  <Text className="text-[14px] font-semibold text-primary-500">
                    {quickAmount}
                  </Text>
                </Pressable>
              ))}
            </View>
            
            <View className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <View className="flex-row items-center">
                <Ionicons name="information-circle-outline" size={20} color="#2791B5" />
                <Text className="ml-2 text-[12px] font-semibold text-blue-800">
                  Payment Method
                </Text>
              </View>
              <Text className="text-[12px] text-blue-700 mt-1">
                Funds will be added using your linked bank account or debit card.
              </Text>
            </View>
          </View>
          
          <View className="space-y-3">
            <Pressable
              className="h-12 w-full items-center justify-center rounded-xl bg-primary-500"
              onPress={() => router.replace("/(authenticated)/home")}
            >
              <Text className="text-[16px] font-semibold text-white">
                Add Money
              </Text>
            </Pressable>
            
            <Pressable
              className="h-12 w-full items-center justify-center rounded-xl bg-neutral-200"
              onPress={() => router.replace("/(authenticated)/home")}
            >
              <Text className="text-[16px] font-semibold text-primary-500">
                Skip for Now
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

import React from "react"
import { View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { cn } from "@/utils/cn"

interface FeatureShowcaseProps {
  type: "account" | "savings" | "multicurrency"
  data?: any
}

export default function FeatureShowcase({ type, data }: FeatureShowcaseProps) {
  if (type === "account") {
    return (
      <View className={cn("bg-white rounded-2xl p-4 mb-6 shadow-sm")}>
        <View className={cn("flex-row items-center justify-between mb-4")}>
          <View>
            <Text className={cn("text-lg font-bold text-neutral-900")}>ADRIAN'S ACCOUNT</Text>
            <Text className={cn("text-sm text-neutral-600")}>4212423532</Text>
          </View>
          <View className={cn("flex-row items-center")}>
            <Text className={cn("text-xs text-neutral-500 mr-2")}>Available balance</Text>
            <View className={cn("w-8 h-8 bg-yellow-400 rounded-full items-center justify-center")}>
              <Text className={cn("text-white font-bold")}>€</Text>
            </View>
          </View>
        </View>
        
        <Text className={cn("text-2xl font-bold text-neutral-900 mb-4")}>500.00 GBP</Text>
        
        <View className={cn("flex-row space-x-3 mb-6")}>
          <View className={cn("flex-row items-center bg-primary-100 px-3 py-2 rounded-lg")}>
            <View className={cn("w-6 h-6 bg-primary-500 rounded-full items-center justify-center mr-2")}>
              <Ionicons name="add" size={16} color="white" />
            </View>
            <Text className={cn("text-sm font-medium text-primary-700")}>Top up</Text>
          </View>
          
          <View className={cn("flex-row items-center bg-primary-100 px-3 py-2 rounded-lg")}>
            <Ionicons name="arrow-forward" size={16} color="#2B6173" />
            <Text className={cn("text-sm font-medium text-primary-700 ml-2")}>Transfer</Text>
          </View>
          
          <View className={cn("flex-row items-center bg-primary-100 px-3 py-2 rounded-lg")}>
            <Ionicons name="swap-horizontal" size={16} color="#2B6173" />
            <Text className={cn("text-sm font-medium text-primary-700 ml-2")}>Exchange</Text>
          </View>
        </View>
        
        <View className={cn("border-t border-neutral-100 pt-4")}>
          <View className={cn("flex-row items-center justify-between mb-2")}>
            <Text className={cn("text-base font-medium text-neutral-900")}>Transactions</Text>
            <Text className={cn("text-sm text-primary-500")}>See all</Text>
          </View>
          
          <View className={cn("flex-row items-center justify-between py-3")}>
            <View className={cn("flex-row items-center")}>
              <View className={cn("w-10 h-10 bg-primary-500 rounded-full items-center justify-center mr-3")}>
                <Text className={cn("text-white font-bold text-sm")}>AK</Text>
              </View>
              <View>
                <Text className={cn("text-sm font-medium text-neutral-900")}>To Adrian UIUX</Text>
                <Text className={cn("text-xs text-neutral-500")}>Today, 3:30 PM</Text>
              </View>
            </View>
            <Text className={cn("text-sm font-bold text-neutral-900")}>-£250</Text>
          </View>
        </View>
        
        <View className={cn("mt-4 pt-4 border-t border-neutral-100")}>
          <View className={cn("flex-row items-center justify-between")}>
            <View>
              <Text className={cn("text-base font-bold text-neutral-900")}>Direct deposits</Text>
              <Text className={cn("text-sm text-neutral-500")}>0 paychecks</Text>
            </View>
            <Text className={cn("text-lg font-bold text-neutral-900")}>$0</Text>
          </View>
        </View>
      </View>
    )
  }

  if (type === "savings") {
    return (
      <View className={cn("mb-6")}>
        <View className={cn("flex-row mb-4")}>
          <View className={cn("flex-1 bg-white rounded-full px-4 py-3 mr-2")}>
            <Text className={cn("text-center text-sm font-medium text-neutral-900")}>Income</Text>
          </View>
          <View className={cn("flex-1 bg-neutral-200 rounded-full px-4 py-3 ml-2")}>
            <Text className={cn("text-center text-sm font-medium text-neutral-500")}>Expenses</Text>
          </View>
        </View>
        
        <View className={cn("bg-white rounded-2xl p-4 mb-6 shadow-sm relative")}>
          <View className={cn("absolute top-4 right-4")}>
            <View className={cn("w-8 h-8 bg-primary-100 rounded-lg items-center justify-center")}>
              <Ionicons name="calendar-outline" size={16} color="#2B6173" />
            </View>
          </View>
          
          <View className={cn("h-48 relative")}>
            <View className={cn("absolute left-0 top-0 h-full w-px bg-neutral-200")} />
            <View className={cn("absolute bottom-0 left-0 right-0 h-px bg-neutral-200")} />
            
            <View className={cn("absolute left-4 top-4")}>
              <Text className={cn("text-xs text-neutral-500")}>$15000</Text>
            </View>
            <View className={cn("absolute left-4 top-16")}>
              <Text className={cn("text-xs text-neutral-500")}>$10000</Text>
            </View>
            <View className={cn("absolute left-4 top-28")}>
              <Text className={cn("text-xs text-neutral-500")}>$5000</Text>
            </View>
            <View className={cn("absolute left-4 bottom-4")}>
              <Text className={cn("text-xs text-neutral-500")}>$0</Text>
            </View>
            
            <View className={cn("absolute bottom-8 left-16 right-4 h-20 bg-gradient-to-t from-primary-200 to-primary-100 rounded-t-lg opacity-80")} />
            
            <View className={cn("absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-neutral-800 px-2 py-1 rounded")}>
              <Text className={cn("text-white text-xs font-medium")}>↑ $12,455</Text>
            </View>
          </View>
        </View>
        
        <View className={cn("bg-white rounded-2xl p-4 shadow-sm")}>
          <View className={cn("flex-row items-center justify-between")}>
            <View className={cn("flex-row items-center")}>
              <View className={cn("w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg items-center justify-center mr-3")}>
                <Ionicons name="wallet-outline" size={20} color="white" />
              </View>
              <View>
                <Text className={cn("text-base font-bold text-neutral-900")}>Savings goals</Text>
                <Text className={cn("text-sm text-neutral-500")}>Set your savings goal and track them here</Text>
              </View>
            </View>
            <View className={cn("w-8 h-8 bg-primary-500 rounded-full items-center justify-center")}>
              <Ionicons name="add" size={20} color="white" />
            </View>
          </View>
        </View>
      </View>
    )
  }

  if (type === "multicurrency") {
    return (
      <View className={cn("mb-6")}>
        <View className={cn("bg-white rounded-2xl p-4 mb-4 shadow-sm relative")}>
          <View className={cn("absolute top-4 right-4")}>
            <View className={cn("w-8 h-8 bg-yellow-400 rounded-full items-center justify-center")}>
              <Text className={cn("text-white font-bold text-sm")}>$</Text>
            </View>
          </View>
          <View className={cn("absolute top-4 left-4")}>
            <View className={cn("w-8 h-8 bg-yellow-400 rounded-full items-center justify-center")}>
              <Text className={cn("text-white font-bold text-sm")}>€</Text>
            </View>
          </View>
          
          <View className={cn("flex-row items-center mt-8 mb-2")}>
            <View className={cn("w-6 h-6 rounded-full overflow-hidden mr-2")}>
              <View className={cn("w-full h-1/2 bg-red-600")} />
              <View className={cn("w-full h-1/2 bg-white")} />
              <View className={cn("absolute inset-0 flex items-center justify-center")}>
                <View className={cn("w-2 h-2 bg-blue-600 rounded-full")} />
              </View>
            </View>
            <Text className={cn("text-sm font-medium text-neutral-600")}>ADRIAN'S ACCOUNT - GBP</Text>
          </View>
          <Text className={cn("text-xs text-neutral-500 mb-1")}>4212423532</Text>
          <Text className={cn("text-xl font-bold text-neutral-900")}>5000.00 GBP</Text>
        </View>
        
        <View className={cn("relative mb-4")}>
          <View className={cn("absolute right-8 top-1/2 transform -translate-y-1/2 z-10")}>
            <View className={cn("w-12 h-0.5 bg-neutral-800")} />
            <View className={cn("absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-neutral-800 border-t-2 border-b-2 border-t-transparent border-b-transparent")} />
          </View>
        </View>
        
        <View className={cn("bg-white rounded-2xl p-4 shadow-sm relative")}>
          <View className={cn("absolute top-4 right-4")}>
            <View className={cn("w-8 h-8 bg-yellow-400 rounded-full items-center justify-center")}>
              <Text className={cn("text-white font-bold text-sm")}>€</Text>
            </View>
          </View>
          
          <View className={cn("flex-row items-center mb-2")}>
            <View className={cn("w-6 h-6 rounded-full overflow-hidden mr-2 bg-blue-600 flex items-center justify-center")}>
              <View className={cn("w-4 h-3 bg-red-600")} />
              <View className={cn("absolute w-2 h-2 bg-white rounded-full")} />
            </View>
            <Text className={cn("text-sm font-medium text-neutral-600")}>ADRIAN'S ACCOUNT - USD</Text>
          </View>
          <Text className={cn("text-xs text-neutral-500 mb-1")}>4212423532</Text>
          <Text className={cn("text-xl font-bold text-neutral-900")}>12040.00 USD</Text>
        </View>
      </View>
    )
  }

  return null
}

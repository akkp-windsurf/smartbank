import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Alert, Pressable, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import BalanceCard from "@/components/BalanceCard"
import TransactionItem from "@/components/TransactionItem"
import { supabase } from "@/supabase"

export default function HomeScreen() {
  const handleLogout = () => {
    Alert.alert("Log out", "Are you sure you want to log out?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Log out",
        onPress: async () => {
          await supabase.auth.signOut()
          router.replace("/welcome")
        },
      },
    ])
  }

  const transactions = [
    { id: 1, name: "Coffee Shop", amount: "-$4.50", time: "2 hours ago", type: "expense" },
    { id: 2, name: "Salary Deposit", amount: "+$2,500.00", time: "Yesterday", type: "income" },
    { id: 3, name: "Grocery Store", amount: "-$67.32", time: "2 days ago", type: "expense" },
    { id: 4, name: "Online Transfer", amount: "-$150.00", time: "3 days ago", type: "transfer" },
  ]

  const quickActions = [
    { icon: "send-outline", label: "Transfer", route: "/transfer" },
    { icon: "swap-horizontal-outline", label: "Exchange", route: "/exchange" },
    { icon: "card-outline", label: "Cards", route: "/cards" },
    { icon: "analytics-outline", label: "Analytics", route: "/analytics" },
  ]

  return (
    <View className="flex-1 bg-neutral-50">
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="px-4 pt-4">
            <View className="flex-row items-center justify-between mb-6">
              <View>
                <Text className="text-[13px] font-medium text-neutral-600">
                  Good morning
                </Text>
                <Text className="text-[20px] font-bold text-[#132F38]">
                  Welcome back!
                </Text>
              </View>
              <Pressable
                className="w-10 h-10 items-center justify-center rounded-full bg-white"
                onPress={() => router.push("/profile")}
              >
                <Ionicons name="person-outline" size={20} color="#2791B5" />
              </Pressable>
            </View>

            <View className="mb-6">
              <BalanceCard balance="$2,847.63" />
            </View>

            <View className="mb-6">
              <Text className="text-[18px] font-bold text-[#132F38] mb-4">
                Quick Actions
              </Text>
              <View className="flex-row justify-between">
                {quickActions.map((action, index) => (
                  <Pressable
                    key={index}
                    className="w-16 items-center"
                    onPress={() => router.push(action.route as any)}
                  >
                    <View className="w-14 h-14 bg-white rounded-2xl items-center justify-center mb-2 border border-neutral-200">
                      <Ionicons name={action.icon as any} size={24} color="#2791B5" />
                    </View>
                    <Text className="text-[12px] font-medium text-neutral-600 text-center">
                      {action.label}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            <View>
              <View className="flex-row items-center justify-between mb-4">
                <Text className="text-[18px] font-bold text-[#132F38]">
                  Recent Transactions
                </Text>
                <Pressable>
                  <Text className="text-[14px] font-semibold text-primary-500">
                    See All
                  </Text>
                </Pressable>
              </View>
              
              <View className="space-y-3">
                {transactions.map((transaction) => (
                  <TransactionItem
                    key={transaction.id}
                    name={transaction.name}
                    amount={transaction.amount}
                    time={transaction.time}
                    type={transaction.type}
                  />
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

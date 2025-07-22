import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Alert, Pressable, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { supabase } from "@/supabase"

export default function ProfileScreen() {
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

  const profileOptions = [
    {
      icon: "person-outline",
      title: "Personal Information",
      subtitle: "Update your personal details",
      onPress: () => {},
    },
    {
      icon: "card-outline",
      title: "Cards & Accounts",
      subtitle: "Manage your cards and accounts",
      onPress: () => {},
    },
    {
      icon: "notifications-outline",
      title: "Notifications",
      subtitle: "Manage notification preferences",
      onPress: () => {},
    },
    {
      icon: "shield-checkmark-outline",
      title: "Security",
      subtitle: "Password and security settings",
      onPress: () => {},
    },
    {
      icon: "help-circle-outline",
      title: "Help & Support",
      subtitle: "Get help and contact support",
      onPress: () => {},
    },
    {
      icon: "document-text-outline",
      title: "Legal",
      subtitle: "Terms, privacy policy, and legal info",
      onPress: () => {},
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
          <Text className="text-center text-lg font-bold text-[#132F38]">
            Profile
          </Text>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-4 pt-6">
            <View className="items-center mb-8">
              <Pressable
                className="w-24 h-24 bg-primary-500 rounded-full items-center justify-center mb-4"
                onPress={() => router.push("/upload-avatar")}
              >
                <Ionicons name="person" size={40} color="white" />
              </Pressable>
              <Text className="text-xl font-bold text-[#132F38]">
                John Doe
              </Text>
              <Text className="text-sm text-neutral-600">
                john.doe@example.com
              </Text>
              <Pressable
                className="mt-3 px-4 py-2 bg-white rounded-lg border border-neutral-200"
                onPress={() => router.push("/upload-avatar")}
              >
                <Text className="text-sm font-semibold text-primary-500">
                  Edit Profile
                </Text>
              </Pressable>
            </View>

            <View className="space-y-3 mb-8">
              {profileOptions.map((option, index) => (
                <Pressable
                  key={index}
                  className="flex-row items-center p-4 bg-white rounded-xl border border-neutral-200"
                  onPress={option.onPress}
                >
                  <View className="w-12 h-12 bg-neutral-100 rounded-full items-center justify-center mr-3">
                    <Ionicons name={option.icon as any} size={20} color="#2791B5" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-sm font-semibold text-[#0C212C]">
                      {option.title}
                    </Text>
                    <Text className="text-xs text-neutral-600">
                      {option.subtitle}
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
                </Pressable>
              ))}
            </View>

            <View className="p-4 bg-red-50 rounded-xl border border-red-200 mb-8">
              <Text className="text-sm font-semibold text-red-800 mb-2">
                Account Balance
              </Text>
              <Text className="text-[24px] font-bold text-red-800">
                $2,847.63
              </Text>
              <Text className="text-xs text-red-700 mt-1">
                Available balance in your SmartBank account
              </Text>
            </View>

            <Pressable
              className="h-12 w-full items-center justify-center rounded-xl bg-red-500 mb-4"
              onPress={handleLogout}
            >
              <Text className="text-base font-semibold text-white">
                Log Out
              </Text>
            </Pressable>

            <Text className="text-center text-xs text-neutral-500 mb-8">
              SmartBank v1.0.0
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

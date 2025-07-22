import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Alert, Image, Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function NotificationsScreen() {
  const handleEnableNotifications = () => {
    Alert.alert(
      "Enable Notifications",
      "Allow SmartBank to send you notifications about your account activity?",
      [
        {
          text: "Not Now",
          style: "cancel",
          onPress: () => router.push("/verify-identity")
        },
        {
          text: "Enable",
          onPress: () => router.push("/verify-identity")
        }
      ]
    )
  }

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
            Stay Updated
          </Text>
          <Text className="mt-2 text-[13px] font-medium text-neutral-600">
            Get notified about important account activities and security alerts.
          </Text>
          
          <View className="flex-1 items-center justify-center">
            <View className="w-48 h-48 bg-primary-100 rounded-full items-center justify-center mb-8">
              <Ionicons name="notifications-outline" size={80} color="#2791B5" />
            </View>
            
            <Text className="text-[20px] font-bold text-[#132F38] text-center mb-4">
              Enable Notifications
            </Text>
            
            <Text className="text-[13px] text-neutral-600 text-center leading-5 px-8">
              We'll send you notifications about transactions, security alerts, and important account updates to keep you informed.
            </Text>
          </View>
          
          <View className="space-y-3">
            <Pressable
              className="h-12 w-full items-center justify-center rounded-xl bg-primary-500"
              onPress={handleEnableNotifications}
            >
              <Text className="text-[16px] font-semibold text-white">
                Enable Notifications
              </Text>
            </Pressable>
            
            <Pressable
              className="h-12 w-full items-center justify-center rounded-xl bg-neutral-200"
              onPress={() => router.push("/verify-identity")}
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

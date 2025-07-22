import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Image, Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { cn } from "@/utils/cn"

export default function Page() {
  return (
    <View className="flex-1 bg-gradient-to-b from-slate-700 via-blue-500 to-slate-700">
      <View className="flex-1 pb-7 pt-1">
        <SafeAreaView className="flex-1">
          <View className="h-11 w-full justify-center">
            <Pressable
              className="absolute left-0 top-0 h-11 w-11 items-center justify-center"
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </Pressable>
          </View>
          <View className="flex-1">
            <Image
              className="w-full flex-1 object-contain"
              source={require("@/assets/phone-verified.png")}
            />
          </View>
          <View className="px-4">
            <Text className="mt-1 text-center text-4xl font-bold text-white">
              We’ve verified your phone number
            </Text>
            <Text className="mb-8 mt-2 text-center text-xs font-medium text-neutral-300">
              We just sent you an email to office@designmesocial.com
            </Text>
            <Pressable
              className={cn(
                "mb-4 h-12 w-full items-center justify-center rounded-xl bg-yellow-300",
              )}
              onPress={() => router.navigate("/create-passcode")}
            >
              <Text className={cn("text-base font-bold text-gray-700")}>
                Continue
              </Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </View>
    </View>
  )
}

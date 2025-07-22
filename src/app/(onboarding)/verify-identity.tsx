import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Image, Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function VerifyIdentityScreen() {
  return (
    <View className="flex-1 bg-neutral-50 pb-7 pt-1">
      <SafeAreaView className="flex-1">
        <View className="h-11 w-full justify-center">
          <Pressable
            className="absolute left-0 top-0 h-11 w-11 items-center justify-center"
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#2791B5" />
          </Pressable>
        </View>
        <View className="flex-1 px-4">
          <Text className="mt-1 text-3xl font-bold text-[#132F38]">
            Verify Your Identity
          </Text>
          <Text className="mt-2 text-xs font-medium text-neutral-600">
            We need to verify your identity to comply with banking regulations.
          </Text>
          
          <View className="flex-1 items-center justify-center">
            <View className="w-48 h-48 bg-primary-100 rounded-full items-center justify-center mb-8">
              <Ionicons name="shield-checkmark-outline" size={80} color="#2791B5" />
            </View>
            
            <Text className="text-[20px] font-bold text-[#132F38] text-center mb-4">
              Identity Verification
            </Text>
            
            <Text className="text-xs text-neutral-600 text-center leading-5 px-8 mb-8">
              Please have your government-issued ID ready. We'll guide you through a quick verification process.
            </Text>
            
            <View className="w-full space-y-4">
              <View className="flex-row items-center p-4 bg-white rounded-xl border border-neutral-200">
                <Ionicons name="document-text-outline" size={24} color="#2791B5" />
                <View className="ml-3 flex-1">
                  <Text className="text-sm font-semibold text-[#0C212C]">
                    Government ID
                  </Text>
                  <Text className="text-xs text-neutral-600">
                    Driver's license or passport
                  </Text>
                </View>
              </View>
              
              <View className="flex-row items-center p-4 bg-white rounded-xl border border-neutral-200">
                <Ionicons name="camera-outline" size={24} color="#2791B5" />
                <View className="ml-3 flex-1">
                  <Text className="text-sm font-semibold text-[#0C212C]">
                    Selfie Verification
                  </Text>
                  <Text className="text-xs text-neutral-600">
                    Take a photo of yourself
                  </Text>
                </View>
              </View>
            </View>
          </View>
          
          <View className="space-y-3">
            <Pressable
              className="h-12 w-full items-center justify-center rounded-xl bg-primary-500"
              onPress={() => router.push("/selfie")}
            >
              <Text className="text-base font-semibold text-white">
                Start Verification
              </Text>
            </Pressable>
            
            <Pressable
              className="h-12 w-full items-center justify-center rounded-xl bg-neutral-200"
              onPress={() => router.push("/selfie")}
            >
              <Text className="text-base font-semibold text-primary-500">
                Skip for Now
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

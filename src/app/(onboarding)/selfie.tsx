import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Alert, Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function SelfieScreen() {
  const handleTakeSelfie = () => {
    Alert.alert(
      "Camera Access",
      "SmartBank needs access to your camera to take a selfie for identity verification.",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Allow",
          onPress: () => router.push("/create-card")
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
            Take a Selfie
          </Text>
          <Text className="mt-2 text-[13px] font-medium text-neutral-600">
            Position your face in the center of the frame and take a clear photo.
          </Text>
          
          <View className="flex-1 items-center justify-center">
            <View className="w-64 h-80 bg-neutral-200 rounded-2xl items-center justify-center mb-8 border-2 border-dashed border-neutral-300">
              <Ionicons name="person-outline" size={80} color="#9CA3AF" />
              <Text className="text-[14px] text-neutral-500 mt-4 text-center">
                Position your face here
              </Text>
            </View>
            
            <Text className="text-[13px] text-neutral-600 text-center leading-5 px-8">
              Make sure your face is clearly visible and well-lit. Remove any sunglasses or hats.
            </Text>
          </View>
          
          <View className="space-y-3">
            <Pressable
              className="h-12 w-full items-center justify-center rounded-xl bg-primary-500"
              onPress={handleTakeSelfie}
            >
              <Text className="text-[16px] font-semibold text-white">
                Take Selfie
              </Text>
            </Pressable>
            
            <Pressable
              className="h-12 w-full items-center justify-center rounded-xl bg-neutral-200"
              onPress={() => router.push("/create-card")}
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

import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { router } from "expo-router"
import { Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function CreateCardScreen() {
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
          <Text className="mt-1 text-3xl font-bold text-gray-800">
            Create Your Card
          </Text>
          <Text className="mt-2 text-xs font-medium text-neutral-600">
            Choose your card design and get ready to start spending.
          </Text>
          
          <View className="flex-1 items-center justify-center">
            <LinearGradient
              colors={["#265565", "#288FB1"]}
              className="w-80 h-48 rounded-2xl p-6 mb-8 shadow-lg"
            >
              <View className="flex-1 justify-between">
                <View>
                  <Text className="text-white text-base font-bold">
                    SmartBank
                  </Text>
                </View>
                
                <View>
                  <Text className="text-white text-sm font-mono tracking-wider">
                    •••• •••• •••• 1234
                  </Text>
                  <View className="flex-row justify-between items-end mt-4">
                    <View>
                      <Text className="text-white/70 text-xs uppercase">
                        Card Holder
                      </Text>
                      <Text className="text-white text-sm font-semibold">
                        Your Name
                      </Text>
                    </View>
                    <View>
                      <Text className="text-white/70 text-xs uppercase">
                        Expires
                      </Text>
                      <Text className="text-white text-sm font-semibold">
                        12/28
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </LinearGradient>
            
            <Text className="text-xs text-neutral-600 text-center leading-5 px-8">
              Your virtual card is ready! You can start using it immediately for online purchases.
            </Text>
          </View>
          
          <View className="space-y-3">
            <Pressable
              className="h-12 w-full items-center justify-center rounded-xl bg-primary-500"
              onPress={() => router.push("/top-up")}
            >
              <Text className="text-base font-semibold text-white">
                Create Card
              </Text>
            </Pressable>
            
            <Pressable
              className="h-12 w-full items-center justify-center rounded-xl bg-neutral-200"
              onPress={() => router.push("/top-up")}
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

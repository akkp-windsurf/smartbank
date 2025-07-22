import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Pressable, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function LegalInformationScreen() {
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
          <Text className="mt-1 text-[28px] font-bold text-[#132F38]">
            Legal Information
          </Text>
          <Text className="mt-2 text-[13px] font-medium text-neutral-600">
            Please review our terms and conditions before proceeding.
          </Text>
          <ScrollView className="flex-1 mt-6" showsVerticalScrollIndicator={false}>
            <View className="space-y-4">
              <View>
                <Text className="text-[16px] font-semibold text-[#0C212C] mb-2">
                  Terms of Service
                </Text>
                <Text className="text-[13px] text-neutral-600 leading-5">
                  By using SmartBank, you agree to our terms of service. These terms govern your use of our banking services and outline your rights and responsibilities as a customer.
                </Text>
              </View>
              
              <View>
                <Text className="text-[16px] font-semibold text-[#0C212C] mb-2">
                  Privacy Policy
                </Text>
                <Text className="text-[13px] text-neutral-600 leading-5">
                  We are committed to protecting your privacy and personal information. Our privacy policy explains how we collect, use, and safeguard your data.
                </Text>
              </View>
              
              <View>
                <Text className="text-[16px] font-semibold text-[#0C212C] mb-2">
                  Data Protection
                </Text>
                <Text className="text-[13px] text-neutral-600 leading-5">
                  Your financial data is encrypted and protected using industry-standard security measures. We never share your personal information with third parties without your consent.
                </Text>
              </View>
              
              <View>
                <Text className="text-[16px] font-semibold text-[#0C212C] mb-2">
                  Account Security
                </Text>
                <Text className="text-[13px] text-neutral-600 leading-5">
                  You are responsible for maintaining the security of your account credentials. Please use strong passwords and enable two-factor authentication when available.
                </Text>
              </View>
            </View>
          </ScrollView>
          
          <View className="mt-6">
            <Pressable
              className="h-12 w-full items-center justify-center rounded-xl bg-primary-500"
              onPress={() => router.push("/notifications")}
            >
              <Text className="text-[16px] font-semibold text-white">
                I Agree
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

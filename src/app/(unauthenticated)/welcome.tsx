import { Link } from "expo-router"
import { Image, Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Page() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 px-4 py-7">
        <View className="flex-1">
          <Text className="text-[13px] font-medium text-neutral-600">
            Welcome to SmartBank
          </Text>
          <Text className="mt-1.5 text-[34px] font-bold text-[#0C212C]">
            Managing your money has never been so easy
          </Text>
          <View className="mt-10 flex-1">
            <View className="rounded-2xl bg-white p-6 shadow-lg">
              <View className="mb-6 flex-row items-center justify-between">
                <View>
                  <Text className="text-[16px] font-bold text-[#0C212C]">
                    ADRIAN'S ACCOUNT
                  </Text>
                  <Text className="text-[12px] font-medium text-neutral-500">
                    4212423532
                  </Text>
                </View>
                <View className="flex-row">
                  <View className="mr-1 h-2 w-2 rounded-full bg-neutral-400" />
                  <View className="mr-1 h-2 w-2 rounded-full bg-neutral-400" />
                  <View className="h-2 w-2 rounded-full bg-neutral-400" />
                </View>
              </View>

              <View className="mb-8">
                <Text className="text-[13px] font-medium text-neutral-500">
                  Available balance
                </Text>
                <View className="flex-row items-center">
                  <Text className="text-[36px] font-bold text-[#0C212C]">
                    500,00 GBP
                  </Text>
                  <View className="ml-3 h-10 w-10 items-center justify-center rounded-full bg-[#E8F569]">
                    <Text className="text-[18px] font-bold text-[#134555]">€</Text>
                  </View>
                </View>
              </View>

              <View className="mb-8 flex-row justify-between">
                <Pressable 
                  className="flex-1 items-center justify-center rounded-xl bg-[#E8F4F8] p-4 mr-2"
                  onPress={() => console.log('Top up pressed')}
                >
                  <View className="mb-2 h-10 w-10 items-center justify-center rounded-full bg-[#4A9EAF]">
                    <Text className="text-[18px] font-bold text-white">+</Text>
                  </View>
                  <Text className="text-[14px] font-semibold text-[#4A9EAF]">Top up</Text>
                </Pressable>
                
                <Pressable 
                  className="flex-1 items-center justify-center rounded-xl bg-[#E8F4F8] p-4 mx-1"
                  onPress={() => console.log('Transfer pressed')}
                >
                  <View className="mb-2 h-10 w-10 items-center justify-center rounded-full bg-[#4A9EAF]">
                    <Text className="text-[16px] font-bold text-white">→</Text>
                  </View>
                  <Text className="text-[14px] font-semibold text-[#4A9EAF]">Transfer</Text>
                </Pressable>
                
                <Pressable 
                  className="flex-1 items-center justify-center rounded-xl bg-[#E8F4F8] p-4 ml-2"
                  onPress={() => console.log('Exchange pressed')}
                >
                  <View className="mb-2 h-10 w-10 items-center justify-center rounded-full bg-[#4A9EAF]">
                    <Text className="text-[16px] font-bold text-white">⇄</Text>
                  </View>
                  <Text className="text-[14px] font-semibold text-[#4A9EAF]">Exchange</Text>
                </Pressable>
              </View>

              <View className="border-t border-neutral-200 pt-6">
                <View className="mb-4 flex-row items-center justify-between">
                  <Text className="text-[16px] font-semibold text-[#0C212C]">
                    Transactions
                  </Text>
                  <Text className="text-[14px] font-semibold text-[#4A9EAF]">
                    See all
                  </Text>
                </View>
                
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <View className="mr-3 h-12 w-12 items-center justify-center rounded-full bg-[#4A9EAF]">
                      <Text className="text-[16px] font-bold text-white">AK</Text>
                    </View>
                    <View>
                      <Text className="text-[14px] font-semibold text-[#0C212C]">To Adrian UIUX</Text>
                      <Text className="text-[12px] text-neutral-500">Today, 3:30 PM</Text>
                    </View>
                  </View>
                  <Text className="text-[16px] font-bold text-red-500">-£250</Text>
                </View>
              </View>

              <View className="mt-6 rounded-xl bg-[#F8F9FA] p-4">
                <Text className="text-[16px] font-bold text-[#0C212C]">Direct deposits</Text>
                <Text className="text-[24px] font-bold text-[#0C212C]">$0</Text>
                <Text className="text-[12px] text-neutral-500">0 paychecks</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Link href="/sign-up" asChild>
            <Pressable className="h-12 w-full items-center justify-center rounded-xl bg-primary-500">
              <Text className="text-[16px] font-semibold text-white">
                Sign up
              </Text>
            </Pressable>
          </Link>
          <Link href="/login" asChild>
            <Pressable className="mt-4 h-12 w-full items-center justify-center rounded-xl bg-neutral-200">
              <Text className="text-[16px] font-semibold text-primary-500">
                Log in
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  )
}

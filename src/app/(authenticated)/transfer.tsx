import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useState } from "react"
import { Alert, Pressable, ScrollView, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function TransferScreen() {
  const [amount, setAmount] = useState("")
  const [recipient, setRecipient] = useState("")
  const [note, setNote] = useState("")

  const recentContacts = [
    { id: 1, name: "John Doe", email: "john@example.com", avatar: "J" },
    { id: 2, name: "Sarah Wilson", email: "sarah@example.com", avatar: "S" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", avatar: "M" },
  ]

  const handleTransfer = () => {
    if (!amount || !recipient) {
      Alert.alert("Error", "Please fill in all required fields")
      return
    }
    
    Alert.alert(
      "Confirm Transfer",
      `Send $${amount} to ${recipient}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Send",
          onPress: () => {
            Alert.alert("Success", "Transfer completed successfully!")
            router.back()
          }
        }
      ]
    )
  }

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
          <Text className="text-center text-[18px] font-bold text-[#132F38]">
            Transfer Money
          </Text>
        </View>

        <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
          <View className="mt-6">
            <Text className="text-base font-semibold text-[#0C212C] mb-4">
              Amount
            </Text>
            
            <View className="relative mb-6">
              <Text className="absolute left-4 top-3 text-[24px] font-bold text-neutral-600 z-10">
                $
              </Text>
              <TextInput
                className="h-16 w-full pl-12 pr-4 rounded-xl bg-white border border-neutral-200 text-[24px] font-bold text-[#0C212C]"
                placeholder="0.00"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
              />
            </View>

            <Text className="text-base font-semibold text-[#0C212C] mb-4">
              Send To
            </Text>
            
            <TextInput
              className="h-12 w-full px-4 rounded-xl bg-white border border-neutral-200 text-sm text-[#0C212C] mb-6"
              placeholder="Email or phone number"
              value={recipient}
              onChangeText={setRecipient}
              keyboardType="email-address"
            />

            <Text className="text-base font-semibold text-[#0C212C] mb-4">
              Recent Contacts
            </Text>
            
            <View className="space-y-3 mb-6">
              {recentContacts.map((contact) => (
                <Pressable
                  key={contact.id}
                  className="flex-row items-center p-4 bg-white rounded-xl border border-neutral-200"
                  onPress={() => setRecipient(contact.email)}
                >
                  <View className="w-12 h-12 bg-primary-500 rounded-full items-center justify-center mr-3">
                    <Text className="text-white text-base font-bold">
                      {contact.avatar}
                    </Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-sm font-semibold text-[#0C212C]">
                      {contact.name}
                    </Text>
                    <Text className="text-[12px] text-neutral-600">
                      {contact.email}
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
                </Pressable>
              ))}
            </View>

            <Text className="text-base font-semibold text-[#0C212C] mb-4">
              Note (Optional)
            </Text>
            
            <TextInput
              className="h-20 w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-sm text-[#0C212C] mb-8"
              placeholder="Add a note..."
              value={note}
              onChangeText={setNote}
              multiline
              textAlignVertical="top"
            />

            <View className="p-4 bg-blue-50 rounded-xl border border-blue-200 mb-8">
              <View className="flex-row items-center justify-between">
                <Text className="text-sm font-semibold text-blue-800">
                  Transfer Fee
                </Text>
                <Text className="text-sm font-bold text-blue-800">
                  Free
                </Text>
              </View>
              <Text className="text-[12px] text-blue-700 mt-1">
                No fees for transfers between SmartBank accounts
              </Text>
            </View>
          </View>
        </ScrollView>

        <View className="px-4 pb-4">
          <Pressable
            className="h-12 w-full items-center justify-center rounded-xl bg-primary-500"
            onPress={handleTransfer}
          >
            <Text className="text-base font-semibold text-white">
              Send Money
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  )
}

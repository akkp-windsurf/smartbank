import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useState } from "react"
import { Alert, Pressable, ScrollView, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function ExchangeScreen() {
  const [fromAmount, setFromAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("EUR")
  const [toAmount, setToAmount] = useState("")

  const exchangeRate = 0.85
  
  const currencies = [
    { code: "USD", name: "US Dollar", symbol: "$" },
    { code: "EUR", name: "Euro", symbol: "€" },
    { code: "GBP", name: "British Pound", symbol: "£" },
    { code: "JPY", name: "Japanese Yen", symbol: "¥" },
    { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
  ]

  const handleAmountChange = (value: string) => {
    setFromAmount(value)
    if (value) {
      const converted = (parseFloat(value) * exchangeRate).toFixed(2)
      setToAmount(converted)
    } else {
      setToAmount("")
    }
  }

  const handleExchange = () => {
    if (!fromAmount) {
      Alert.alert("Error", "Please enter an amount to exchange")
      return
    }
    
    Alert.alert(
      "Confirm Exchange",
      `Exchange ${fromAmount} ${fromCurrency} to ${toAmount} ${toCurrency}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Exchange",
          onPress: () => {
            Alert.alert("Success", "Currency exchange completed successfully!")
            router.back()
          }
        }
      ]
    )
  }

  const swapCurrencies = () => {
    const tempCurrency = fromCurrency
    setFromCurrency(toCurrency)
    setToCurrency(tempCurrency)
    handleAmountChange(fromAmount)
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
            Exchange Money
          </Text>
        </View>

        <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
          <View className="mt-6">
            <View className="p-6 bg-white rounded-2xl border border-neutral-200 mb-6">
              <Text className="text-base font-semibold text-[#0C212C] mb-4">
                From
              </Text>
              
              <View className="flex-row items-center mb-4">
                <View className="flex-1 mr-3">
                  <TextInput
                    className="h-12 w-full px-4 rounded-xl bg-neutral-100 text-[18px] font-bold text-[#0C212C]"
                    placeholder="0.00"
                    value={fromAmount}
                    onChangeText={handleAmountChange}
                    keyboardType="numeric"
                  />
                </View>
                <View className="w-20 h-12 bg-neutral-100 rounded-xl items-center justify-center">
                  <Text className="text-sm font-bold text-[#0C212C]">
                    {fromCurrency}
                  </Text>
                </View>
              </View>

              <View className="items-center my-4">
                <Pressable
                  className="w-12 h-12 bg-primary-500 rounded-full items-center justify-center"
                  onPress={swapCurrencies}
                >
                  <Ionicons name="swap-vertical" size={24} color="white" />
                </Pressable>
              </View>

              <Text className="text-base font-semibold text-[#0C212C] mb-4">
                To
              </Text>
              
              <View className="flex-row items-center">
                <View className="flex-1 mr-3">
                  <View className="h-12 w-full px-4 rounded-xl bg-neutral-100 items-center justify-center">
                    <Text className="text-[18px] font-bold text-[#0C212C]">
                      {toAmount || "0.00"}
                    </Text>
                  </View>
                </View>
                <View className="w-20 h-12 bg-neutral-100 rounded-xl items-center justify-center">
                  <Text className="text-sm font-bold text-[#0C212C]">
                    {toCurrency}
                  </Text>
                </View>
              </View>
            </View>

            <View className="p-4 bg-green-50 rounded-xl border border-green-200 mb-6">
              <View className="flex-row items-center justify-between mb-2">
                <Text className="text-sm font-semibold text-green-800">
                  Exchange Rate
                </Text>
                <Text className="text-sm font-bold text-green-800">
                  1 {fromCurrency} = {exchangeRate} {toCurrency}
                </Text>
              </View>
              <Text className="text-[12px] text-green-700">
                Live rates updated every minute
              </Text>
            </View>

            <Text className="text-base font-semibold text-[#0C212C] mb-4">
              Popular Currencies
            </Text>
            
            <View className="space-y-3 mb-8">
              {currencies.slice(0, 3).map((currency) => (
                <Pressable
                  key={currency.code}
                  className="flex-row items-center p-4 bg-white rounded-xl border border-neutral-200"
                  onPress={() => {
                    if (currency.code !== fromCurrency) {
                      setToCurrency(currency.code)
                      handleAmountChange(fromAmount)
                    }
                  }}
                >
                  <View className="w-12 h-12 bg-neutral-100 rounded-full items-center justify-center mr-3">
                    <Text className="text-base font-bold text-[#0C212C]">
                      {currency.symbol}
                    </Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-sm font-semibold text-[#0C212C]">
                      {currency.name}
                    </Text>
                    <Text className="text-[12px] text-neutral-600">
                      {currency.code}
                    </Text>
                  </View>
                  <Text className="text-sm font-bold text-primary-500">
                    {currency.code === "USD" ? "1.00" : exchangeRate.toFixed(2)}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ScrollView>

        <View className="px-4 pb-4">
          <Pressable
            className="h-12 w-full items-center justify-center rounded-xl bg-primary-500"
            onPress={handleExchange}
          >
            <Text className="text-base font-semibold text-white">
              Exchange Now
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  )
}

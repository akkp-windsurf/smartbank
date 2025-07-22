import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Alert, Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function UploadAvatarScreen() {
  const handleTakePhoto = () => {
    Alert.alert(
      "Camera Access",
      "SmartBank needs access to your camera to take a photo.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Allow",
          onPress: () => {
            Alert.alert("Success", "Profile photo updated successfully!")
            router.back()
          }
        }
      ]
    )
  }

  const handleChooseFromLibrary = () => {
    Alert.alert(
      "Photo Library Access",
      "SmartBank needs access to your photo library to select a photo.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Allow",
          onPress: () => {
            Alert.alert("Success", "Profile photo updated successfully!")
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
          <Text className="text-center text-lg font-bold text-[#132F38]">
            Upload Avatar
          </Text>
        </View>

        <View className="flex-1 px-4">
          <View className="flex-1 items-center justify-center">
            <View className="w-32 h-32 bg-primary-500 rounded-full items-center justify-center mb-8">
              <Ionicons name="person" size={60} color="white" />
            </View>
            
            <Text className="text-xl font-bold text-[#132F38] text-center mb-4">
              Update Profile Photo
            </Text>
            
            <Text className="text-sm text-neutral-600 text-center leading-5 px-8 mb-12">
              Choose a photo that represents you. This will be visible to other SmartBank users when you send or receive money.
            </Text>
            
            <View className="w-full space-y-4">
              <Pressable
                className="flex-row items-center p-4 bg-white rounded-xl border border-neutral-200"
                onPress={handleTakePhoto}
              >
                <View className="w-12 h-12 bg-primary-100 rounded-full items-center justify-center mr-3">
                  <Ionicons name="camera-outline" size={24} color="#2791B5" />
                </View>
                <View className="flex-1">
                  <Text className="text-base font-semibold text-[#0C212C]">
                    Take Photo
                  </Text>
                  <Text className="text-xs text-neutral-600">
                    Use your camera to take a new photo
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
              </Pressable>
              
              <Pressable
                className="flex-row items-center p-4 bg-white rounded-xl border border-neutral-200"
                onPress={handleChooseFromLibrary}
              >
                <View className="w-12 h-12 bg-primary-100 rounded-full items-center justify-center mr-3">
                  <Ionicons name="images-outline" size={24} color="#2791B5" />
                </View>
                <View className="flex-1">
                  <Text className="text-base font-semibold text-[#0C212C]">
                    Choose from Library
                  </Text>
                  <Text className="text-xs text-neutral-600">
                    Select an existing photo from your gallery
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
              </Pressable>
            </View>
          </View>
          
          <View className="pb-4">
            <Pressable
              className="h-12 w-full items-center justify-center rounded-xl bg-neutral-200"
              onPress={() => router.back()}
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

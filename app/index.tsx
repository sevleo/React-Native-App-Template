import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import beachImage from "@/assets/meditation-images/beach.webp";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.8)", "transparent"]}>
          <SafeAreaView className="flex-1 px-1 justify-between">
            <View>
              <Text className="text-center text-white  text-4xl">
                Meditations
              </Text>
              <Text className="text-center text-white text-2xl mt-3">
                Simplifying meditation for everyone
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push("/(tabs)/nature-meditate")}
                title="Get Started"
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;

import "react-native-gesture-handler";

import React from "react";
import AppLoading from "expo-app-loading";

import { Righteous_400Regular } from "@expo-google-fonts/righteous";
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";

import { MotiExamples } from "./src/screens/MotiExamples";

export default function App() {
  const [fontsLoaded] = useFonts({
    Righteous_400Regular,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <MotiExamples />;
}

import "react-native-gesture-handler";

import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";

import Gesture from "./src/screens/Gesture";

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Gesture />;
}

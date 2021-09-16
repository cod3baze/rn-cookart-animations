import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
  Extrapolate,
  withSequence,
} from "react-native-reanimated";

import heroImg from "../../assets/hero.png";

export default function Gesture() {
  const titlePosition = useSharedValue(30);
  const imagePosition = useSharedValue(-30);

  useEffect(() => {
    imagePosition.value = withTiming(
      0,
      {
        duration: 500,
      },
      () => {
        titlePosition.value = withSequence(
          withTiming(0, {
            duration: 1000,
            easing: Easing.bounce,
          }),
          withTiming(-320, {
            duration: 500,
            easing: Easing.bounce,
          })
        );
      }
    );
  }, []);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: titlePosition.value }],
      opacity: interpolate(
        titlePosition.value,
        [30, 0],
        [0, 1],
        Extrapolate.CLAMP
      ),
    };
  });

  const heroStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: imagePosition.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Image style={[styles.hero, heroStyle]} source={heroImg} />

      <Animated.Text style={[styles.title, titleStyle]}>
        Bem-vindo ao App
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131314",
    justifyContent: "center",
    alignItems: "center",
  },
  hero: {
    width: 288,
    height: 200,
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    color: "#f8f8f8",
    fontSize: 32,
  },
});

export { Gesture };

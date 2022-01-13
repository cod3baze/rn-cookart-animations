import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  useAnimatedGestureHandler,
  useDerivedValue,
  interpolate,
} from "react-native-reanimated";

import { Card } from "./components/TinderCard";

const users = [
  {
    id: "elias@cognu.genesis",
    name: "elias",
    bio: "programmer focused on Tech around JS language.",
    avatar: "https://github.com/eliasallex.png",
  },
  {
    id: "mayk@rocketseat",
    name: "Mayk",
    bio: "Instructor on Rocketseat, passionate on education.",
    avatar: "https://github.com/maykbrito.png",
  },
];

const ROTATION = 30;

export function Tinderfy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);

  const currentProfile = users[currentIndex];
  const nextProfile = users[nextIndex];

  const { width: screenWidth } = useWindowDimensions();

  const hiddenTranslateX = 2 * screenWidth;

  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(
    () =>
      interpolate(translateX.value, [0, hiddenTranslateX], [0, ROTATION]) +
      "deg"
  );

  const cardAnimationStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
    ],
  }));

  const handleGesture = useAnimatedGestureHandler({
    onStart: (_, context: any) => {
      context.positionX = translateX.value;
    },
    onActive: (event, context: any) => {
      translateX.value = withSpring(context.positionX + event.translationX);
    },
    onEnd: () => {
      // translateX.value = withSpring(0);
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.nextCardContainer}>
        <Card data={nextProfile} />
      </View>

      <PanGestureHandler onGestureEvent={handleGesture}>
        <Animated.View style={[styles.animatedCard, cardAnimationStyle]}>
          <Card data={currentProfile} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animatedCard: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  nextCardContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});

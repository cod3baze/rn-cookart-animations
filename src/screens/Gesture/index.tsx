import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function Gesture() {
  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(event, ctx: { posX: number; posY: number }) {
      ctx.posX = positionX.value;
      ctx.posY = positionY.value;
    },
    onActive(event, ctx: { posX: number; posY: number }) {
      positionX.value = ctx.posX + event.translationX;
      positionY.value = ctx.posY + event.translationY;
    },
    onEnd() {
      positionX.value = withSpring(0, {});
      positionY.value = withSpring(0, {});
    },
  });

  const positionStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.content, positionStyle]}></Animated.View>
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede",
    paddingTop: 32,
  },
  content: {
    width: 150,
    height: 150,
    backgroundColor: "#f25555",
    borderRadius: 6,
  },
});

export { Gesture };

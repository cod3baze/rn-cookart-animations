import React from "react";
import { StyleSheet } from "react-native";
import { MotiView } from "@motify/components";

/**
 * animation: FadeInOut
 * - usage:
 * <AnimatePresence exitBeforeEnter>
 *    {isRefreshing && <MotiShape bg="cyan" key={`1-${isRefreshing}`} />}
 *    {!isRefreshing && (
 *      <MotiShape bg="hotpink" key={`1-${isRefreshing}`} />
 *    )}
 *  </AnimatePresence>
 */
export function MotiShape({ bg }: { bg: string }) {
  return (
    <MotiView
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        type: "timing",
        duration: 100,
      }}
      exit={{
        // only work if AnimatePresence is used in parent component
        opacity: 0,
        scale: 0.5,
      }}
      style={[styles.shape, { backgroundColor: bg }]}
    />
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: "center",
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#9c1aff",
  },
});

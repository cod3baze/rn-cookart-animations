import React from "react";

import { View } from "react-native";

const LoadingIndicator = ({ size }: { size: number }) => {
  return <View />;
};

export function LoadingAnimation() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#010101",
      }}
    >
      <LoadingIndicator size={30} />
    </View>
  );
}

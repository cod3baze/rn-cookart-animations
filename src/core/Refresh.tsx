import React from "react";

import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

export function Refresh({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.buttonText}>Reload</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    margin: 24,
    width: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

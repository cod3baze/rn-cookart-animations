import React from "react";
import { TouchableOpacity, View } from "react-native";

import { Svg, Circle } from "react-native-svg";

import { Fontisto } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../styles/theme";
import { Header } from "../../components/Water/Header";

function DrinkWater() {
  return (
    <View style={styles.container}>
      <Header ml={0} percent={0} />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Svg width={120} height={120}>
            <Circle
              cx="60"
              cy="60"
              r="40"
              fill={theme.colors.blue100}
              stroke={theme.colors.blue90}
              strokeWidth={17}
              strokeOpacity={0.5}
            />
          </Svg>

          <Fontisto
            name="blood-drop"
            size={32}
            color={theme.colors.blue90}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export { DrinkWater };

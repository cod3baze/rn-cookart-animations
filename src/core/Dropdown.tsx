import React from "react";
import { StyleSheet, View, Text, ViewProps, Platform } from "react-native";
import { MotiView } from "moti";
import {
  MotiPressable,
  useMotiPressable,
  useMotiPressableAnimatedProps,
} from "moti/interactions";
import { Ionicons } from "@expo/vector-icons";

function MenuItemBg() {
  const state = useMotiPressable(
    "item",
    ({ hovered, pressed }) => {
      "worklet";
      return {
        opacity: hovered || pressed ? 0.4 : 0,
      };
    },
    []
  );

  return <MotiView state={state} style={styles.itemBg} />;
}

function MenuItemArrow() {
  const state = useMotiPressable(
    "item",
    ({ hovered, pressed }) => {
      "worklet";
      return {
        opacity: hovered || pressed ? 1 : 0,
        translateX: hovered || pressed ? 0 : -10,
      };
    },
    []
  );

  return (
    <MotiView
      transition={{ type: "timing" }}
      style={styles.itemArrow}
      state={state}
    ></MotiView>
  );
}

function MenuItem({
  title,
  description,
  color,
  icon,
}: {
  title: string;
  description: string;
  color: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
}) {
  return (
    <MotiPressable onPress={console.log} style={styles.item} id="item">
      <MenuItemBg />

      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <Ionicons name={icon} size={24} color={color} />
      </View>

      <View style={styles.itemContent}>
        <View style={styles.titleContainer}>
          <Text style={[styles.text, styles.title]}>{title}</Text>
          <MenuItemArrow />
        </View>

        <Text style={[styles.text, styles.subtitle]}>{description}</Text>
      </View>
    </MotiPressable>
  );
}

function Dropdown() {
  const dropdownState = useMotiPressable(
    "menu",
    ({ hovered, pressed }) => {
      "worklet";
      return {
        opacity: hovered || pressed ? 1 : 0,
        translateY: hovered || pressed ? 0 : -5,
      };
    },
    []
  );

  const animatedProps = useMotiPressableAnimatedProps<ViewProps>(
    "menu",
    ({ hovered, pressed }) => {
      "worklet";

      console.log("hovered: ", hovered);

      return {
        pointerEvents: hovered || pressed ? "auto" : "none",
      };
    },
    []
  );

  return (
    <MotiView
      style={styles.dropdown}
      animatedProps={animatedProps}
      transition={{ type: "timing" }}
    >
      <MotiView
        style={[styles.dropdownContent]}
        transition={{ type: "timing", delay: 20 }}
        state={dropdownState}
      >
        <Text style={[styles.text, styles.heading]}>Genesis Products</Text>
        <MenuItem
          icon="airplane"
          color="#50E3C2"
          title="Colleges"
          description="Post phrase lika a philosophy"
        />
        <MenuItem
          icon="mic-outline"
          color="#FF0080"
          title="Artists"
          description="For artists, managers & agents"
        />
      </MotiView>
    </MotiView>
  );
}

function TriggerBg() {
  const state = useMotiPressable(
    "trigger",
    ({ hovered, pressed }) => {
      "worklet";
      return {
        opacity: hovered || pressed ? 0.2 : 0,
      };
    },
    []
  );

  return <MotiView state={state} style={styles.triggerBg} />;
}

function Trigger() {
  return (
    <MotiPressable id="trigger">
      <TriggerBg />
      <View style={styles.triggerContainer}>
        <Text style={[styles.text, styles.trigger]}>Our Products</Text>
        <Ionicons name="chevron-down" style={styles.chevron} size={20} />
      </View>
    </MotiPressable>
  );
}

export function MotiMenu() {
  return (
    <MotiPressable id="menu">
      <Trigger />
      <Dropdown />
    </MotiPressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  wrapper: {
    padding: 32,
    alignItems: "flex-start",
  },
  text: {
    color: "white",
    fontFamily: Platform.OS === "web" ? "SF Pro Rounded" : undefined,
    fontSize: 14,
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    width: 500,
    paddingTop: 4,
  },
  dropdownContent: {
    backgroundColor: "black",
    paddingHorizontal: 16,
    borderRadius: 8,
    paddingVertical: 32,
  },
  trigger: {
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    ...Platform.select({
      web: { cursor: "pointer" },
    }),
  },
  triggerBg: {
    backgroundColor: "white",
    borderRadius: 4,
    ...StyleSheet.absoluteFillObject,
  },
  heading: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#888888",
    marginLeft: 16,
    fontSize: 16,
  },
  item: {
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    marginTop: 8,
    ...Platform.select({
      web: { cursor: "pointer" },
    }),
  },
  itemBg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#333",
  },
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#888888",
    fontWeight: "500",
  },
  itemContent: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemArrow: {
    marginLeft: 4,
  },
  chevron: {
    marginTop: 1,
    marginLeft: 8,
  },
  triggerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
    marginVertical: 8,
  },
});

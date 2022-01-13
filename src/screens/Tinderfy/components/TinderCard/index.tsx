import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";

interface User {
  id: string;
  name: string;
  bio: string;
  avatar: string;
}

type CardProps = {
  data: User;
};

export function Card({ data }: CardProps) {
  const { name, bio, avatar } = data;

  return (
    <View style={styles.card}>
      <ImageBackground
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
        source={{ uri: avatar }}
      >
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "95%",
    height: "70%",
    borderRadius: 10,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 6.68,
    elevation: 11,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",

    justifyContent: "flex-end",
  },
  cardInner: {
    padding: 10,
    backgroundColor: "rgba(0,0,0, .1)",
  },
  name: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  bio: {
    fontSize: 18,
    color: "white",
    lineHeight: 26,
  },
});

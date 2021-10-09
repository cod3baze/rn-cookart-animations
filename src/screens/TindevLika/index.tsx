import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

import defaultUsers from "./users";

import { styles } from "./styles";

import logo from "../../assets/logo.png";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";

export default function TindevLika() {
  const [users, setUsers] = useState<typeof defaultUsers>(defaultUsers);

  function handleSlide() {
    const [user, ...rest] = users;

    setUsers(rest);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={logo} />
      </TouchableOpacity>

      <View style={styles.cardsContainer}>
        {users.map((user, index) => (
          <View
            key={user._id}
            style={[styles.card, { zIndex: users.length - index }]}
          >
            <Image style={styles.avatar} source={{ uri: user.avatar }} />

            <View style={styles.footer}>
              <Text style={styles.name}>{user.name}</Text>
              <Text numberOfLines={3} style={styles.bio}>
                {user.bio}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSlide}>
          <Image source={dislike} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSlide}>
          <Image source={like} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export { TindevLika };

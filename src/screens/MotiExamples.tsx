import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import { Refresh } from "../core/Refresh";
import { MotiMenu } from "../core/Dropdown";

export function MotiExamples() {
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Refresh onPress={() => setIsRefreshing(!isRefreshing)} />
      </View>

      <View style={styles.wrapper}>
        <MotiMenu key={`1-${isRefreshing}`} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#121215",
  },
  wrapper: {
    padding: 32,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 30,
  },
});

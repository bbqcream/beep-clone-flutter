import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Splash() {
  return (
    <View style={styles.container}>
      <Text>안녕</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#303A46",
  },
});

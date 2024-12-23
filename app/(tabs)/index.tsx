import { StatusBar } from "expo-status-bar";
import React from "react";
import * as S from "./indexStyle";
import { StyleSheet, View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SwipeListView } from "react-native-swipe-list-view";

const DATA = [{ timeStemp: Date.now(), text: "Sample Text" }];

export default function HomeScreen() {
  const renderItem = ({ item, index }) => {
    return (
      <S.Container>
        <S.Icon />
        <Text>{item.text}</Text>
        <S.Circle />
      </S.Container>
    );
  };

  const renderHiddenItem = ({ item, index }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: wp(10),
        }}
      >
        <Text></Text>
        <Text></Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: wp(100),
          height: hp(20),
          justifyContent: "center",
          paddingLeft: wp(10),
        }}
      >
        <Text style={{ fontSize: hp(3), fontWeight: "bold" }}>
          todofhsffh list
        </Text>
      </View>
      <View>
        <SwipeListView
          data={DATA}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    backgroundColor: "#EBEAED",
  },
});

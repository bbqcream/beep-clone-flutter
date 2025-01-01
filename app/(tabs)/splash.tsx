import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// 네비게이션 타입 정의
type RootStackParamList = {
  Home: undefined; // 'Home' 화면 정의
};

type NavigationProp = StackNavigationProp<RootStackParamList, "Home">;

SplashScreen.preventAutoHideAsync(); // 스플래시 화면 유지

const Splash = () => {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const prepare = async () => {
      try {
        // 로딩 시간 시뮬레이션 (예: API 호출 또는 데이터 준비)
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync(); // 스플래시 화면 숨기기
        navigation.navigate("Home"); // 홈 화면으로 이동
      }
    };

    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>환영합니다!</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Splash;

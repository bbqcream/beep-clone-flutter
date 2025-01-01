import React from "react";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="login" options={{ title: "Login" }} />
    </Tabs>
  );
}

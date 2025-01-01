import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./(tabs)/login";
import Splash from "./(tabs)/splash";
import Home from "./(tabs)/home";

const Stack = createStackNavigator();

export default function Layout() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

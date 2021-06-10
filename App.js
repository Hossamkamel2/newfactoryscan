import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AssetScreen from "./app/screens/AssetScreen";
import FirstScreen from "./app/screens/firstScreen";
import MaterialScreen from "./app/screens/materialScreen";
import RoomScreen from "./app/screens/RoomScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="first"
        component={FirstScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="asset"
        component={AssetScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="material"
        component={MaterialScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Room"
        component={RoomScreen}
        options={{
          title: "Check In/Out material",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    // <View style={styles.container}>
    // </View>
    // <RoomScreen></RoomScreen>
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

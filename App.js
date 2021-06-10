import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AssetScreen from "./app/screens/AssetScreen";
import MaterialScreen from "./app/screens/materialScreen";
import RoomScreen from "./app/screens/RoomScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
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
    <RoomScreen></RoomScreen>
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

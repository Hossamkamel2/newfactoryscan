import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import colors from "../Config/colors";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Courier-Oblique",
      },
      android: {
        fontSize: 20,
        fontFamily: "Roboto",
      },
    }),
    color: colors.black,
  },
});

export default AppText;

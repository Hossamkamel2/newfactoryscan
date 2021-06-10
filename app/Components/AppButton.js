import React from "react";
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";
import colors from "../Config/colors";
import AppText from "./AppText";

function AppButton({ title, onPress, style, styletxt }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <AppText style={[styles.text, styletxt]}>{title}</AppText>
      </View>
    </TouchableNativeFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    borderRadius: 15,
    alignSelf: "center",
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
  text: {
    fontWeight: "bold",
  },
});

export default AppButton;

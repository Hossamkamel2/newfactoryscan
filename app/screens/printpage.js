import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AppButton from "../Components/AppButton";

import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";
import AppText from "../Components/AppText";
import colors from "../Config/colors";
import assetMaterial from "../services/assetMaterial";
const DATA = [
  { text: "Gran", value: "DRY02" },
  { text: "Dryer", value: "DRY01" },
  { text: "Mixer", value: "MIX01" },
  { text: "Compression Big", value: "COMP_B01" },
  { text: "Compression Small", value: "COMP_S01" },
];

const onPress = async (send) => {
 // console.log(send);
  const responce = await assetMaterial.machinePrint(send);
  if (responce.ok) alert("printed successfully");
  else alert(responce.status);
   // console.log(responce);
};
const Item = ({ title }) => (
  <TouchableOpacity
    onPress={() => {
      onPress(title.value);
    }}
    style={styles.item}
  >
    <Text style={styles.title}>{title.text}</Text>
  </TouchableOpacity>
);
function PrintPage({ navigation, route }) {
  const renderItem = ({ item }) => <Item title={item} />;

  const [assetname, setassetname] = useState("");
  const [canEdit, setcanedit] = useState(true);

  const isFocused = useIsFocused();

  useEffect(() => {
    setassetname("");
    setcanedit(true);
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={styles.box2}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.value}
        />
      </View>
      {/* <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <AppButton
          title="Print"
          style={styles.button}
          onPress={() => {
            // const responce = 1;
            setassetname("");
            setcanedit(true);
          }}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 20,
    backgroundColor: "#00D3BE",
    flex: 1,
    justifyContent: "center",
    //flexDirection: "row",
    alignItems: "center",
    //height: "50%",
    width: "100%",
  },
  box2: {
    backgroundColor: "#fff",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "40%",
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container2: {
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
  detailContainer: {
    width: "90%",
    height: "60%",
    //backgroundColor: "#aaa",
    flex: 0.5,
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
    // flexWrap: "wrap-reverse",
    // flex: 1,
  },
  firstdetail: {
    //backgroundColor: "black",
    margin: 10,
    width: "47%",
    height: "80%",
  },
  header: {
    //backgroundColor: "red",
    width: "100%",
    height: "10%",
  },
  secdetail: {
    //backgroundColor: "yellow",
    width: "47%",
    height: "80%",
    marginLeft: 0,
    marginTop: 10,
    marginRight: 10,
  },
  text: {
    // fontFamily: "montserrat",
    fontSize: 25,
    margin: 15,
    color: colors.white,
  },
  text2: {
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default PrintPage;

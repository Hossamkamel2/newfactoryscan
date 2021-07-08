import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import AppButton from "../Components/AppButton";

import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";
import AppText from "../Components/AppText";
import colors from "../Config/colors";
import assetMaterial from "../services/assetMaterial";

const onPress = () => {};
function PrintChild({ navigation, route }) {
  const [assetname, setassetname] = useState("");
  const [quantity, setquantity] = useState();

  const isFocused = useIsFocused();

  useEffect(() => {
    setassetname("");
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={styles.box2}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: "60%",
          }}
          onChangeText={async (text) => {
            setassetname(text);

            // console.log(text);
            //     const responce = await assetMaterial.assetdetail(text);
            //     //console.log(responce);
            //     if (text == "material") {
            //       navigation.navigate("material");
            //     }
            //     if (responce.status !== 200) alert(responce.problem);
            //     if (
            //       (responce.ok && responce.data.asset_Type == "Scale") ||
            //       (responce.ok && responce.data.asset_Type == "Machine")
            //     ) {
            //       navigation.navigate("asset", {
            //         ...route.params,
            //         id: responce.data.id,
            //         assetName: responce.data.asset_Name,
            //         assetType: responce.data.asset_Type,
            //         location: responce.data.location,
            //         qr: responce.data.uid,
            //       });
            //     }
            //     if (responce.ok && responce.data.asset_Type == "Warehouse") {
            //       navigation.navigate("asset", {
            //         ...route.params,
            //         id: responce.data.id,
            //         assetName: responce.data.asset_Name,
            //         assetType: responce.data.asset_Type,
            //         location: responce.data.location,
            //         qr: responce.data.uid,
            //       });
            //     }
          }}
          placeholder=" please Scan Code"
          value={assetname}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: "60%",
          }}
          keyboardType="number-pad"
          onChangeText={async (text) => {
            setquantity(text);

            // console.log(text);
            //     const responce = await assetMaterial.assetdetail(text);
            //     //console.log(responce);
            //     if (text == "material") {
            //       navigation.navigate("material");
            //     }
            //     if (responce.status !== 200) alert(responce.problem);
            //     if (
            //       (responce.ok && responce.data.asset_Type == "Scale") ||
            //       (responce.ok && responce.data.asset_Type == "Machine")
            //     ) {
            //       navigation.navigate("asset", {
            //         ...route.params,
            //         id: responce.data.id,
            //         assetName: responce.data.asset_Name,
            //         assetType: responce.data.asset_Type,
            //         location: responce.data.location,
            //         qr: responce.data.uid,
            //       });
            //     }
            //     if (responce.ok && responce.data.asset_Type == "Warehouse") {
            //       navigation.navigate("asset", {
            //         ...route.params,
            //         id: responce.data.id,
            //         assetName: responce.data.asset_Name,
            //         assetType: responce.data.asset_Type,
            //         location: responce.data.location,
            //         qr: responce.data.uid,
            //       });
            //     }
          }}
          placeholder=" Quantity"
          value={quantity}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <AppButton
          title="Print"
          style={styles.button}
          onPress={async () => {
            // const responce = 1;

            const response = await assetMaterial.childprint(
              assetname,
              quantity
            );
            if (response.ok) alert("printed successfully");
          }}
        />
      </View>
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
});

export default PrintChild;

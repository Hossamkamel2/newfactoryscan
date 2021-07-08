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
import AppText from "../Components/AppText";
import colors from "../Config/colors";
import assetMaterial from "../services/assetMaterial";

const onPress = () => {};
function AssetScreen({ navigation, route }) {
  const [matname, setmatname] = useState("");
  const [canEdit, setcanedit] = useState(true);
  const isFocused = useIsFocused();
  useEffect(() => {
    setmatname("");
    setcanedit(true);
    setInterval(async () => {
      if (route.params.assetType == "Machine") {
        const response = await assetMaterial.dryerStatus(route.params.qr);
      }
    }, 5000);
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.detailContainer}>
          {/* <View style={styles.header}></View> */}
          <View style={styles.firstdetail}>
            {/* <Text style={styles.text}>{route.params.id}</Text> */}
            <Text style={styles.text}>{route.params.assetName}</Text>
          </View>
          <View style={styles.secdetail}>
            <Text style={styles.text}>{route.params.location}</Text>
            <Text style={styles.text}>{route.params.assetType}</Text>
          </View>
        </View>
      </View>
      <View style={styles.box2}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: "60%",
          }}
          onChangeText={(text) => {
            setmatname(text);
            setcanedit(false);
          }}
          placeholder=" please Scan material Code"
          value={matname}
          editable={canEdit}
        />
      </View>
      <TouchableNativeFeedback
        onPress={async () => {
          //console.log(matname);
          console.log(route.params);
          const responce = await assetMaterial.materialDetail(
            matname,
            route.params.qr
          );
          console.log(responce);
          if (
            (responce.ok && route.params.assetType == "Scale") ||
            (responce.ok && route.params.assetType == "Machine")
          ) {
            navigation.navigate("material", {
              ...route.params,
              qr: responce.data.asset.uid,
              id: responce.data.asset.id,
              assetName: responce.data.asset.asset_Name,
              location: responce.data.asset.location,
              materialName: responce.data.material.itemName,
              batchId: responce.data.material.batchId,
              materialCode: responce.data.material.supplyCode,
              barcode: responce.data.material.uId,
              weight: responce.data.lastWeight,
              assetType: responce.data.asset.asset_Type,
            });
          } else if (responce.ok && route.params.assetType == "Warehouse") {
            console.log("here");
            navigation.navigate("Room", {
              ...route.params,
              qr: responce.data.asset.uid,
              id: responce.data.asset.id,
              assetName: responce.data.asset.asset_Name,
              location: responce.data.asset.location,
              materialName: responce.data.material.itemName,
              batchId: responce.data.material.batchId,
              materialCode: responce.data.material.supplyCode,
              barcode: responce.data.material.uId,
              checks: responce.data.checkes,
              assetType: responce.data.asset.asset_Type,
            });
          } else {
            alert("server error");
          }
        }}
      >
        <View style={[styles.container2]}>
          <AppText style={[styles.text2]}>Material Detail</AppText>
        </View>
      </TouchableNativeFeedback>
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
    fontSize: 15,
    margin: 15,
    color: colors.white,
  },
  text2: {
    fontWeight: "bold",
  },
});

export default AssetScreen;

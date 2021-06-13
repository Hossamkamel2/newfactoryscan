import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import AppButton from "../Components/AppButton";
import AppText from "../Components/AppText";
import colors from "../Config/colors";
import assetMaterial from "../services/assetMaterial";

const onPress = () => {};
function RoomScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.detailContainer}>
          <View style={styles.firstdetail}>
            <Text style={styles.text}>{route.params.id}</Text>
            <Text style={styles.text}>{route.params.assetName}</Text>
          </View>
          <View style={styles.secdetail}>
            <Text style={styles.text}>{route.params.location}</Text>
            <Text style={styles.text}>{route.params.assetType}</Text>
          </View>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.detailContainer}>
          <View style={styles.firstdetail}>
            <Text style={styles.text3}>{route.params.materialCode}</Text>
            <Text style={styles.text3}>{route.params.materialName}</Text>
          </View>
          <View
            style={[
              styles.secdetail,
              { borderLeftColor: "black", borderLeftWidth: 1 },
            ]}
          >
            <Text style={styles.text3}>Quantity</Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {route.params.checks == "No Material Found" && (
          <AppButton
            title="Check In"
            style={styles.button}
            onPress={async () => {
              // const responce = 1;
              const responce = await assetMaterial.pairMaterialToWarehouse(
                route.params.barcode,
                route.params.qr,
                1,
                0
              );
              console.log(responce);
              if (responce.ok && responce.data.status == "success") {
                alert(responce.data.state);
              } else if (responce.ok && responce.data.status != "success") {
                alert(responce.data.state);
              } else {
                alert(responce.problem);
              }
            }}
          />
        )}
        {route.params.checks.checkOut == 0 && (
          <AppButton
            title="Check Out"
            style={styles.button}
            onPress={async () => {
              const responce = await assetMaterial.pairMaterialToWarehouse(
                route.params.barcode,
                route.params.qr,
                1,
                1
              );
              console.log(responce);
              if (responce.ok && responce.data.status == "success") {
                alert(responce.data.state);
              } else if (responce.ok && responce.data.status != "success") {
                alert(responce.data.state);
              } else {
                alert(responce.problem);
              }
            }}
          />
        )}
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
  text3: {
    // fontFamily: "montserrat",
    fontSize: 25,
    margin: 15,
    color: colors.black,
  },
  text2: {
    fontWeight: "bold",
  },
});

export default RoomScreen;

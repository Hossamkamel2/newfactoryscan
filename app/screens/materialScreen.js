import React from "react";
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
function MaterialScreen({ navigation, route }) {
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
            <Text style={styles.text3}>{route.params.weight}</Text>
          </View>
        </View>
      </View>
      <TouchableNativeFeedback
        onPress={async () => {
          const obj = {
            barCode: route.params.barcode,
            qr: route.params.qr,
          };
          const responce = await assetMaterial.pairLoad(obj);

          if (responce.ok && responce.data.status === "Success") {
            alert("paired Success");
          } else if (responce.ok && responce.data.status == "fail")
            alert(`fail ${responce.data.message}`);
          else alert(responce.problem);

          // navigation.navigate("Room");
        }}
      >
        <View style={[styles.container2]}>
          <AppText style={[styles.text2]}>Link</AppText>
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

export default MaterialScreen;

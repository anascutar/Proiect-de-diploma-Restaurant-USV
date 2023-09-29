import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ListProductOrder from "../components/ListProductOrder";
import { useAppContext } from "../../App";
const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexView}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.imageButton}
              source={require("../assets/ic-back.png")}
            />
          </TouchableOpacity>
          <View style={styles.middle}>
            <Text style={styles.text2}>Profil</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.imageButton}
              source={require("../assets/ic-close.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 16 }}>
          <View style={styles.row}></View>
          <View style={styles.row}></View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Welcome")}
            style={styles.btnLogOff}
          >
            <Text style={styles.txtlogOff}>Deconectare</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginBottom: 100,
    marginTop: 50,
  },

  flexView: {
    flex: 1,
  },

  btnLogOff: {
    backgroundColor: "#1134A6",
    padding: 14,
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  txtlogOff: {
    fontSize: 15,
    color: "#FFFFFF",
  },
  row: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text1: {
    fontSize: 11,
    color: "#959595",
  },
  text2: {
    fontSize: 20,
    color: "#1F1F1F",
    fontWeight: "bold",
  },
  line: {
    width: "100%",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#E0E0E0",
    marginVertical: 20,
  },
});

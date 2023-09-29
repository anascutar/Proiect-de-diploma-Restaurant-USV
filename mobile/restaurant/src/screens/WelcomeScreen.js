import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import online_order2 from "../assets/online_order2.png";
import usvLogo from "../assets/usvLogo.png";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { colors, titles, btn1, hr80 } from "../globals/style";
const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bine ai venit la Restaurant USV</Text>
      <View style={styles.logoout}></View>
      <Image source={online_order2} style={styles.online_order2} />
      <View style={styles.row} />
      <View style={hr80} />
      <Text style={styles.text}> Comandă acum</Text>
      <View style={hr80} />
      <View style={styles.row} />

      <View style={styles.bnout}>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.btn}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.btn}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1134A6",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    color: colors.col1,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "200",
  },
  // logoout: {
  //   width: "80%",
  //   height: "50%",
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  // },
  online_order2: {
    width: 250,
    height: 250,
  },

  text: {
    fontSize: 18,
    width: "80%",
    color: colors.col1,
    textAlign: "center",
    fontWeight: "bold",
  },
  bnout: {
    flexDirection: "row",
  },
  btn: {
    fontSize: 20,
    color: "#1134A6",
    textAlign: "center",
    marginVertical: 30,
    marginHorizontal: 10,
    fontWeight: "700",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 10,
  },
});

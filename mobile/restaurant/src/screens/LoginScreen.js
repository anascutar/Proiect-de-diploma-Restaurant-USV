import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors, titles, btn1, hr80 } from "../globals/style";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Sign In</Text>
      <View style={styles.inputout}>
        <AntDesign
          name="user"
          size={24}
          color={emailfocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onFocus={() => {
            setEmailfocus(true);
            setPasswordfocus(false);
            setShowpassword(false);
          }}
        />
      </View>
      <View style={styles.inputout}>
        <MaterialCommunityIcons
          name="lock-outline"
          size={24}
          color={passwordfocus == true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Parolă"
          onFocus={() => {
            setEmailfocus(false);
            setPasswordfocus(true);
          }}
          secureTextEntry={showpassword === false ? true : false}
        />
        <Octicons
          name={showpassword == false ? "eye-closed" : "eye"}
          size={24}
          color="black"
          onPress={() => setShowpassword(!showpassword)}
        />
      </View>

      <TouchableOpacity
        style={btn1}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          style={{
            color: colors.col1,
            fontSize: titles.btntxt,
            fontWeight: "bold",
          }}
        >
          Sign in
        </Text>
      </TouchableOpacity>
      <Text style={styles.forgot}>Ai uitat parola?</Text>
      <Text style={styles.or}>SAU</Text>

      <View style={hr80}></View>
      <Text>
        Nu ai cont?
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate("Signup")}
        >
          {" "}
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  head1: {
    fontSize: 30,
    color: colors.text1,
    textAlign: "center",
    marginVertical: 10,
  },
  inputout: {
    flexDirection: "row",
    width: "80%",
    marginVertical: 10,
    backgroundColor: colors.col1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    //alignSelf: "center",
    elevation: 20,
  },
  input: {
    // fontsize: 18,
    marginLeft: 10,
    width: "80%",
  },
  forgot: {
    color: colors.text2,
    marginTop: 20,
    marginBottom: 10,
  },
  or: {
    color: colors.text1,
    marginVertical: 10,
    fontWeight: "bold",
  },
  signup: {
    color: colors.text1,
  },
});

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { colors, titles, btn1, hr80 } from "../globals/style";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

const SignupScreen = () => {
  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const [showcpassword, setcShowpassword] = useState(false);
  const [cpasswordfocus, setcPasswordfocus] = useState(false);
  const [numeFocus, setNumeFocus] = useState(false);
  const [prenumeFocus, setPrenumeFocus] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [userType, setUserType] = useState("");

  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const handleUserTypeChange = (itemValue) => {
    setUserType(itemValue);
  };
  const handleChange = (e) => {
    console.log(e.target);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Înregistrare</Text>

      {/* nume */}
      <View style={styles.inputout}>
        <AntDesign
          name="user"
          size={24}
          color={numeFocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Nume"
          // onChangeText={setNumeFocus}
          // string={numeFocus}
          onFocus={() => {
            setEmailfocus(false);
            setPasswordfocus(false);
            setcPasswordfocus(false);
            setShowpassword(false);
            setNumeFocus(true);
            setPrenumeFocus(false);
          }}
        />
      </View>
      {/* prenume */}
      {/* nume */}
      <View style={styles.inputout}>
        <AntDesign
          name="user"
          size={24}
          color={prenumeFocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Prenume"
          //onChangeText={setPrenumeFocus}
          // string={prenumeFocus}
          onFocus={() => {
            setEmailfocus(false);
            setPasswordfocus(false);
            setcPasswordfocus(false);
            setShowpassword(false);
            setNumeFocus(false);
            setPrenumeFocus(true);
          }}
        />
      </View>
      {/* email */}
      <View style={styles.inputout}>
        <MaterialIcons
          name="alternate-email"
          size={24}
          color={emailfocus === true ? colors.text1 : colors.text2}
        />
        {/* <AntDesign
          name="user"
          size={24}
          color={emailfocus === true ? colors.text1 : colors.text2}
        /> */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          // onChangeText={setEmailfocus}
          // string={emailfocus}
          onFocus={() => {
            setEmailfocus(true);
            setPasswordfocus(false);
            setcPasswordfocus(false);
            setShowpassword(false);
          }}
        />
      </View>

      {/* passowrd start */}
      <View style={styles.inputout}>
        <MaterialCommunityIcons
          name="lock-outline"
          size={24}
          color={passwordfocus == true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Parolă"
          // onChangeText={setPasswordfocus}//nu ca asta sterge textul scris
          onChangeText={(password) => setPassword(password)}
          // string={passwordfocus}
          onFocus={() => {
            setEmailfocus(false);
            setPasswordfocus(true);
            setcPasswordfocus(false);
            setNumeFocus(false);
            setPrenumeFocus(false);
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
      {/* passowrd end */}
      <View style={styles.inputout}>
        <MaterialCommunityIcons
          name="lock-outline"
          size={24}
          color={cpasswordfocus == true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmă parola"
          // onChangeText={setcPasswordfocus}
          // string={cpasswordfocus}
          onChangeText={(cpassword) => setcPassword(cpassword)}
          onFocus={() => {
            setEmailfocus(false);
            setcPasswordfocus(true);
            setPasswordfocus(false);
            setNumeFocus(false);
            setPrenumeFocus(false);
          }}
          secureTextEntry={showcpassword === false ? true : false}
        />
        <Octicons
          name={showcpassword == false ? "eye-closed" : "eye"}
          size={24}
          color="black"
          onPress={() => setcShowpassword(!showcpassword)}
        />
      </View>
      <View style={styles.inputout}>
        <Picker
          selectedValue={userType}
          style={styles.picker}
          onValueChange={handleUserTypeChange}
        >
          <Picker.Item label="Selectează tipul utilizatorului" value="" />
          <Picker.Item label="Student caminizat" value="student_caminizat" />
          <Picker.Item label="Student extern" value="student_extern" />
          <Picker.Item label="Profesor" value="profesor" />
        </Picker>
      </View>
      <TouchableOpacity
        style={btn1}
        //onPress={handleSignup}
        onPress={() => navigation.navigate("Login")}
      >
        <Text
          style={{
            color: colors.col1,
            fontSize: titles.btntxt,
            fontWeight: "bold",
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
      <Text style={styles.or}>sau</Text>

      <View style={hr80}></View>
      <Text>
        Ai deja cont?
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate("Login")}
        >
          {" "}
          Sign in
        </Text>
      </Text>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  picker: {
    width: "100%",
    height: 40,
    color: colors.text2,
  },
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
    fontsize: 18,
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

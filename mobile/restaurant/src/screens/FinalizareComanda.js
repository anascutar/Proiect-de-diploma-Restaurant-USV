import {
  Alert,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ListProductOrder from "../components/ListProductOrder";
import { useAppContext } from "../../App";
import { colors, titles, btn1, hr80 } from "../globals/style";

const FinalizareComanda = () => {
  const [oraLivrare, setOraLivrare] = useState(false);
  const [nrCard, setNrcard] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexView}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.imageButton}
              source={require("../assets/ic-back.png")}
            />
          </TouchableOpacity>
          <View style={styles.middle}>
            <Text style={styles.headerText}>Finalizeză comanda</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.imageButton}
              source={require("../assets/ic-close.png")}
            />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={styles.inputout}>
            <Text style={styles.title}>Ora la care vei lua comanda</Text>
            <TextInput
              style={styles.input}
              placeholder="exemplu: 12:30"
              onFocus={() => {
                setOraLivrare(true);
                setNrcard(false);
              }}
            />
          </View>
          <Text style={styles.title}>
            Numărul de pe cardul eliberat de Bibliotecă
          </Text>
          <TextInput
            style={styles.input}
            placeholder=""
            onFocus={() => {
              setOraLivrare(false);
              setNrcard(true);
            }}
          />
        </ScrollView>

        <View style={styles.line1} />
        <View style={{ paddingHorizontal: 16 }}>
          <View style={styles.row}></View>
          <TouchableOpacity
            style={styles.btnCheckout}
            onPress={() => {
              navigation.navigate("Home");
              Alert.alert(`Comandă plasată`);
            }}
          >
            <Text style={styles.txtCheckout}>Plasează comanda</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
        style={btn1}
        onPress={() => navigation.navigate("Home")}
      > */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FinalizareComanda;

const styles = StyleSheet.create({
  input: {
    // fontsize: 18,
    marginLeft: 10,
    width: "80%",
  },
  line1: {
    height: 14,
    backgroundColor: "#F8F8F8",
    width: "100%",
    marginBottom: 20,
  },

  btnCheckout: {
    backgroundColor: "#1134A6",
    padding: 14,
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  txtCheckout: {
    fontSize: 15,
    color: "#FFFFFF",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text1: {
    fontSize: 11,
    color: "#959595",
  },
  text2: {
    fontSize: 15,
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

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginBottom: 100,
    marginTop: 50,
  },

  flexView: {
    flex: 1,
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  imageButton: {
    width: 36,
    height: 36,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  middle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#121212",
    marginTop: 27,
  },

  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

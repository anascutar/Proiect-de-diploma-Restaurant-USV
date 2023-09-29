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

const sumTotal = (products) => {
  console.log(products);
  return products.reduce((sum, item) => {
    console.log("item: ", item);

    return sum + item.pret * parseFloat(item.quantity);
  }, 0);
};

const OrderScreen = () => {
  const navigation = useNavigation();
  const { products } = useAppContext();
  const totalPrice = (sumTotal(products) + 1.0).toFixed(2);
  console.log(products);
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
            <Text style={styles.headerText}>Coș</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.imageButton}
              source={require("../assets/ic-close.png")}
            />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>Comanda ta</Text>
          <ListProductOrder products={products} />
        </ScrollView>
        <View style={styles.line1} />
        <View style={{ paddingHorizontal: 16 }}>
          <View style={styles.row}>
            <Text style={styles.text1}>Cost caserole</Text>
            <Text style={styles.text1}>1 leu</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.row}>
            <Text style={styles.text2}>TOTAL</Text>
            <Text style={styles.text2}> {totalPrice} lei</Text>
          </View>
          <TouchableOpacity
            style={styles.btnCheckout}
            onPress={() => navigation.navigate("Final")}
          >
            <Text style={styles.txtCheckout}>Comandă</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
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

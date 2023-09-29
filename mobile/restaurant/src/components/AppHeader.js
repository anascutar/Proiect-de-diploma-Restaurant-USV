import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useAppContext } from "../../App";
import { FontAwesome } from "@expo/vector-icons";
const AppHeader = () => {
  const navigation = useNavigation();
  const { products } = useAppContext();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <FontAwesome name="user-circle-o" size={36} color="#1134A6" />
      </TouchableOpacity>

      {/* <Image source={require("../assets/avatar.png")} style={styles.avatar} /> */}
      <View style={styles.groupText}>
        <Text style={styles.nameDisplay}>
          <Text style={styles.bold}>Bună</Text>, <Text>Ana</Text>
        </Text>
        <Text style={styles.desc}>Ce mâncăm azi?</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Order")}>
        <Image source={require("../assets/ic-checkout2.png")} />
        {products.length > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{products.length}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  nameDisplay: {
    fontSize: 16,
  },
  bold: {
    fontWeight: "bold",
  },
  desc: {
    fontSize: 12,
    color: "#A1A1A1",
    marginTop: 4,
  },
  groupText: {
    flex: 1,
    marginLeft: 12,
    marginRight: 10,
  },
  container: {
    marginTop: 45,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  badge: {
    position: "absolute",
    backgroundColor: "red",
    aspectRatio: 1,
    width: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    right: -5,
    top: -5,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";

const ListCategory = ({ categories = [], onChange, currentType }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.item,
            currentType == category.id && { backgroundColor: "#1134A6" },
          ]}
          onPress={() => onChange(category.id)}
        >
          {/* <Image
            source={`http://localhost:19001/assetsTest/${category.image}`}
          /> */}
          <Text
            style={[
              styles.name,
              currentType == category.id && { color: "#FFFFFF" },
            ]}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ListCategory;

const styles = StyleSheet.create({
  name: {
    fontSize: 12,
    color: "#A1A1A1",
    marginLeft: 8,
  },
  item: {
    backgroundColor: "#F8F8F8",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 36,
    marginRight: 4,
  },
});

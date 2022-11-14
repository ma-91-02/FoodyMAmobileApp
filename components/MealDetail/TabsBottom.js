import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const TabsBottom = () => {
  return (
    <>
      <View style={styles.footer}>
        <Ionicons name="star" color="green" size={24} />
        <Ionicons name="home" color="green" size={24} />
        <Ionicons name="star" color="green" size={24} />
      </View>
    </>
  );
};

export default TabsBottom;

const styles = StyleSheet.create({
  footer: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    // borderColor:'red',
    // borderWidth:1,
    maxHeight:50
  },
});

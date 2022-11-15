import React from "react";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TabsBottom = ({ route, navigation,value }) => {
  const langId = route.params.languageId;
  const tableNumber = route.params.tableNumber;

  // to go Card screen
  const pressCardHandler = () => {
    navigation.navigate("CardScreen", {
      languageId: langId,
      tableNumber: tableNumber,
    });
  };

  return (
    <>
        <Pressable onPress={pressCardHandler}>
          <View style={styles.card}>
            <Ionicons
              style={styles.inCard}
              name="cart"
              color="green"
              size={40}
              />
              <Text style={styles.text}>{value}</Text>
          </View>
        </Pressable>
    </>
  );
};

export default TabsBottom;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "center",
    textAlign: "left",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "400",
    position:'absolute',
    top:20,
    left:25,
  },
  card: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    right: 16,
    bottom: 40,
    borderRadius: 30,
    zIndex: 999,
    elevation: 4,
    // backgroundColor: "#F4FFEB",
    shadowColor: "black",
    shadowOpacity: 0.45,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    overflow: Platform.os === "android" ? "hidden" : "visible",
    // textAlign:'center'
    padding: 8,
  },
  inCard: {
    shadowColor: "black",
    shadowOpacity: 0.45,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    overflow: Platform.os === "android" ? "hidden" : "visible",
  },
});

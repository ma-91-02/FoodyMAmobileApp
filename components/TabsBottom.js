import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const TabsBottom = ({ route, navigation }) => {
  const langId = route.params.languageId;
  const tableNumber = route.params.tableNumber;
  // to go user screen
  const pressUserHandler = () => {
    navigation.navigate("User");
  };

  // to go waiter screen
  const pressWaiterHandler = () => {
    navigation.navigate("WaiterScreen", {
      languageId: langId,
      tableNumber: tableNumber,
    });
  };

  // go to favorite screen
  const pressFavoritesHandler = () => {
    navigation.navigate("FavoritesScreen");
  };
  return (
    <>
      <View style={styles.footer}>
        <Pressable onPress={pressWaiterHandler}>
          <View style={styles.parent}>
            <Ionicons name="person-add" color="#F1A541" size={24} />
            <Text style={styles.text}>Waiter</Text>
          </View>
        </Pressable>
        <Pressable onPress={pressFavoritesHandler}>
          <View style={styles.parent}>
            <Ionicons name="star" color="#F1A541" size={24} />
            <Text style={styles.text}>Favorite</Text>
          </View>
        </Pressable>
        <Pressable onPress={pressFavoritesHandler}>
          <View style={styles.parent}>
            <Ionicons name="menu" color="#F1A541" size={24} />
            <Text style={styles.text}>Menu</Text>
          </View>
        </Pressable>
        <Pressable onPress={pressUserHandler}>
          <View style={styles.parent}>
            <Ionicons name="person" color="#F1A541" size={24} />
            <Text style={styles.text}>Profile</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default TabsBottom;

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    paddingBottom:15,
    paddingLeft:30,
    paddingRight:30,
    maxHeight: 60,
    backgroundColor:"#3A5F56"

  },
  parent: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",

    margin: 5
  },
  text: {
    color: "#F1A541",
    fontSize: 8,
    fontWeight: "400",
  },
});

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
            <Ionicons name="person-add" color="#128917" size={24} />
            <Text style={styles.text}>Waiter</Text>
          </View>
        </Pressable>
        <Pressable onPress={pressFavoritesHandler}>
          <View style={styles.parent}>
            <Ionicons name="star" color="#128917" size={24} />
            <Text style={styles.text}>Favorite</Text>
          </View>
        </Pressable>
        <Pressable onPress={pressUserHandler}>
          <View style={styles.parent}>
            <Ionicons name="person" color="#128917" size={24} />
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
    paddingTop: 10,
    paddingBottom:15,
    paddingLeft:30,
    paddingRight:30,
    maxHeight: 50,
  },
  parent: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  text: {
    color: "#128917",
    fontSize: 8,
    fontWeight: "400",
  },
});

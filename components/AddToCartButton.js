import React from "react";
import { View, StyleSheet, Text, Pressable, Platform } from "react-native";

const AddToCartButton = ({ onPress, Price, title }) => {
    return (
    <>
      <View style={styles.container}>
        <Pressable onPress={onPress} style={styles.btn}>
          <Text style={styles.text}>
            {title} 
            
            {Price}
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default AddToCartButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    bottom: 50,
    padding: 20,
    height: 80,
    width: "100%",
    backgroundColor: "rgba(210, 255, 175, 0.28)",
    // borderWidth:1,
  },

  containerBtnAdd: {
    backgroundColor: "rgba(210, 255, 175, 0.28)",
    // zIndex: 8,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    paddingBottom: 16,
  },
  btn: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // zIndex: 9,
    backgroundColor: "#fff",
    height: 40,
    width: "100%",
    justifyContent: "center",
  },
  text: {
    color: "#128917",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "600",
  },
});

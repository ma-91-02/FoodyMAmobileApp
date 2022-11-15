import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Ingredients = () => {
  const urlImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg";

  return (
    <View style={styles.listOuterContainer}>
      <View style={styles.listContainer}>
        <Text style={styles.mainTitle}>Ingredients</Text>
        <View style={styles.container}>
          <View style={styles.item}>
            <Image
              source={{ uri: urlImage }}
              height={66}
              style={styles.image}
            />
            <View style={styles.title}>
              <Text style={styles.title}>item 1</Text>
            </View>
          </View>

          <View style={styles.item}>
            <Image
              source={{ uri: urlImage }}
              height={66}
              style={styles.image}
            />
            <View style={styles.title}>
              <Text style={styles.title}>item 2</Text>
            </View>
          </View>

          <View style={styles.item}>
            <Image
              source={{ uri: urlImage }}
              height={66}
              style={styles.image}
            />
            <View style={styles.title}>
              <Text style={styles.title}>item 3</Text>
            </View>
          </View>

          <View style={styles.item}>
            <Image
              source={{ uri: urlImage }}
              height={66}
              style={styles.image}
            />
            <View style={styles.title}>
              <Text style={styles.title}>item 4</Text>
            </View>
          </View>

          <View style={styles.item}>
            <Image
              source={{ uri: urlImage }}
              height={66}
              style={styles.image}
            />
            <View style={styles.title}>
              <Text style={styles.title}>item 5</Text>
            </View>
          </View>

          <View style={styles.item}>
            <Image
              source={{ uri: urlImage }}
              height={66}
              style={styles.image}
            />
            <View style={styles.title}>
              <Text style={styles.title}>item 6</Text>
            </View>
          </View>

          <View style={styles.item}>
            <Image
              source={{ uri: urlImage }}
              height={66}
              style={styles.image}
            />
            <View style={styles.title}>
              <Text style={styles.title}>item 7</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Ingredients;

const styles = StyleSheet.create({
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "90%",
  },
  mainTitle:{
    color:'#128917',
    fontSize:16,
    lineHeight:24,
    fontWeight:'400'
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    // borderWidth:1
  },
  item: {
    flex: 1,
    flexDirection: "column",
    // borderWidth: 2,
    backgroundColor: "#F4FFEB",
    width: 66,
    minWidth: 90,
    maxWidth: 100,
    height: 120,
    borderRadius: 10,
    marginTop: 20,
    // marginLeft: 16,
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    // flex: 1,
    width: "100%",
    margin: 0,
    height: 90,
  },
  title: {
    // flex:1,
    color: "#128917",
    textAlign: "center",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 10,
    paddingTop: 5,
  },
});

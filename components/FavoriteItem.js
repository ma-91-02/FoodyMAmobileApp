import {
    View,
    Text,
    Pressable,
    Image,
    StyleSheet,
    Platform,
  } from "react-native";
  
  import { useNavigation } from "@react-navigation/native";
  import MealDetails from "./MealDetails";
  
  function FavoriteItem({
    id,
    langId,
    title,
    imageUrl,
    duration,
    ingredients,
    price,
    tableNumber,
  }) {
    const navigation = useNavigation();
  
    function selectMealItemHandler() {
      navigation.navigate("MealDetail", {
        mealId: id,
        languageId: langId,
        tableNumber: tableNumber,
      });
    }
    return (
      <>
        <View style={styles.mealItem}>
          <Pressable
            android_ripple={{ color: "#ccc" }}
            style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
            onPress={selectMealItemHandler}
          >
            <View style={styles.innerContainer}>
              <View style={styles.block1}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
              </View>
              <View style={styles.block2}>
                <Text style={styles.title}>{title}</Text>
                {/* <Text>{ingredients}</Text> */}
                <MealDetails
                  duration={duration}
                  price={price}
                  ingredients={ingredients}
                />
              </View>
            </View>
          </Pressable>
        </View>
      </>
    );
  }
  
  export default FavoriteItem;
  
  const styles = StyleSheet.create({
    mealItem: {
      margin: 8,
      // borderRadius: 8,
      overflow: Platform.OS === "android" ? "hidden" : "visible",
      backgroundColor: "#F4FFEB",
      // elevation: 4,
      // shadowColor: "black",
      // shadowOpacity: 0.25,
      // shadowOffset: { width: 0, height: 2 },
      // shadowRadius: 8,
    },
    buttonPressed: {
      opacity: 0.5,
    },
    innerContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      overflow: "hidden",
      height: 140,
      borderBottomLeftRadius: 20,
      borderTopLeftRadius: 20,
    },
    block1: {
      flex: 1,
      // flexDirection:'row',
      // width: '50%',
    },
    block2: {
      flex: 1,
    },
    image: {
      width: "100%",
      height: 140,
    },
    title: {
      flex: 1,
      color: "#128917",
      fontWeight: "500",
      textAlign: "center",
      fontSize: 16,
      margin: 16,
    },
  });
  
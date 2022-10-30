import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetailScreen({ route, navigation }) {
  // resive data
  const langId = route.params.languageId;
  const mealId = route.params.mealId;
  // to select meal
  const data = MEALS.find((meal) => meal.id === mealId && meal.lang === langId);
  // start main function
  return (
    <>
      <ScrollView style={styles.rootContainer}>
        <Image source={{ uri: data.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{data.title}</Text>
        <MealDetails
          duration={data.duration}
          affordability={data.affordability}
          complexity={data.complexity}
          textStyle={styles.detailText}
        />
        <Button title="add"/>
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={data.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={data.steps} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
    color: '#128917',
  },
  detailText: {
    color: "#128917",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    
    width: "80%",
  },
});

import { View, Text, FlatList, StyleSheet } from "react-native";
import { useLayoutEffect, useEffect, useState } from "react";
import { fetchCategory, fetchMeal } from "../util/http";

import MealItem from "../components/MealItem";
import TabsBottom from "../components/TabsBottom";
import CardButton from "../components/CardButton";
// import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const [fetchedCategory, setFechedCategory] = useState([]);
  const [fetchedMeal, setFechedMeal] = useState([]);
  const langId = route.params.languageId;
  const catId = route.params.categoryId;
  const tableNumber = route.params.tableNumber;


  // fetch category
  useEffect(() => {
    async function getCategory() {
      const category = await fetchCategory();
      setFechedCategory(category);
    }
    getCategory();
  }, []);
  // fetch meal
  useEffect(() => {
    async function getMeal() {
      const meal = await fetchMeal();
      setFechedMeal(meal);
    }
    getMeal();
  }, []);
  if (fetchedCategory.length > 0) {
    // to find title of screen
    const categoryTitle = fetchedCategory.find(
      (category) => category.id === catId && category.language === langId
    );
    // to set title of secreen
    navigation.setOptions({ title: categoryTitle.title });
  }
  // all meals to show in this screen
  let data;
  if (fetchedMeal.length > 0) {
    // filter with category
    const meal = fetchedMeal.filter((mealItem) => {
      return mealItem.categoryIds.indexOf(catId) >= 0;
    });
    // filter with languge
    data = meal.filter((mealIteml) => {
      return mealIteml.language.indexOf(langId) >= 0;
    });
  }

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItem = {
      id: item.id,
      langId: item.language,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      price: item.price,
      ingredients: item.ingredients,
      tableNumber: tableNumber,
    };
    return <MealItem {...mealItem} />;
  }
  return (
    <>
      <View style={styles.contianer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
          // numColumns={2}
        />
      </View>
      <CardButton navigation={navigation} route={route} />
      <TabsBottom navigation={navigation} route={route} />
    </>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

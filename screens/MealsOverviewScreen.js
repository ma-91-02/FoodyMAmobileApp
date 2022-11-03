import { View, Text, FlatList, StyleSheet } from "react-native";
import { useLayoutEffect, useEffect, useState } from "react";
import { fetchCategory, fetchMeal } from "../util/http";

import MealItem from "../components/MealItem";
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
      tableNumber: tableNumber,
    };
    return <MealItem {...mealItem} />;
  }
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

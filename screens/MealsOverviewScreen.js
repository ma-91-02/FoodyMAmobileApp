import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const langId = route.params.languageId;
  const catId = route.params.categoryId;
  const tableNumber = route.params.tableNumber;

  // filter with category
  const meal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  // filter with languge
  const data = meal.filter((mealIteml) => {
    return mealIteml.lang.indexOf(langId) >= 0;
  });
  // to find title of screen
  const categoryTitle = CATEGORIES.find(
    (category) => category.id === catId && category.lang === langId
  );
  // to set title of secreen
  navigation.setOptions({ title: categoryTitle.title });
  function renderMealItem(itemData) {
    console.log(tableNumber + " from MealsOvervies");
    const item = itemData.item;
    const mealItem = {
      id: item.id,
      langId: item.lang,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
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

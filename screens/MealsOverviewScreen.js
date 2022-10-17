import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const langId = route.params.languageId;
  const catId = route.params.categoryId;

  // filter with category
  const meal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  // filter with languge
  const data = meal.filter((mealIteml) => {
    return mealIteml.lang.indexOf(langId) >= 0;
  });

 
  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
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

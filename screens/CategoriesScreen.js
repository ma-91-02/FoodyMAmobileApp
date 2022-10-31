import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ route, navigation }) {
  const langId = route.params.languageId;
  const tableNumber = route.params.tableNumber;
  const displayedCaregories = CATEGORIES.filter((categoryItem) => {
    return categoryItem.lang.indexOf(langId) >= 0;
  });

  // to set title of secreen
  useLayoutEffect(() => {
    // to find title of screen
    const categoryTitle = CATEGORIES.find(
      (category) => category.lang === langId
    );
    navigation.setOptions({ title: categoryTitle.pageTitle });
  }, [langId, navigation]);

  // to render Category item
  function renderCategoryItem(itemData) {
    console.log(tableNumber + " from categories");
    function pressHandler() {
      navigation.navigate("MealsOverviewScreen", {
        languageId: langId,
        categoryId: itemData.item.id,
        tableNumber: tableNumber || 0,
      });
    }
    return (
      <CategoryGridTitle title={itemData.item.title} onPress={pressHandler} />
    );
  }

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={displayedCaregories}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          numColumns={2}
        />
      </View>
    </>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

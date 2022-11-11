import { useLayoutEffect, useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { fetchCategory, fetchCategoryContent } from "../util/http";

function CategoriesScreen({ route, navigation }) {
  const [fetchedCategory, setFechedCategory] = useState([]);
  const [fetchedCategoryContent, setFechedCategoryContent] = useState([]);
  const langId = route.params.languageId;
  const tableNumber = route.params.tableNumber;

  // fetch Category content
  useEffect(() => {
    async function getCategoryContent() {
      const categoryContent = await fetchCategoryContent();
      setFechedCategoryContent(categoryContent);
    }
    getCategoryContent();
  }, []);

  // fetch category
  useEffect(() => {
    async function getCategory() {
      const category = await fetchCategory();
      setFechedCategory(category);
    }
    getCategory();
  }, []);

  const displayedCaregories = fetchedCategory.filter((categoryItem) => {
    return categoryItem.language.indexOf(langId) >= 0;
  });
  if (fetchedCategoryContent.length > 0) {
    // to find title of screen
    const categoryTitle = fetchedCategoryContent.find(
      (category) => category.language === langId
    );
    // navigation.setOptions({ title: categoryTitle.pageTitle });
    navigation.setOptions({ title: '' });
  } else {
  }

  // to render Category item
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverviewScreen", {
        languageId: langId,
        categoryId: itemData.item.id ,
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
    backgroundColor: "#fff",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

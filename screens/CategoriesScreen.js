import { View, FlatList, StyleSheet } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ route, navigation }) {
  const langId = route.params.languageId;
  const displayedCaregories = CATEGORIES.filter((categoryItem) => {
    return categoryItem.lang.indexOf(langId) >= 0;
  });

  function renderCategoryItem(itemData) {
    function pressHandler() {
        navigation.navigate("MealsOverviewScreen", {
          languageId: langId,
          categoryId: itemData.item.id,
        });
      }
    return <CategoryGridTitle title={itemData.item.title} onPress={pressHandler} /> ;
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



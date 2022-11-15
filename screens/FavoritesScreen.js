import { Text, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMeal, fetchCard } from "../util/http";
import FavoriteItem from "../components/FavoriteItem";
function FavoritesScreen() {
  const [fetchedMeal, setFechedMeal] = useState([]);
  // fetch meal
  useEffect(() => {
    async function getMeal() {
      const meal = await fetchMeal();
      setFechedMeal(meal);
    }
    getMeal();
  }, []);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = fetchedMeal.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return <Text>You have no favorite meals yet.</Text>;
  }
  function renderFavoriteItem(itemData) {
    const item = itemData.item;
    const mealItem = {
      id: item.id,
      langId: item.language,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      price: item.price,
      ingredients: item.ingredients,
      // tableNumber: tableNumber,
    };
    return <FavoriteItem {...mealItem} />;
  }
  return (
    <>
      <FlatList
        data={favoriteMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderFavoriteItem}
      />
    </>
  );
}
export default FavoritesScreen;

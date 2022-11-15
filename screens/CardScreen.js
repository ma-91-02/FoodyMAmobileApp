import { Text, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMeal } from "../util/http";
import CardItem from "../components/CardItem";
function CardScreen({ route, navigation }) {
  const [fetchedMeal, setFechedMeal] = useState([]);
  // fetch meal
  useEffect(() => {
    async function getMeal() {
      const meal = await fetchMeal();
      setFechedMeal(meal);
    }
    getMeal();
  }, []);
  const cardMealIds = useSelector((state) => state.cardMeals.ids);
  const cardMeals = fetchedMeal.filter((meal) => cardMealIds.includes(meal.id));
  console.log(cardMeals);
  if (cardMeals.length === 0) {
    return <Text>You have no card meals yet.</Text>;
  }

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItem = {
      id: item.id,
      langId: item.language,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      price: item.price,
      ingredients: item.ingredients,
    };
    return <CardItem {...mealItem} />;
  };
  return (
    <>
      <FlatList
        data={cardMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </>
  );
}

export default CardScreen;

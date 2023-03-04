import { Text, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMeal, postMealCard } from "../util/http";
import CardItem from "../components/CardItem";
import { cartActions } from "../store/redux/card-slice";
function CardScreen({ route, navigation }) {
  const tableNumber = route.params.tableNumber;
  console.log(tableNumber);
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
  const cartItems = useSelector((state) => state.cart.items);
  console.log('======= redux =======');
  console.log(cartItems);
  const cardMeals = fetchedMeal.filter((meal) => cardMealIds.includes(meal.id));

  if (cartItems.length === 0) {
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
  const pressOrderHandler = () => {
    const dataPost = {
      _id: "636571cfe6613748943b0747",
      tableNumber: tableNumber,
      mealId: cardMeals.map((p) => p.id),
      constant: cardMeals.map((p) => p.title),
    };
    console.log(dataPost.mealId);
    postMealCard(dataPost);
  };

  return (
    <>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
      <Button title="order" onPress={pressOrderHandler} />
    </>
  );
}

export default CardScreen;

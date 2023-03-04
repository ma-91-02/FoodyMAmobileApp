import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useLayoutEffect, useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { qContext } from "../store/card-context";
import TabsBottom from "../components/TabsBottom";
import CardButton from "../components/CardButton";
import Ingredients from "../components/Ingredients";
import {
  postMealCard,
  fetchMeal,
  postDeleteMealCard,
  fetchCard,
} from "../util/http";
// import { MEALS } from "../data/dummy-data";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import UserScreen from "./UserScreen";
import AddToCartButton from "../components/AddToCartButton";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
import { addCard, removeCard, cartActions } from "../store/redux/card-slice";

function MealDetailScreen({ route, navigation }) {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const cardMealIds = useSelector((state) => state.cardMeals.ids);
  const dispatch = useDispatch();

  const [fetchedMeal, setFechedMeal] = useState([]);
  const [fetchedCard, setFechedCard] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const q = useContext(qContext);
  // resive data
  const langId = route.params.languageId;
  const mealId = route.params.mealId;
  const tableNumber = route.params.tableNumber;
  // console.log(tableNumber+ "=======");
  // fetch meal
  useEffect(() => {
    async function getMeal() {
      const meal = await fetchMeal();
      setFechedMeal(meal);
    }
    getMeal();
  }, []);
  // fetch card
  useEffect(() => {
    async function getCard() {
      const card = await fetchCard();
      setFechedCard(card);
    }
    getCard();
  }, [pressAddMealCardHandler]);

  // console.log(fetchedCard );
  // to select meal
  let data = "empty";
  if (fetchedMeal.length > 0) {
    data = fetchedMeal.find(
      (meal) => meal.id === mealId && meal.language === langId
    );
  }

  // to select meal
  let dataCard = "empty";
  let mealIsFavorite;
  let mealsIsCard;
  if (fetchedCard.length > 0) {
    dataCard = fetchedCard.find((card) => card.id === mealId);
    mealIsFavorite = favoriteMealIds.includes(mealId);
    mealsIsCard = cardMealIds.includes(mealId);

    // to set title of secreen
    navigation.setOptions({ title: "" });
  }

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }

  //////// add to cart using redux

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: mealId,
        title: data.title,
        price: data.price,
        imageUrl:data.imageUrl,
      })
    );
  };

  function changeCardHandler() {
    if (mealsIsCard) {
      dispatch(removeCard({ id: mealId }));
    } else {
      dispatch(addCard({ id: mealId }));
    }
  }
  // Start function post to db
  function pressAddMealCardHandler() {
    const dataPost = {
      _id: "636571cfe6613748943b0747",
      tableNumber: tableNumber,
      MealTitle: data.title,
      MealCount: 1,
      simpleLang: langId,
      mealId: mealId,
    };
    postMealCard(dataPost);
    setQuantity(dataCard.quantity);
    console.log(dataCard);
  }
  function pressDeleteMealCardHandler() {
    const dataPost = {
      // _id:'636571cfe6613748943b0747',
      // tableNumber: tableNumber,
      // MealTitle: data.title,
      // MealCount: 1,
      // simpleLang: langId,
      mealId: mealId,
    };
    postDeleteMealCard(dataPost);
    setQuantity(0);
  }

  // const headerButtonPressHandler = () => {};
  if (data !== "empty") {
    // start main function
    return (
      <>
        <View style={styles.imageContainer}>
          <Image source={{ uri: data.imageUrl }} style={styles.image} />
        </View>
        <View style={styles.container}>
          <ScrollView style={styles.rootContainer}>
            <Text style={styles.title}>{data.title}</Text>
            <Button
              title={
                mealIsFavorite ? "Remove From Favorite" : "Add To Favorite"
              }
              onPress={changeFavoriteStatusHandler}
              color="green"
            />
            <Button title="+" onPress={addToCartHandler} />
            <Ingredients />
          </ScrollView>
        </View>
        <AddToCartButton
          title={mealsIsCard ? "Remove From Cart " : "Add To Cart "}
          onPress={changeCardHandler}
          Price={data.price}
        />
        <CardButton
          navigation={navigation}
          route={route}
          value={cartQuantity}
          tableNumber={tableNumber}
        />
        <TabsBottom navigation={navigation} route={route} />
      </>
    );
  }
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    zIndex: 2,
    // height:185
  },
  image: {
    position: "absolute",
    top: 16,
    left: "5%",
    width: "90%",
    height: 185,
    zIndex: 4,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#fff",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  rootContainer: {
    // marginBottom: 32,
    // backgroundColor:'#fff',
    paddingTop: 155,
    height: "100%",
  },
  title: {
    fontWeight: "500",
    textAlign: "center",
    fontSize: 24,
    marginTop: 8,
    color: "#128917",
  },
  detailText: {
    color: "#128917",
  },
});

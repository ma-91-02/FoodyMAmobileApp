import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useLayoutEffect, useEffect, useState, useContext } from "react";
import { qContext } from "../store/card-context";

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

function MealDetailScreen({ route, navigation }) {
  const [fetchedMeal, setFechedMeal] = useState([]);
  const [fetchedCard, setFechedCard] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const q = useContext(qContext);
  // resive data
  const langId = route.params.languageId;
  const mealId = route.params.mealId;
  const tableNumber = route.params.tableNumber;
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
  }, []);
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
  if (fetchedCard.length > 0) {
    dataCard = fetchedCard.find((card) => card.id === mealId);
  }

  // Start function post to db
  function pressAddMealCardHandler() {
    const dataPost = {
      // _id:'636571cfe6613748943b0747',
      // tableNumber: tableNumber,
      // MealTitle: data.title,
      // MealCount: 1,
      // simpleLang: langId,
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
  // function pressMealCardHandler() {
  //   navigation.navigate("CardScreen", {
  //     tableNumber: tableNumber,
  //     MealTitle: data.title,
  //     MealCount: 1,
  //     simpleLang: langId,
  //     MealId: mealId,
  //   });
  // }

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
            <MealDetails
              duration={data.duration}
              price={data.price}
              textStyle={styles.detailText}
            />
            <Button title="+" onPress={pressAddMealCardHandler} />
            <Text>{quantity}</Text>
            <Button title="-" onPress={pressDeleteMealCardHandler} />
            <View style={styles.listOuterContainer}>
              <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <Text>{data.ingredients}</Text>
                {/* <List data={data.ingredients} /> */}
                <Subtitle>Steps</Subtitle>
                {/* <List data={data.steps} /> */}
              </View>
            </View>
          </ScrollView>
          <View style={styles.mainCon}>
            <View style={styles.card}>
              <TouchableOpacity>
                <Text>Card</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerBtnAdd}>
              <View style={styles.btn}>
                <Button
                  title={`Add to cart for ${data.price}`}
                  color="#128917"
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Button title="btn" />
          <Button title="btn" />
          <Button title="btn" />
        </View>
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
    zIndex: 3,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    // padding: 16,
    marginTop: 60,
    backgroundColor: "#fff",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  rootContainer: {
    // marginBottom: 32,
    paddingTop: 155,
    height: "100%",
  },
  title: {
    fontWeight: "500",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
    color: "#128917",
  },
  detailText: {
    color: "#128917",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "90%",
  },
  mainCon: {
    paddingTop: 20,
  },
  card: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "green",
    right: 16,
    top: 0,
    borderRadius: 25,
    zIndex: 6,
    elevation: 4,
    // backgroundColor: "#F4FFEB",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    overflow: Platform.os === "android" ? "hidden" : "visible",
    // textAlign:'center'
    padding:8,
  },
  containerBtnAdd: {
    backgroundColor: "rgba(210, 255, 175, 0.2)",
    zIndex: 0,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    paddingBottom:16,
  },
  btn: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 5,
    backgroundColor: "#fff",
    // height:20,
    width: "90%",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor:'#D2FFAF',
    padding: 20,
    // overflow: Platform.os === "android" ? "hidden" : "visible",
  },
});

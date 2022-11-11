import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { postWaiter, fetchSelectService, postUser } from "../util/http";

function SelectServicesScreen({ route, navigation }) {
  const [fetchedSelectService, setFechedSelectService] = useState([]);
  const langId = route.params.languageId;
  const tableNumber = route.params.tableNumber;
  const userName = route.params.userName;

  useEffect(() => {
    async function getSelectSrvice() {
      const selectService = await fetchSelectService();
      setFechedSelectService(selectService);
    }
    getSelectSrvice();
  }, []);

  // filter language
  const displayedSelectService = fetchedSelectService.filter(
    (selectServiceItem) => {
      return selectServiceItem.language.indexOf(langId) >= 0;
    }
  );

  let data = "empty";
  displayedSelectService.forEach((element) => {
    data = element;
  });
  // to set title of secreen
  if (data !== "empty") {
    navigation.setOptions({ title: "" });
  }

  ///
  /// function go to page Categores Screen
  ///
  function pressByAppHandler() {
    navigation.navigate("Categores", {
      languageId: langId,
      tableNumber: tableNumber,
    });
    const dataPost = {
      language: langId,
      tableNumber: tableNumber,
      userName: userName,
    };
    postUser(dataPost);
    console.log(dataPost);
  }

  // Start function post to db
  // function pressMealCardHandler() {
  //   const dataPost = {
  //     tableNumber: tableNumber,
  //     MealTitle: data.title,
  //     MealCount: 1,
  //     simpleLang: langId,
  //     MealId: mealId,
  //   };
  //   postMealCard(dataPost);
  //   console.log(dataPost);
  // }
  ///
  /// function go to page Waiter Screen
  ///
  function pressByWaiterHandler() {
    navigation.navigate("WaiterScreen", {
      languageId: langId,
      tableNumber: tableNumber,
    });
    const data = {
      tableNumber: tableNumber,
      textMessage: "Please go to the table",
    };

    postWaiter(data);
  }
  if (data !== "empty") {
    return (
      <>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{data.pageContent}</Text>
        </View>
        <View style={styles.container}>
          {/* start block one */}
          <View style={styles.block1}>
            <View style={styles.blockContainer}>
              <TouchableOpacity>
                <View>
                  <Text
                    style={{
                      color: "#128917",
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    {data.buttonByApp}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.blockContainer}>
              <TouchableOpacity>
                <View>
                  <Text
                    style={{
                      color: "#128917",
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    {data.buttonByWaiter}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* start block tow */}
          <View style={styles.block2}>
            <LinearGradient
              colors={["#EAF942", "#D2FFAF"]}
              style={styles.btnContainer}
            >
              <TouchableOpacity onPress={pressByAppHandler}>
                <View>
                  <Text
                    style={{
                      color: "#128917",
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    {data.buttonByApp}
                  </Text>
                </View>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={["#EAF942", "#FDFFA5"]}
              style={styles.btnContainer}
            >
              <TouchableOpacity onPress={pressByWaiterHandler}>
                <View>
                  <Text
                    style={{
                      color: "#128917",
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    {data.buttonByWaiter}
                  </Text>
                </View>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </>
    );
  }
}

export default SelectServicesScreen;
function pressHandler() {
  navigation.navigate("SelectServices", {
    languageId: langId,
    tableNumber: 3,
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // margin: 16,
    height: "100%",
    textAlign: "center",
    borderTopLeftRadius: 50,
  },

  textContainer: {
    // height: 160,
    alignItems: "center",
    padding: 0,
  },
  text: {
    color: "#128917",
    fontSize: 24,
    fontWeight: "600",
    margin: 16,
    padding: 0,
  },
  block1: {
    flex: 1,
    flexDirection: "row",
  },
  blockContainer: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "40%",
    height: 136,
    marginTop: 60,
    marginLeft: 10,
    marginRight: 10,
    // marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#D2FFAF",
    elevation: 4,
    backgroundColor: "#fff",
    shadowOpacity: 0.85,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    overflow: Platform.os === "android" ? "hidden" : "visible",
  },
  block2: {
    flex: 1,
    alignItems: "center",
    // justifyContent:'center',
    // flexDirection:'column'
    width: "100%",
  },
  btnContainer: {
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    width: "80%",
    height: 56,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

import { Text, View, Button, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { postWaiter, fetchSelectService } from "../util/http";

function SelectServicesScreen({ route, navigation }) {
  const [fetchedSelectService, setFechedSelectService] = useState([]);
  const langId = route.params.languageId;
  const tableNumber = route.params.tableNumber;

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
    navigation.setOptions({ title: data.pageTitle });
  }

  ///
  /// function go to page Categores Screen
  ///
  function pressByAppHandler() {
    navigation.navigate("Categores", {
      languageId: langId,
      tableNumber: tableNumber,
    });
  }
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
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{data.pageContent}</Text>
          </View>
          <View style={styles.btnContainer}>
            <Button title={data.buttonByApp} onPress={pressByAppHandler} />
          </View>
          <View style={styles.btnContainer}>
            <Button
              title={data.buttonByWaiter}
              onPress={pressByWaiterHandler}
            />
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
    alignItems: "center",
    margin: 16,
  },
  textContainer: {
    height: 160,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
  btnContainer: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 8,
    width: "80%",
    margin: 20,
  },
});

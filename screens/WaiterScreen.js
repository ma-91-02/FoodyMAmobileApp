import { View, Text, Button, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { fetchWaiterPage } from "../util/http";

function WaiterScreen({ route, navigation }) {
  const [fetchedWaiter, setFechedWaiter] = useState([]);
  const langId = route.params.languageId;
  const tableNumber = route.params.tableNumber;

  // fetch data from api
  useEffect(() => {
    async function getWaiter() {
      const WaiterPage = await fetchWaiterPage();
      setFechedWaiter(WaiterPage);
    }
    getWaiter();
  }, []);
  
  // filter language
  const displayedWaiters = fetchedWaiter.filter((WaitersItem) => {
    return WaitersItem.language.indexOf(langId) >= 0;
  });
  let data = "empty";
  displayedWaiters.forEach((element) => {
    data = element;
  });

  // const menuButton = data.menu;
  function pressHandler() {
    navigation.navigate("Categores", {
      languageId: langId,
      tableNumber: tableNumber,
    });
  }

  
  if (data !== "empty") {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{data.pageContent}</Text>
          </View>
          <View style={styles.btnContainer}>
            <Button title={data.buttonMenu} onPress={pressHandler} />
          </View>
        </View>
      </>
    );
  } else{
    return (
      <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>This page is not supported with this language </Text>
        </View>
      </View>
    </>
    );
  }
}

export default WaiterScreen;

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

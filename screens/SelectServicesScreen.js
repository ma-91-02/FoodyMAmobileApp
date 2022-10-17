import { Text, View, Button, StyleSheet } from "react-native";
import { selectServices } from "../data/dummy-data";

function SelectServicesScreen({ route, navigation }) {
  const langId = route.params.languageId;
  const tableNumber = route.params.tableNumber;

  const displayedselectServices = selectServices.filter(
    (selectServicesItem) => {
      return selectServicesItem.lang.indexOf(langId) >= 0;
    }
  );
  let data;
  displayedselectServices.forEach((element) => {
    data = element;
  });
  const byAppButton = data.byApp;
  const byWaiterButton = data.byWaiter;

  function pressByAppHandler() {
    navigation.navigate("Categores", {
      languageId: langId,
      tableNumber: 3,
    });
  }
  function pressByWaiterHandler() {
    navigation.navigate("WaiterScreen", {
      languageId: langId,
      tableNumber: 3,
    });
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{data.message}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button title={byAppButton} onPress={pressByAppHandler} />
        </View>
        <View style={styles.btnContainer}>
          <Button title={byWaiterButton} onPress={pressByWaiterHandler} />
        </View>
      </View>
    </>
  );
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

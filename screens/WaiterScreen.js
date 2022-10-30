import { View, Text, Button, StyleSheet } from "react-native";
import { Waiters } from "../data/dummy-data";

function WaiterScreen({ route, navigation }) {
  const langId = route.params.languageId;
  const tableNumber = route.params.tableNumber;
  const displayedWaiters = Waiters.filter((WaitersItem) => {
    return WaitersItem.lang.indexOf(langId) >= 0;
  });
  let data;
  displayedWaiters.forEach((element) => {
    data = element;
  });
  const menuButton = data.menu;
  function pressHandler() {
    navigation.navigate("Categores", {
      languageId: langId,
      tableNumber: tableNumber,
    });
  }

  console.log(tableNumber);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{data.message}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button title={menuButton} onPress={pressHandler} />
        </View>
      </View>
    </>
  );
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

import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { SelectTables } from "../data/dummy-data";

function SelectTableScreen({ route, navigation }) {
  const langId = route.params.languageId;

  // filter language
  const displayedSelectTables = SelectTables.filter((selectTableItem) => {
    return selectTableItem.lang.indexOf(langId) >= 0;
  });
  // change arry to object
  let data;
  displayedSelectTables.forEach((element) => {
    data = element;
  });
  // to set title of secreen
  navigation.setOptions({ title: data.pageTitle });
  // to go another screen
  function pressHandler() {
    navigation.navigate("SelectServices", {
      languageId: langId,
      tableNumber: 3,
    });
  }
  const titleButton = data.button;
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{data.title}</Text>
        </View>
        <View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.btnContainer}>
          <Button title={titleButton} onPress={pressHandler} />
        </View>
      </View>
    </>
  );
}

export default SelectTableScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 16,
  },
  textContainer: {
    flex: 1,
    height: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
  textInput: {
    borderColor: "green",
    borderWidth: 1,
    width: 100,
    height: 50,
    margin: 20,
    padding: 10,
  },
  btnContainer: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 8,
    width: "80%",
    margin: 20,
  },
});

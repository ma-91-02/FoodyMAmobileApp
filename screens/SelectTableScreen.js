import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { fetchSelectTable } from "../util/http";
function SelectTableScreen({ route, navigation }) {
  const [fetchedSelectTable, setFechedSelectTable] = useState([]);
  useEffect(() => {
    async function getExpenses() {
      const selectTable = await fetchSelectTable();
      setFechedSelectTable(selectTable);
    }
    getExpenses();
  }, []);

  const langId = route.params.languageId;
  // filter language
  const displayedSelectTables = fetchedSelectTable.filter((selectTableItem) => {
    return selectTableItem.simpleLang.indexOf(langId) >= 0;
  });

  let data = "empty";

  displayedSelectTables.forEach((element) => {
    data = element;
  });

  let titleButton ='next';
  let pageContent='Select your table';
  if (data !== "empty") {
    // setPageTitle(data.pageTitle);
    navigation.setOptions({ title: data.pageTitle });
    titleButton=data.buttonContent;
    pageContent=data.pageContent;
  } else {
    // setPageTitle(data.pageTitle);
    navigation.setOptions({ title: "Select Table" });
    // const titleButton = "buttonContent";
  }
  console.log(data);
  // setPageTitle(data.pageTitle);
  // navigation.setOptions({ title: data.pageTitle });
  // change arry to object

  // to set title of secreen
  // navigation.setOptions({ title: data.pageTitle });

  // to go another screen
  function pressHandler() {
    navigation.navigate("SelectServices", {
      languageId: langId,
      tableNumber: 3,
    });
  }
  return (
    <>
      <View style={styles.container}>
        <View><Text style={styles.text}>{pageContent}</Text></View> 

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

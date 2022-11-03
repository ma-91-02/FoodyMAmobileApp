import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { fetchSelectTable } from "../util/http";

function SelectTableScreen({ route, navigation }) {
  const [fetchedSelectTable, setFechedSelectTable] = useState([]);
  const [text, onChangeText] = useState(0);
  const [messageErr, setMessageErr] = useState("");
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
    return selectTableItem.language.indexOf(langId) >= 0;
  });

  let data = "empty";
  let titleButton = "next";
  let pageContent = "Select your table";

  displayedSelectTables.forEach((element) => {
    data = element;
  });

  if (data !== "empty") {
    // setPageTitle(data.pageTitle);
    navigation.setOptions({ title: data.pageTitle });
    titleButton = data.buttonContent;
    pageContent = data.pageContent;
  } else {
    navigation.setOptions({ title: "Select Table" });
  }

  // to go another screen
  function pressHandler() {
    if (Number(text) === 0) {
      setMessageErr("number table can't empty");
      console.log(messageErr);
    }
    if (Number(text) !== 0 && text !== "" && typeof text !== "String") {
      navigation.navigate("SelectServices", {
        languageId: langId,
        tableNumber: Number(text),
      });
      console.log(text);
    }
  }

  if (data !== "empty") {
    return (
      <>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>{pageContent}</Text>
            <Text style={styles.text}>{messageErr}</Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder={pageContent}
              value={text}
              onChangeText={onChangeText}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button title={titleButton} onPress={pressHandler} />
          </View>
        </View>
      </>
    );
  } else if (data === "empty") {
    return (
      <>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>This language is not supported</Text>
          </View>
        </View>
      </>
    );
  }
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
    width: "100%",
    minWidth: 120,
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
  status: {
    padding: 10,
    textAlign: "center",
  },
});

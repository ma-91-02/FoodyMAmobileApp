import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Keyboard,
} from "react-native";
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

  // set keyboard

  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
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

  let titleButton = "next";
  let pageContent = "Select your table";
  if (data !== "empty") {
    // setPageTitle(data.pageTitle);
    navigation.setOptions({ title: data.pageTitle });
    titleButton = data.buttonContent;
    pageContent = data.pageContent;
  } else {
    // setPageTitle(data.pageTitle);
    navigation.setOptions({ title: "Select Table" });
    // const titleButton = "buttonContent";
  }
  // console.log(data);
  // setPageTitle(data.pageTitle);
  // navigation.setOptions({ title: data.pageTitle });
  // change arry to object

  // to set title of secreen
  // navigation.setOptions({ title: data.pageTitle });

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
  console.log(messageErr + " out fu");

  // set keypord

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{pageContent}</Text>
          <Text style={styles.text}>{messageErr}</Text>
        </View>

        <View>
          <TextInput
            KeyboardType="numeric"
            style={styles.textInput}
            placeholder={pageContent}
            value={text}
            onChangeText={onChangeText}
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button title={titleButton} onPress={pressHandler} />
        </View>
        <Text style={styles.status}>{keyboardStatus}</Text>
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
    width: "100%",
    minWidth:120,
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

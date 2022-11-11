import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { fetchSelectTable } from "../util/http";

function SelectTableScreen({ route, navigation }) {
  const [fetchedSelectTable, setFechedSelectTable] = useState([]);
  const [tableNumber, onChangeTableNumber] = useState(0);
  const [nameClient, onChangeNameClient] = useState(0);
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
    navigation.setOptions({ title: '' });
    // navigation.setOptions({ title: data.pageTitle });
    titleButton = data.buttonContent;
    pageContent = data.pageContent;
  } else {
    navigation.setOptions({ title: "Select Table" });
  }

  // to go another screen
  function pressHandler() {
    if (Number(tableNumber) === 0) {
      setMessageErr("number table can't empty");
      console.log(messageErr);
    }
    if (
      Number(tableNumber) !== 0 &&
      tableNumber !== "" &&
      typeof tableNumber !== "String"
    ) {
      navigation.navigate("SelectServices", {
        languageId: langId,
        tableNumber: Number(tableNumber),
        userName: nameClient,
      });
    }
  }

  if (data !== "empty") {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{pageContent}</Text>
            <Text style={styles.text}>{messageErr}</Text>
          </View>
          <View style={styles.ContainerInput}>
            <View>
              <TextInput
                style={styles.textInput}
                placeholder="Number Table"
                value={tableNumber}
                onChangeText={onChangeTableNumber}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Your Name"
                value={nameClient}
                onChangeText={onChangeNameClient}
              />
            </View>
            <LinearGradient
              colors={["#EAF942", "#D2FFAF"]}
              style={styles.btnContainer}
            >
              <TouchableOpacity onPress={pressHandler}>
                <View>
                  <Text
                    style={{
                      color: "#128917",
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    {titleButton}
                  </Text>

                </View>
              </TouchableOpacity>
            </LinearGradient>
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
    margin: 0,
    backgroundColor: "#EAF942",
  },
  textContainer: {
    marginTop: 60,
    marginBottom: 16,
  },
  text: {
    fontSize: 24,
    color: "#128917",
    fontWeight: "bold",

    padding: 0,
  },
  ContainerInput: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 48,
    alignItems: "center",
    justifyContent: "center",
    // padding:20
  },
  textInput: {
    borderColor: "#A0A097",
    borderBottomWidth: 1,
    // width: "80%",
    minWidth: "80%",
    color: "#128917",
    fontSize: 32,
    height: 50,
    marginTop: 20,
    padding: 8,
  },
  btnContainer: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "80%",
    height: 50,
    marginTop: 60,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  status: {
    padding: 10,
    textAlign: "center",
  },
});

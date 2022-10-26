import { FlatList, View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import LanguagesTitle from "../components/LanguagTitle";
// import { Languages } from "../data/dummy-data";

import { fetchLangauges } from "../util/http";

function LanguagesScreen({ navigation }) {
  const [fetchedExpenses, setFechedExpenses] = useState([]);
  useEffect(() => {
    async function getLanguages() {
      const expenses = await fetchLangauges();
      setFechedExpenses(expenses);
    }
    getLanguages();
  }, []);

  console.log(fetchedExpenses);
  function renderLanguageItem(itemData) {
    function pressHandler() {
      navigation.navigate("SelectTable", {
        languageId: itemData.item.simpleLang,
      });
    }
    return (
      <LanguagesTitle title={itemData.item.lang} onPress={pressHandler} />
    );
  }

  return (
    <>
      <View style={styles.containerText}>
        <Text style={styles.text}>please choose your language</Text>
      </View>

      <FlatList
        data={fetchedExpenses}
        keyExtractor={(item) => item.id}
        renderItem={renderLanguageItem}
      />
    </>
  );
}

export default LanguagesScreen;

const styles = StyleSheet.create({
  containerText: {
    margin: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

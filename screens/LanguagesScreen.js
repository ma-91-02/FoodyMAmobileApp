import { FlatList, View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import LanguagesTitle from "../components/LanguagTitle";
// import { Languages } from "../data/dummy-data";

import { fetchLangauges } from "../util/http";

function LanguagesScreen({ navigation }) {
  const [fetchedLanguages, setFechedLanguages] = useState([]);

  useEffect(() => {
    async function getLanguages() {
      const languages = await fetchLangauges();
        setFechedLanguages(languages);
    }
    getLanguages();
  }, []);
  // console.log(fetchedLanguages);
  try {
    if (fetchedLanguages.length > 0) {
      function renderLanguageItem(itemData) {
        // console.log(itemData.item);
        function pressHandler() {
          navigation.navigate("SelectTable", {
            languageId: itemData.item.lang,
          });
        }
        // return <LanguagesTitle title={itemData.item.lang} />;
        return <LanguagesTitle title={itemData.item.lang} onPress={pressHandler} />;
      }
      return (
        <>
          <View style={styles.containerText}>
            <Text style={styles.text}>please choose your language</Text>
          </View>

          <FlatList
            data={fetchedLanguages}
            keyExtractor={(item) => item.id}
            renderItem={renderLanguageItem}
          /> 
        </>
      );
    }
  } catch (error) {
    console.log("some error");
  }
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
    color: "#128917",
  },
});

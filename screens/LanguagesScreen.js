import { FlatList, View, Text, StyleSheet } from "react-native";
import LanguagesTitle from "../components/LanguagTitle";
import { Languages } from "../data/dummy-data";

function LanguagesScreen({ navigation }) {
  function renderLanguageItem(itemData) {
    function pressHandler() {
      navigation.navigate("SelectTable", {
        languageId: itemData.item.id,
      });
    }
    return (
      <LanguagesTitle title={itemData.item.title} onPress={pressHandler} />
    );
  }
  return (
    <>
      <View style={styles.containerText}>
        <Text style={styles.text}>please choose your language</Text>
      </View>
      <FlatList
        data={Languages}
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
text:{
    fontSize:18,
    fontWeight:'bold'
}
});

import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Platform,
  Button,
  BackHandler,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import LanguagesTitle from "../components/LanguagTitle";
import { LinearGradient } from "expo-linear-gradient";

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
    navigation.setOptions({ title: "" }); /// to set page title
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
          return (
            <LanguagesTitle title={itemData.item.lang} onPress={pressHandler} />
            );
        }
        return (
          <>
            <View style={styles.containerText}>
              <Text style={styles.text}>Select Language </Text>
            </View>
            <View style={styles.container}>
              <View style={styles.containerLang}>
                <FlatList
                  data={fetchedLanguages}
                  keyExtractor={(item) => item.id}
                  renderItem={renderLanguageItem}
                />
              </View>
              
            </View>
          </>
        );
      }
    } catch (error) {
      console.log("some error");
    }
  }


export default LanguagesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C2F2A",
    height: "100%",
    textAlign: "center",
    borderTopLeftRadius: 50,
  },
  containerText: {
    // paddingTop: 50,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1A541 ",
    borderBottomWidth: 2,
    borderColor: "#fff",
    marginLeft: "25%",
    marginRight: "25%",
    // marginBottom: 30,
  },
  text: {
    // borderWidth:20,
    borderBottomColor: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    color: "#F1A541",
  },
  containerLang: {
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 0,
    paddingBottom: 20,
    paddingTop: 48,
    height: "80%",
    // borderWidth: 1,
    borderRadius: 16,
    // zIndex:99,
    // borderColor: "#F4FFEB",
    elevation: 4,
    // backgroundColor: "#1c2f2a",
    // shadowColor: "black",
    // shadowOpacity: 0.25,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 4,
    overflow: Platform.os === "android" ? "hidden" : "visible",
  },
  btnContainer: {
    // borderRadius: "50%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
    height: 60,
    // marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  btnMain: {
    margin: 20,
    textAlign: "center",
  },
});

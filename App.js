import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LanguagesScreen from "./screens/LanguagesScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import SelectTableScreen from "./screens/SelectTableScreen";
import SelectServicesScreen from "./screens/SelectServicesScreen";
import WaiterScreen from "./screens/WaiterScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Languages" component={LanguagesScreen}/>
          <Stack.Screen name="Categores" component={CategoriesScreen}/>
          <Stack.Screen name="SelectTable" component={SelectTableScreen}/>
          <Stack.Screen name="SelectServices" component={SelectServicesScreen}/>
          <Stack.Screen name="WaiterScreen" component={WaiterScreen}/>
          <Stack.Screen name="MealsOverviewScreen" component={MealsOverviewScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

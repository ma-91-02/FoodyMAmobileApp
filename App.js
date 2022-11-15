import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LanguagesScreen from "./screens/LanguagesScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import SelectTableScreen from "./screens/SelectTableScreen";
import SelectServicesScreen from "./screens/SelectServicesScreen";
import WaiterScreen from "./screens/WaiterScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import UserScreen from "./screens/UserScreen";
import CardScreen from "./screens/CardScreen";
import { store } from "./store/redux/store";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#D2FFAF",
              },
              headerTintColor: "#128917",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 24,
              },
              headerShadowVisible: false,
              contentStyle: { backgroundColor: "#D2FFAF" },
            }}
          >
            <Stack.Screen name="Languages" component={LanguagesScreen} />
            <Stack.Screen
              name="Categores"
              component={CategoriesScreen}
              options={{ title: "All Categories" }}
            />
            <Stack.Screen
              name="SelectTable"
              component={SelectTableScreen}
              options={{
                headerStyle: {
                  backgroundColor: "#EAF942",
                },
                headerTintColor: "#128917",
              }}
            />
            <Stack.Screen
              name="SelectServices"
              component={SelectServicesScreen}
            />
            <Stack.Screen name="WaiterScreen" component={WaiterScreen} />
            <Stack.Screen name="CardScreen" component={CardScreen} options={{ title: '' }}/>
            <Stack.Screen name="User" component={UserScreen} />
            <Stack.Screen
              name="MealsOverviewScreen"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="FavoritesScreen" component={FavoritesScreen}options={{ title: '' }} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
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

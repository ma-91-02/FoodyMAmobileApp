import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";
import LanguagesScreen from "./screens/LanguagesScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import SelectTableScreen from "./screens/SelectTableScreen";
import SelectServicesScreen from "./screens/SelectServicesScreen";
import WaiterScreen from "./screens/WaiterScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardScreen from "./screens/CardScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#D2FFAF",
            },
            headerTintColor: "#128917",
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:24,
            },
            headerShadowVisible: false,
            contentStyle: { backgroundColor: "#D2FFAF" },
          }}
        >
          <Stack.Screen name="Languages" component={LanguagesScreen}  />
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
              headerTintColor: '#128917',

            }}
          />
          <Stack.Screen
            name="SelectServices"
            component={SelectServicesScreen}
          />
          <Stack.Screen name="WaiterScreen" component={WaiterScreen} />
          <Stack.Screen name="CardScreen" component={CardScreen} />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              headerRight: () => {
                return <Button title="Tap me" />;
              },
              headerTitle: () => {
                return <Button title="Card" />;
              },
            }}
          />
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

import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/loginScreen";
import RegisterScreen from "./src/screens/registerScreen";

export default function App() {
  const Stack = createStackNavigator();
  const [name, setName] = React.useState("khoubaib");

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Se Connecter",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#6e78f7",
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: "S'incrire",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#6e78f7",
              elevation: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

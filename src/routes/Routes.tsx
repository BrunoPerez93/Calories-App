import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStacksParams } from "../types";
import Home from "../views/Home";
import AddFood from "../views/AddFood";
import Login from "../views/Login";
import Register from "../views/Register";

const Stack = createNativeStackNavigator<RootStacksParams>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddFood"
          component={AddFood}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
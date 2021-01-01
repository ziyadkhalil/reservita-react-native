import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import Registerscreen from "../screens/RegisterScreen/RegisterScreen";
import React from "react";
import HomeScreen from "@app/screens/HomeScreen/HomeScreen";

export type MainStackParamsList = {
  Home: undefined;
};
const Stack = createStackNavigator<MainStackParamsList>();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;

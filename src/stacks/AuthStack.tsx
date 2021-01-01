import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "@app/screens/LoginScreen/LoginScreen";
import Registerscreen from "@app/screens/RegisterScreen/RegisterScreen";
import React from "react";

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};
const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={Registerscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;

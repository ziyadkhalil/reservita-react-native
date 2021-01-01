import React from "react";
import {
  Text,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
  View,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "@app/stacks/AuthStack";

type HRef = "Login" | "Register";
type LinkProps = {
  navigation?: StackNavigationProp<AuthStackParamList, HRef>;
  href: HRef;
  style?: StyleProp<ViewStyle>;
};
export default function Link({ navigation, href, style }: LinkProps) {
  return (
    <View style={style}>
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 10,
          color: "#072460",
        }}
      >
        {href == "Register" ? "Don't have an account? " : "Already a member? "}
        <TouchableWithoutFeedback onPress={() => navigation!.navigate(href)}>
          <Text style={{ textDecorationLine: "underline" }}>
            {href === "Register" ? "Register" : "Sign-in"}
          </Text>
        </TouchableWithoutFeedback>
      </Text>
    </View>
  );
}

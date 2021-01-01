import React, { useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Textinput from "@app/components/TextInput/TextInput";
import Button from "@app/components/Button/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "@app/stacks/AuthStack";

const Decorations = () => (
  <>
    <Image
      style={styles.circle1}
      source={require("../../assets/register_circle1.png")}
    />
    <Image
      style={styles.circle2}
      source={require("../../assets/register_circle2.png")}
    />
    <Image
      style={styles.circle3}
      source={require("../../assets/register_circle3.png")}
    />
    <Image
      style={styles.girls}
      source={require("../../assets/register_girls.png")}
    />
  </>
);

type RegisterScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "Register"
>;
type Props = { navigation: RegisterScreenNavigationProp };

export default function Registerscreen({ navigation }: Props) {
  useEffect(() => {
    // side effects
    const subscriptions = [
      navigation.addListener("focus", () =>
        console.log("Entering RegisterScreen")
      ),
      navigation.addListener("blur", () => {
        console.log("Leaving RegisterScreen");
      }),
    ];
    // cleanup
    return () => subscriptions.forEach((unsubscripe) => unsubscripe());
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <Decorations />
      <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
        <View style={styles.label}>
          <Text style={styles.registerStyle}>Register</Text>
          <Text style={styles.labelEndText}>
            Already a member?{" "}
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={{ textDecorationLine: "underline" }}>Sign-in</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
        <Textinput type="name" style={{ marginBottom: 40 }} />
        <Textinput type="email" style={{ marginBottom: 40 }} />
        <Textinput type="password" style={{ marginBottom: 40 }} />
        <Button text="Get Started" style={{ marginBottom: 60 }} />
        <Text style={styles.registerWith}>Or register with</Text>
        <View style={styles.socialBar}>
          <Button icon="facebook" />
          <Button icon="google" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECF0F3",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  circle1: {
    position: "absolute",
    left: 0.86 * Dimensions.get("screen").width,
    top: 0.16 * Dimensions.get("screen").height,
  },
  circle2: {
    position: "absolute",
    left: -0.3 * Dimensions.get("screen").width,
    top: 0.42 * Dimensions.get("screen").height,
  },
  circle3: {
    position: "absolute",
    left: 0.5 * Dimensions.get("screen").width,
    top: 0.73 * Dimensions.get("screen").height,
  },
  girls: {
    position: "absolute",
    left: 8,
    top: 0.73 * Dimensions.get("screen").height,
  },
  registerStyle: {
    fontFamily: "Poppins-Medium",
    fontSize: 25,
    color: "#072460",
  },
  label: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 40,
  },
  labelEndText: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    marginLeft: "auto",
    color: "#072460",
  },
  registerWith: {
    fontFamily: "Poppins-ExtraLight",
    fontSize: 12,
    color: "#131313",
    marginBottom: 10,
  },
  socialBar: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
});

import React, { useEffect, useRef, useCallback, EffectCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Animated,
  Easing,
  Platform,
} from "react-native";
import LoginForm from "./LoginForm";
import Link from "@app/components/Link";
import Decorations from "./Decorations";
import {
  NavigationEventSubscription,
  NavigationEvents,
} from "react-navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "@app/stacks/AuthStack";

type LoginScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "Login"
>;
type Props = { navigation: LoginScreenNavigationProp };

function LoginScreen({ navigation }: Props) {
  useEffect(() => {
    // side effects
    const subscriptions = [
      navigation.addListener("focus", () =>
        console.log("Entering LoginScreen")
      ),
      navigation.addListener("blur", () => {
        console.log("Leaving LoginScreen");
      }),
    ];
    // cleanup
    return () => subscriptions.forEach((unsubscripe) => unsubscripe());
  }, [navigation]);
  const animationRef = useRef(new Animated.Value(0)).current;
  const translateY = animationRef.interpolate({
    inputRange: [0, 1],
    outputRange: [30, 0],
  });
  const animation = Animated.timing(animationRef, {
    duration: 300,
    toValue: 1,
    useNativeDriver: true,
    easing: Easing.out(Easing.ease),
  });

  useEffect(() => {
    animation.start();
  }, []);

  return (
    <View style={styles.container}>
      <Decorations />
      <Animated.View
        style={[
          styles.animatedContainer,
          { transform: [{ translateY: translateY }], opacity: animationRef },
        ]}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.content}
        >
          <LoginForm style={{ flexGrow: 1, width: "100%" }} />

          <Link
            href="Register"
            navigation={navigation}
            style={{ marginTop: "auto", marginBottom: 20 }}
          />
        </KeyboardAvoidingView>

        <Image
          source={require("@assets/welcome_sign.png")}
          style={{ flexGrow: 0.5, resizeMode: "contain" }}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF0F3",
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    width: "100%",
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "auto",
  },
  animatedContainer: {
    flexDirection: "column-reverse",
    alignItems: "center",
    flex: 1,
  },
});

export default LoginScreen;

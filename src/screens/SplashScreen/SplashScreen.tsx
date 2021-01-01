import React, { useRef, useState, useEffect } from "react";
import { Dimensions, View, StyleSheet, Animated, Button } from "react-native";
import Logo from "@app/components/Logo";
import useFonts from "../../hooks/useFonts";

type Props = {
  //SplashScreen component is responsible for ending itself by calling
  onFinish: () => void;
};

const SplashScreen: React.FC<Props> = (props) => {
  useEffect(() => {
    // side effects
    console.log("Running Splash");

    // cleanup
    return () => {
      console.log("Splash ending");
    };
  }, []);
  const loadingRef = useRef(true);
  const fontsLoaded = useFonts();
  const shouldSplashAnimationEnd = (() => {
    if (fontsLoaded) loadingRef.current = false;
  })();
  return (
    <View style={styles.container}>
      <Logo
        style={[styles.logo]}
        runLogoAnim={loadingRef}
        onFinish={props.onFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF0F3",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    transform: [
      {
        translateY: Dimensions.get("screen").height * 0.08123,
      },
    ],
  },
});

export default SplashScreen;

import React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";

//Background animated circles located at topleft and bottomright of login screen
export default function Decorations() {
  const screenWidth = Dimensions.get("screen").width;
  return (
    <>
      <Image
        style={[styles.bigCircle, ,]}
        source={require("@assets/circle_b.png")}
      />
      <Image
        style={[styles.smallCircle, ,]}
        source={require("@assets/circle_s.png")}
      />
    </>
  );
}

const styles = StyleSheet.create({
  bigCircle: {
    position: "absolute",
    transform: [
      {
        translateY:
          0.5 * Dimensions.get("screen").height -
          115 +
          0.08123 * Dimensions.get("screen").height,
      },
      {
        translateX: Dimensions.get("screen").width / 2 - 6,
      },
    ],
  },
  smallCircle: {
    position: "absolute",
    transform: [
      {
        translateX: -Dimensions.get("screen").width * 0.5,
      },
      {
        translateY:
          -0.25 * Dimensions.get("screen").height +
          0.08123 * Dimensions.get("screen").height -
          Dimensions.get("screen").height * 0.05,
      },
    ],
  },
});

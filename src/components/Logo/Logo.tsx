import React, { useEffect, useState, MutableRefObject } from "react";
import {
  View,
  Animated,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useLogoAnimation } from "./useLogoAnimation";

type LogoProps = {
  style: StyleProp<ViewStyle>;
  runLogoAnim: MutableRefObject<boolean>;
  onFinish: () => void;
};

const Logo: React.FC<LogoProps> = function (props) {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const [showLogo, setShowLogo] = useState(true);
  const {
    xRepeatAnim,
    yRepeatAnim,
    logoAnim,
    resetAnimation,
    closeAnim,
    closeRef,
  } = useLogoAnimation();

  useEffect(() => {
    startAnim();
  }, []);

  const startAnim = () => {
    logoAnim().start(() => {
      if (props.runLogoAnim.current) {
        startAnim();
        return;
      }
      setShowLogo(false);
      closeAnim.start(() => {
        props.onFinish();
      });
    });
  };

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bigCircle}>
        <Animated.Image
          source={require("../../../assets/circle_b.png")}
          style={[
            {
              opacity: showLogo ? 0 : 1,
              transform: showLogo
                ? []
                : [
                    {
                      translateX: closeRef.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, screenWidth / 2],
                      }),
                    },
                    {
                      translateY: closeRef.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, screenHeight / 2 - 50],
                      }),
                    },
                  ],
            },
          ]}
        />
      </View>

      <Image
        source={require("../../../assets/logo.png")}
        style={{ opacity: showLogo ? 1 : 0 }}
      />
      <View style={styles.smallCircle}>
        <Animated.Image
          source={require("../../../assets/circle_s.png")}
          style={[
            showLogo
              ? {
                  //Small circle loop animation around the logo
                  transform: [
                    { translateX: xRepeatAnim },
                    { translateY: yRepeatAnim },
                    { scale: 0.5 },
                  ],
                }
              : [
                  //Exit animation when splash finishes loading by setting loadingRef to false
                  {
                    transform: [
                      {
                        scale: closeRef.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.5, 1],
                        }),
                      },
                      {
                        translateY: closeRef.interpolate({
                          inputRange: [0, 1],
                          outputRange: [
                            0,
                            -Dimensions.get("screen").height * 0.05,
                          ],
                        }),
                      },
                      {
                        translateX: closeRef.interpolate({
                          inputRange: [0, 1],
                          outputRange: [
                            0,
                            -Dimensions.get("screen").width * 0.5,
                          ],
                        }),
                      },
                    ],
                  },
                ],
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  smallCircle: {
    position: "absolute",
    transform: [{ translateY: -0.25 * Dimensions.get("screen").height }],
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  bigCircle: {
    position: "absolute",
    transform: [{ translateY: -65 }, { translateX: -6 }],
    opacity: 1,
  },
});

export default Logo;

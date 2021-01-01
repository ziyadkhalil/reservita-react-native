import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useLogoAnimation = () => {
  const xyRef = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const closeRef = useRef(new Animated.Value(0)).current;
  const logoAnim = () =>
    Animated.sequence([
      Animated.timing(xyRef, {
        delay: 200,
        toValue: { x: -1, y: 1 },
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(xyRef, {
        toValue: { x: 0, y: 2 },
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(xyRef, {
        toValue: { x: 1, y: 1 },
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(xyRef, {
        toValue: { x: 0, y: 0 },
        duration: 400,
        useNativeDriver: true,
      }),
    ]);

  const closeAnim = Animated.timing(closeRef, {
    duration: 750,
    toValue: 1,
    useNativeDriver: true,
    easing: Easing.out(Easing.ease),
  });

  const xRepeatAnim = xyRef.x.interpolate({
    inputRange: [-1, 1],
    outputRange: [-160, 160],
  });
  const yRepeatAnim = xyRef.y.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 90, 2 * 200],
  });
  const resetAnimation = () => xyRef.setValue({ x: 0, y: 0 });

  return {
    xRepeatAnim,
    yRepeatAnim,
    logoAnim,
    resetAnimation,
    closeAnim,
    closeRef,
  };
};

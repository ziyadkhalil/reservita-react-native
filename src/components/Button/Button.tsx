import React, { useState } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  StyleSheetProperties,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

export type ButtonIcon = "facebook" | "google";

type DefaultTextProps = { text: string; style?: StyleProp<TextStyle> };
const DefaultText = ({ text, style }: DefaultTextProps) => (
  <Text style={[styles.text, style ? style : {}]}>{text}</Text>
);

type StyledTextProps = { iconSrc: ButtonIcon };
const StyledText = ({ iconSrc }: StyledTextProps) => {
  const src =
    iconSrc == "facebook"
      ? require(`../../../assets/facebook_icon.png`)
      : require(`../../../assets/google_icon.png`);
  const text = iconSrc == "facebook" ? "Facebook" : "Google";
  return (
    <View
      style={{
        flexDirection: "row",
        alignContent: "center",
        position: "absolute",
      }}
    >
      <Image
        source={src}
        style={{
          marginRight: 16,
          width: 22,
          height: 22,
        }}
      />
      <DefaultText text={text} style={{ fontFamily: "Poppins-Regular" }} />
    </View>
  );
};

type Props = {
  onClick?: () => void;
  style?: StyleProp<ViewStyle>;
} & (
  | {
      icon: ButtonIcon;
      text?: undefined;
    }
  | {
      text: string;
      icon?: undefined;
    }
);

export default function Button({ text, onClick, icon, style }: Props) {
  const [pressed, setPressed] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onClick}
      style={[
        {
          width: 150,
          height: 43,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      <Image
        source={
          pressed
            ? require("../../../assets/button_pressed.png")
            : require("../../../assets/button.png")
        }
      />

      {icon ? (
        <StyledText iconSrc={icon} />
      ) : (
        <DefaultText text={text!} style={{ position: "absolute" }} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#072460",
    fontFamily: "Poppins-Medium",
  },
});

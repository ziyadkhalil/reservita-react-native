import React, { useRef, useEffect, useState } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TextInputProps,
  TextStyle,
  StyleProp,
  TouchableWithoutFeedback,
  Platform,
  Dimensions,
} from "react-native";

type TextInputType = "email" | "password" | "name";

type Props = {
  textInputProps?: TextInputProps;
  style?: StyleProp<TextStyle>;
  type: TextInputType;
  width?: number;
  onChangeText?: (text: string) => void;
};
let compWidth = 0;

export default function Textinput({ onChangeText, type, style, width }: Props) {
  const textInputRef = useRef<TextInput>(null);
  compWidth = width ? Math.min(318, width) : 318;
  useEffect(() => {
    // Keyboard.addListener("keyboardDidHide", () => textInputRef.current?.blur());
    // return () => Keyboard.removeAllListeners("keyboardDidhide");
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        textInputRef.current?.focus();
      }}
      style={[
        {
          justifyContent: "center",

          width: compWidth,
        },
        style,
      ]}
    >
      <Image
        source={require("../../../assets/text_input_bg.png")}
        style={{
          resizeMode: "contain",
          width: compWidth,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
        }}
      >
        <Image
          source={
            type == "email"
              ? require("../../../assets/email_icon.png")
              : type == "password"
              ? require("../../../assets/password_icon.png")
              : require("../../../assets/name_icon.png")
          }
          style={{ marginLeft: 14 }}
        />
        <TextInput
          ref={textInputRef}
          blurOnSubmit
          onChangeText={onChangeText}
          placeholder={
            type == "email"
              ? "Enter your mail here"
              : type == "password"
              ? "Enter your password here"
              : "Enter your name here"
          }
          // textContentType={
          //   type == "email"
          //     ? "emailAddress"
          //     : type == "name"
          //     ? "name"
          //     : "password"
          // }
          secureTextEntry={type == "password" && !showPassword}
          // autoCompleteType={
          //   type == "email" ? "email" : type == "name" ? "name" : "password"
          // }
          keyboardType={type == "email" ? "email-address" : "default"}
          style={{
            flex: 1,
            fontFamily: "Poppins-ExtraLight",
            fontSize: 12,
            paddingHorizontal: 8,
          }}
        />
        {type == "password" ? (
          <TouchableOpacity
            onPress={() => {
              console.log("pressed");
              setShowPassword(!showPassword);
            }}
          >
            <Image
              style={{ marginRight: 14 }}
              source={require("../../../assets/show_password.png")}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
}

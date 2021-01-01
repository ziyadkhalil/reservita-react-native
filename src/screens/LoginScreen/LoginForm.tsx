import React, { useState, useContext } from "react";
import {
  View,
  Text,
  PixelRatio,
  Dimensions,
  StyleProp,
  ViewStyle,
} from "react-native";
import TextInput from "@app/components/TextInput/TextInput";
import Button from "@app/components/Button/Button";
import { AuthContext } from "@app/providers/AuthProvider";

interface LoginFormProps {
  style?: StyleProp<ViewStyle>;
}
const LoginForm: React.FC<LoginFormProps> = ({ style }) => {
  const screenWidth = Dimensions.get("screen").width;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);
  return (
    <View
      style={[
        {
          alignItems: "center",
          maxHeight: 350,
          justifyContent: "space-evenly",
        },
        style,
      ]}
    >
      <View style={{ alignSelf: "flex-start", flexGrow: 1 }}>
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: PixelRatio.getFontScale() * 30,
            color: "#072460",
          }}
        >
          Welcome
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Light",
            fontSize: PixelRatio.getFontScale() * 15,
            color: "#868688",
          }}
        >
          Let's get started
        </Text>
      </View>
      <View style={{ flexGrow: 1, justifyContent: "space-between" }}>
        <TextInput
          type="email"
          onChangeText={(text) => setEmail(text)}
          width={0.84 * screenWidth}
          style={{ marginBottom: 10 }}
        />
        <TextInput
          type="password"
          onChangeText={(text) => setPassword(text)}
          width={0.84 * screenWidth}
          style={{ marginBottom: 10 }}
        />
      </View>
      <View style={{ flexGrow: 2, justifyContent: "flex-end" }}>
        <Button
          text="Sign-in"
          onClick={() =>
            signIn!(email, password)
              .then(() => {
                console.log(`Logged in as ${email}`);
              })
              .catch(() => {
                console.log("Wrong Credentiails ");
              })
          }
          style={{
            marginBottom: 10,
          }}
        />
      </View>
    </View>
  );
};

export default LoginForm;

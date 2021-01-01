import Button from "@app/components/Button/Button";
import { AuthContext } from "@app/providers/AuthProvider";
import { useContext } from "react";
import { View, Text } from "react-native";

const HomeScreen: React.FC = () => {
  const { user, signOut } = useContext(AuthContext);

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>Hi {user!.email}</Text>
      <Button
        text="Signout"
        style={{ marginVertical: 40 }}
        onClick={() => {
          signOut!();
        }}
      />

      <Button
        text="Restart"
        onClick={() => {
          signOut!();
          //   setShowSplash!(true);
        }}
      />
    </View>
  );
};

export default HomeScreen;

import { AuthContext, AuthProvider } from "@app/providers/AuthProvider";
import React, { useContext } from "react";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const Stacks: React.FC = () => {
  const { user } = useContext(AuthContext);
  return user ? <MainStack /> : <AuthStack />;
};
export default Stacks;

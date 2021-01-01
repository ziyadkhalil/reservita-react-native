import React, { createContext, useState } from "react";

type User = null | {
  email: string;
  id: string;
};
type UserContext = {
  user?: User;
  signIn?: (email: string, password: string) => Promise<any>;
  signOut?: () => void;
};

export const AuthContext = createContext<UserContext>({});
export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const signIn = (email: string, password: string) => {
    if (email.toLowerCase() === "test@test.com" && password === "1234") {
      const user: User = { email: email, id: "1" };
      setUser(user);
      return Promise.resolve();
    }
    return Promise.reject();
  };
  return (
    <AuthContext.Provider
      value={{
        user: user,
        signIn: signIn,
        signOut: () => {
          setUser(null);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

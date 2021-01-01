import React, { useState } from "react";
import SplashScreen from "@app/screens/SplashScreen/SplashScreen";
import { AuthProvider } from "@app/providers/AuthProvider";
import Stacks from "@app/stacks/Stacks";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <AuthProvider>
      <Stacks />
    </AuthProvider>
  );
}

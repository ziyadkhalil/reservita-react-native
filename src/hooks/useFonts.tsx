import { useFonts } from "expo-font";

export default () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Medium": require("../../assets/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/Poppins-Regular.ttf"),
    "Poppins-ExtraLight": require("../../assets/Poppins-ExtraLight.ttf"),
    "Poppins-SemiBold": require("../../assets/Poppins-SemiBold.ttf"),
    "Poppins-Light": require("../../assets/Poppins-Light.ttf"),
  });

  return fontsLoaded;
};

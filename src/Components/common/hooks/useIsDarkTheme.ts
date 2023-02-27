import { useColorScheme } from "react-native";

const useIsDarkTheme = (): boolean => {
   const theme = useColorScheme();

   const isDark = theme !== "light";
   return isDark;
};

export default useIsDarkTheme;

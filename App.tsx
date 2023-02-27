import { NavigationContainer } from "@react-navigation/native";

import Drawer from "@components/Navigation/Drawer";
import "react-native-gesture-handler";

export default function App() {
   return (
      <NavigationContainer>
         <Drawer />
      </NavigationContainer>
   );
}

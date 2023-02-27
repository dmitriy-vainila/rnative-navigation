import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Explore from "./Explore";
import ExploreItem from "./ExploreItem";

const Stack = createStackNavigator();

const StackNavigation = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            header: ({ route: { name } }) => (name !== "item" ? null : name),
            headerShadowVisible: true,
            gestureEnabled: true,
            gestureResponseDistance: 180,
         }}
      >
         <Stack.Screen name="Explore items" component={Explore} />
         <Stack.Screen name="Item" component={ExploreItem} />
      </Stack.Navigator>
   );
};

export default StackNavigation;

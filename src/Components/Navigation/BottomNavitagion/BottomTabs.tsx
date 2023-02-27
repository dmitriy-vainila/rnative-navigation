import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import Profile from "@screens/Profile/Profile";
import Explore from "@screens/Explore/Explore";
import ShoppingCart from "@screens/ShoppingCart/ShoppingCart";
import StackNavigation from "@src/Components/Screens/Explore/ExploreNav";

export enum ERoutes {
   Explore = "Explore",
   Profile = "Profile",
   ShoppingCart = "Shopping Cart",
}

export const BottomNavigation = () => {
   const Tab = createBottomTabNavigator();
   return (
      <Tab.Navigator
         screenOptions={{
            header: () => null,
            tabBarActiveTintColor: "#0b9b9b",
            tabBarInactiveTintColor: "#105050",
         }}
      >
         <Tab.Screen
            component={Profile}
            name={ERoutes.Profile}
            options={{
               tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person" size={size} color={color} />
               ),
            }}
         />
         <Tab.Screen
            component={StackNavigation}
            name={ERoutes.Explore}
            options={{
               tabBarIcon: ({ color, size }) => (
                  <Ionicons name="compass-outline" size={size} color={color} />
               ),
            }}
         />
         <Tab.Screen
            component={ShoppingCart}
            name={ERoutes.ShoppingCart}
            options={{
               tabBarIcon: ({ color, size }) => (
                  <Ionicons name="cart-outline" size={size} color={color} />
               ),
            }}
         />
      </Tab.Navigator>
   );
};

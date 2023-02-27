import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
   DrawerContentScrollView,
   DrawerItemList,
} from "@react-navigation/drawer";

import { BottomNavigation } from "../BottomNavitagion/BottomTabs";

import { Text, View } from "react-native";
import { About } from "@screens/About/About";

const Drawer = createDrawerNavigator();

const drawerContent = (props: any) => {
   return (
      <DrawerContentScrollView {...props} style={{padding: 30}}>
         <View style={{ marginBottom: 30 }}>
            <Text>Navigate between different screens inside drawer</Text>
         </View>
         <DrawerItemList {...props} />
      </DrawerContentScrollView>
   );
};

const MyDrawer = () => {
   return (
      <Drawer.Navigator
         drawerContent={drawerContent}
         screenOptions={{
            swipeEnabled: true,
            swipeEdgeWidth: 80,
            headerTintColor: "#0b9b9b",
         }}
      >
         <Drawer.Screen
            name="Shop"
            component={BottomNavigation}
            options={{
               drawerLabel: ({ focused }) => (
                  <Text>{focused ? "Shop" : "Return to shop"}</Text>
               ),
               headerTitle: () => null,
            }}
         />
         <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
   );
};
export default MyDrawer;

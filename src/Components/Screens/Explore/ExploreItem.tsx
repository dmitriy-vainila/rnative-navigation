import { IItem } from "@src/Components/common/models";
import React, { FC } from "react";
import {
   View,
   Text,
   Image,
   useWindowDimensions,
   ScrollView,
} from "react-native";

const ExploreItem: FC<any> = ({ route }) => {
   const item = route.params.item as IItem;
   const { width: dimension } = useWindowDimensions();

   return (
      <ScrollView>
         <View
            style={{
               flex: 1,
               flexDirection: "column",
               alignItems: "center",
            }}
         >
            <Image
               source={{ uri: item.image }}
               style={{ width: dimension, height: dimension }}
            />
            <View
               style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  flexBasis: "50%",
                  padding: 20,
                  width: "100%",
                  justifyContent: "space-between",
               }}
            >
               <Text style={{ fontSize: 16, width: 100 }}>{item.title}</Text>
               <Text style={{ fontSize: 16 }}>{item.price}$</Text>
            </View>
            <Text style={{ fontSize: 16, width: "100%", padding: 20 }}>
               {item.description}
            </Text>
         </View>
      </ScrollView>
   );
};

export default ExploreItem;

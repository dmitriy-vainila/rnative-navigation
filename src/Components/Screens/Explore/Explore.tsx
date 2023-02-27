import React, { FC, useEffect, useState } from "react";
import {
   View,
   Text,
   ImageBackground,
   useWindowDimensions,
   ScrollView,
   TouchableOpacity,
} from "react-native";

import Carousel from "react-native-snap-carousel";
import MasonryList from "@react-native-seoul/masonry-list";

import { IItem } from "@common/models";

import {
   StyledDarkContainer,
   StyledHeading,
   StyledImgBG,
   StyledItemText,
   StyledTop,
} from "./styled";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const Explore: FC<{ navigation: any }> = ({ navigation }) => {
   const [loadingTop, setLoadingTop] = useState(false);
   const [loadingItems, setLoadingItems] = useState(false);
   const [topItems, setTopItems] = useState<IItem[] | null>(null);
   const [bottomItems, setBottomItems] = useState<IItem[] | null>(null);

   const getTopItems = async () => {
      setLoadingTop(true);
      const items: IItem[] = await fetch(
         "https://fakestoreapi.com/products?limit=5"
      )
         .then((res) => res.json())
         .finally(() => setLoadingTop(false));
      setTopItems(items);
   };
   const getMoreItems = async () => {
      setLoadingItems(true);
      const items: IItem[] = await fetch(
         "https://fakestoreapi.com/products?limit=20"
      )
         .then((res) => res.json())
         .finally(() => setLoadingItems(false));
      setBottomItems(items);
   };

   useEffect(() => {
      getTopItems();
      getMoreItems();
   }, []);

   const { height, width } = useWindowDimensions();

   return (
      <View style={{ flex: 1, flexDirection: "column" }}>
         <ScrollView>
            <StyledHeading>Trending Items</StyledHeading>
            <StyledTop>
               {topItems && (
                  <Carousel
                     vertical={false}
                     itemWidth={width * 0.7}
                     sliderWidth={width}
                     data={topItems}
                     loop
                     layout="default"
                     activeSlideAlignment="center"
                     inactiveSlideOpacity={0.2}
                     enableSnap
                     contentContainerCustomStyle={{
                        display: "flex",
                        alignItems: "center",
                     }}
                     autoplay
                     autoplayDelay={2000}
                     autoplayInterval={3000}
                     renderItem={({ item }) => (
                        <TouchableOpacity
                           onPress={() => navigation.navigate("Item", {item})}
                        >
                           <StyledImgBG
                              key={item.id}
                              source={{ uri: item.image }}
                              resizeMode="cover"
                              dimention={width * 0.7}
                           >
                              <StyledDarkContainer>
                                 <StyledItemText>
                                    {item.title ?? ""}
                                 </StyledItemText>
                              </StyledDarkContainer>
                           </StyledImgBG>
                        </TouchableOpacity>
                     )}
                  />
               )}
            </StyledTop>
            {bottomItems && (
               <MasonryList
                  data={bottomItems}
                  numColumns={2}
                  keyExtractor={(item: IItem) => `${item.id}`}
                  style={{ height: "100%", marginTop: 30 }}
                  renderItem={(item) => {
                     const { id, image, title } = item.item as IItem;
                     return (
                        <TouchableOpacity
                           onPress={() => navigation.navigate("Item", item)}
                        >
                           <StyledImgBG
                              key={id}
                              source={{ uri: image }}
                              resizeMode="cover"
                              dimention={width * 0.5}
                           >
                              <StyledDarkContainer>
                                 <StyledItemText>{title ?? ""}</StyledItemText>
                              </StyledDarkContainer>
                           </StyledImgBG>
                        </TouchableOpacity>
                     );
                  }}
               />
            )}
         </ScrollView>
      </View>
   );
};

export default Explore;

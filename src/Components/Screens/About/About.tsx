import React from "react";
import { Text } from "react-native";

import { StyledView } from "./styled";

export const About = () => {
   return (
      <StyledView>
         <Text style={{fontSize:32}}>This is a simple app to practice navigation using react native</Text>
      </StyledView>
   );
};

import React, { FC } from "react";

import useIsDarkTheme from "@common/hooks/useIsDarkTheme";
import { StyledMainView, StyledText } from "./styled";

const Profile: FC = () => {
   const isDark = useIsDarkTheme();
   return (
      <StyledMainView>
            <StyledText>Profile Page</StyledText>
      </StyledMainView>
   );
};

export default Profile;

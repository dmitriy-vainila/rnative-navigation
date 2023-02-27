import styled from "styled-components/native";

export const StyledHeading = styled.Text`
  font-size: 32px;
  padding: 20px 20px 35px;
`

export const StyledTop = styled.View`
   display: flex;
   flex-direction: row;
   justify-content: center;
   width: 100%;
`;
export const StyledImgBG = styled.ImageBackground<{ dimention: number }>`
   height: ${({ dimention }) => dimention}px;
   width: ${({ dimention }) => dimention}px;
`;

export const StyledDarkContainer = styled.View`
   justify-content: center;
   align-items: center;
   flex: 1;
   background: rgba(0, 0, 0, 0.5);
`;

export const StyledItemText = styled.Text`
   color: white;
   text-align: center;
`;

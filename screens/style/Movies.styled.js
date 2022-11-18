import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const { height: screenHeight } = Dimensions.get("window");

export const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

export const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;

export const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.mainBgColor};
`;

export const View = styled.View`
  flex: 1;
`;

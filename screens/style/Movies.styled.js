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
`;

export const Container = styled.ScrollView``;

export const View = styled.View`
  flex: 1;
`;

export const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BgImg = styled.Image`
  flex: 1;
`;

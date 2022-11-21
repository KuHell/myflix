import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const { height: screenHeight } = Dimensions.get("window");

export const TrendingTitle = styled.Text`
  color: white;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom: 5px;
`;

export const TrendingVotes = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 10px;
`;

export const Title = styled.Text`
  // <{ isTheme: boolean } >
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

export const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.ScrollView``;

export const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BgImg = styled.Image``;

export const PosterImg = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 5px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.View`
  width: 50%;
  margin-left: 20px;
`;

export const Overview = styled.Text`
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.8);
`;

export const Votes = styled(Overview)``;

export const ListTitle = styled.Text`
  margin-left: 30px;
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

export const Movie = styled.View`
  margin-right: 30px;
`;

export const TrendingScroll = styled.ScrollView`
  margin-top: 20px;
`;

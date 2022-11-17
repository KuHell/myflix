import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;

const Movies = ({ navigation: { navigate } }) => {
  return (
    <Btn
      onPress={() => {
        navigate("Stack", { screen: "One" });
      }}
    >
      <Title>Movies</Title>
    </Btn>
  );
};

export default Movies;

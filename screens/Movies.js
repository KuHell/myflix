import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const Title = styled.Text``;

const Btn = styled.TouchableOpacity``;

const Movies = ({ navigation: { navigate } }) => {
  return (
    <Btn
      onPress={() => {
        navigate("Stack", { screen: "One" });
      }}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Title>Movies</Title>
    </Btn>
  );
};

export default Movies;

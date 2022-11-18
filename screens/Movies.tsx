import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Btn, Title } from "./style/Movies.styled";

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = ({ navigation }) => {
  return (
    <Btn
      onPress={() => {
        navigation.navigate("Stack", { screen: "One" });
      }}
    >
      <Title>Movies</Title>
    </Btn>
  );
};

export default Movies;

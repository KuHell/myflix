import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Movies = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigate("Stack", { screen: "One" });
      }}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Movies</Text>
    </TouchableOpacity>
  );
};

export default Movies;

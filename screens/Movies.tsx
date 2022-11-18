import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import Swiper from "react-native-web-swiper";
import { Container, View, screenHeight } from "./style/Movies.styled";
// import Config from "react-native-config";

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = ({ navigation }) => {

  // const test = Config.API_KEY
  // console.log('API_KEY: ', test)


  return (
    <Container>
      <Swiper loop timeout={3.5} controlsEnabled={false} containerStyle={{ width: '100%', height: screenHeight / 4 }}>
        <View style={{backgroundColor: 'red'}}></View>
        <View style={{backgroundColor: 'blue'}}></View>
        <View style={{backgroundColor: 'green'}}></View>
        <View style={{backgroundColor: 'yellow'}}></View>
      </Swiper>
    </Container>
  );
};

export default Movies;

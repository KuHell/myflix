import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import Swiper from "react-native-web-swiper";
import { makeImgPath } from "../utils";
import { Container, View, screenHeight, Loader, BgImg } from "./style/Movies.styled";

const API_KEY = '1224c35a1ddd3e3ddd3fdd67d6b5aace'

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [nowPlaying, setNowPlaying] = useState([])
  const getNowPlaying = async () => {
    const { results }: any = await(
      // fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`)
      await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=1224c35a1ddd3e3ddd3fdd67d6b5aace&language=en-US&page=1&region=KR`)
    ).json();
    setNowPlaying(results)
    setLoading(true)
  }

  useEffect(()=>{
    getNowPlaying();
  },[])

  // useEffect(()=>{
  //   console.log('nowPlaying:' ,nowPlaying)
  // },[nowPlaying])

  return loading ?(
    <Container>
      <Swiper loop timeout={3.5} controlsEnabled={false} containerStyle={{ width: '100%', height: screenHeight / 4 }}>
        {nowPlaying.map((movie, key) => {
          return(
            <BgImg source={{uri:makeImgPath(movie.backdrop_path)}} key={key}></BgImg>
          )
        })}
      </Swiper>
    </Container>
  ): <Loader><ActivityIndicator/></Loader>;
};

export default Movies;

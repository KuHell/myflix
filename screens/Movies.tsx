import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, useColorScheme } from "react-native";
import Swiper from "react-native-swiper";
import { makeImgPath } from "../utils";
import { Container, View, screenHeight, Loader, BgImg, Title, Poster, Wrapper, Column, Overview, Votes } from "./style/Movies.styled";

const API_KEY = '1224c35a1ddd3e3ddd3fdd67d6b5aace'

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = ({ navigation }) => {
  const isTheme = useColorScheme() === "dark";
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

  return loading ?(
    <Container>
      <Swiper loop horizontal autoplay showsButtons={false} showsPagination={false} autoplayTimeout={3.5} containerStyle={{ width: '100%', height: screenHeight / 4 }}>
        {nowPlaying.map((movie, key) => {
          return(
            <>
              <BgImg source={{uri:makeImgPath(movie.backdrop_path)}} key={key} style={StyleSheet.absoluteFill}/>
              <BlurView tint={isTheme ? 'dark': 'light'} intensity={80} style={StyleSheet.absoluteFill}>
                <Wrapper>
                  <Poster source={{ uri: makeImgPath(movie.poster_path) }} />
                  <Column>
                    <Title>{movie.original_title}</Title>
                    {
                      movie.vote_average > 0 
                      ? <Votes>⭐️ {movie.vote_average}/10</Votes>
                      : null
                    }
                    <Overview>{movie.overview.slice(0, 90)}</Overview>
                  </Column>
                </Wrapper>
              </BlurView>
            </>
          )
        })}
      </Swiper>
    </Container>
  ): <Loader><ActivityIndicator/></Loader>;
};

export default Movies;

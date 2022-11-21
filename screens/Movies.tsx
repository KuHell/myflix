import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, useColorScheme } from "react-native";
import Swiper from "react-native-swiper";
import { Container, screenHeight, Loader } from "../style/Movies.styled";
import Slide from "../components/Slide";

const API_KEY = '1224c35a1ddd3e3ddd3fdd67d6b5aace'

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = ({ navigation }) => {
  const isTheme = useColorScheme() === "dark";
  const [loading, setLoading] = useState(false);
  const [nowPlaying, setNowPlaying] = useState([])
  const getNowPlaying = async () => {
    const { results }: any = await(
      await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`)
    ).json();
    setNowPlaying(results)
    setLoading(true)
  }

  useEffect(()=>{
    getNowPlaying();
  },[])

  return loading ?(
    <Container>
      <Swiper 
      loop
      horizontal
      autoplay
      showsButtons={false}
      showsPagination={false}
      autoplayTimeout={3.5}
      containerStyle={{ width: '100%', height: screenHeight / 4 }}>
        {nowPlaying.map((movie: any) => (
          <Slide 
            key={movie.id}
            backdropPath = {movie.backdrop_path}
            posterPath = {movie.poster_path}
            originalTitle = {movie.original_title}
            voteAverage = {movie.vote_average}
            overview = {movie.overview}
          />
        ))}
      </Swiper>
    </Container>
  ): <Loader><ActivityIndicator/></Loader>;
};

export default Movies;

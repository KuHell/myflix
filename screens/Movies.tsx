import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, RefreshControl, ScrollView } from "react-native";
import Swiper from "react-native-swiper";
import { Container, screenHeight, Loader, ListTitle, Movie, TrendingScroll, TrendingTitle, TrendingVotes, ListContainer, HMovie, HColumn, Overview, Release, ComingSoonTitle } from "../style/Movies.styled";
import Slide from "../components/Slide";
import Poster from "../components/Poster";
import Votes from "../components/Votes";

const API_KEY = '1224c35a1ddd3e3ddd3fdd67d6b5aace'

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState(false);
  const [nowPlaying, setNowPlaying] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [trending, setTrending] = useState([])

  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  }

  const getTrending = async() => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US&page=1&region=KR`
      )
    ).json()
    setTrending(results)
  }

  const getUpcoming = async() => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=KR`
      )
    ).json()
    setUpcoming(results)
  }

  const getNowPlaying = async () => {
    const { results }: any = await(
      await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`)
    ).json();
    setNowPlaying(results)
  }

  const getData = async () => {
    await Promise.all([getNowPlaying(), getUpcoming(), getTrending()])
    setLoading(true)
  }

  useEffect(()=>{
    getData();
  },[])

  return loading ?(
    <Container refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <Swiper 
      loop
      horizontal
      autoplay
      showsButtons={false}
      showsPagination={false}
      autoplayTimeout={3.5}
      containerStyle={{ marginBottom: 30, width: '100%', height: screenHeight / 4 }}>
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
      <ListContainer>
        <ListTitle>Trending Movies</ListTitle>
        <TrendingScroll contentContainerStyle={{paddingLeft: 30}} horizontal showsHorizontalScrollIndicator={false}>
          {
            trending.map((movie: any) => (
              <Movie>
                <Poster path={movie.poster_path}/>
                <TrendingTitle>
                  {movie.original_title.slice(0, 13)}
                  {movie.original_title.length > 13 ? "..." : null}
                </TrendingTitle>
                <Votes votes={movie.vote_average} />
              </Movie>
            ))
          }
        </TrendingScroll>
      </ListContainer>
      <ComingSoonTitle>Coming soon</ComingSoonTitle>
      {upcoming.map((movie: any) => (
        <HMovie key={movie.id}>
          <Poster path={movie.poster_path}/>
          <HColumn>
            <TrendingTitle>{movie.original_title.slice(0, 13)}</TrendingTitle>
            <Release>
              {new Date(movie.release_date).toLocaleDateString("ko", {month: 'long', day: 'numeric', year: 'numeric'})}
            </Release>
            <Overview>{movie.overview !== '' && movie.overview.length > 80 ? `${movie.overview.slice(0, 80)}...`: movie.overview}</Overview>
          </HColumn>
        </HMovie>
      ))}
    </Container>
  ): <Loader><ActivityIndicator/></Loader>;
};

export default Movies;

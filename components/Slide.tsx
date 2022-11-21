import React from 'react'
import { StyleSheet, useColorScheme, View } from 'react-native';
import { BlurView } from "expo-blur";
import { BgImg, Title, Poster, Wrapper, Column, Overview, Votes } from "../style/Movies.styled";
import { makeImgPath } from '../utils';

interface SlideProps {
  backdropPath: string,
  posterPath: string,
  originalTitle: string,
  voteAverage: number,
  overview: string,
}

const Slide: React.FC<SlideProps> = ({
  backdropPath,
  posterPath,
  originalTitle,
  voteAverage,
  overview,}) => {
  const isTheme = useColorScheme() === "dark";

  return (
    <View style={{flex:1}}>
      <BgImg source={{uri:makeImgPath(backdropPath)}} style={StyleSheet.absoluteFill}/>
      <BlurView tint={isTheme ? 'dark': 'light'} intensity={80} style={StyleSheet.absoluteFill}>
        <Wrapper>
          <Poster source={{ uri: makeImgPath(posterPath) }} />
          <Column>
            <Title isTheme={isTheme}>{originalTitle}</Title>
            {
              voteAverage > 0 
              ? <Votes isTheme={isTheme}>⭐️ {voteAverage}/10</Votes>
              : null
            }
            <Overview isTheme={isTheme}>{overview.slice(0, 90)}</Overview>
          </Column>
        </Wrapper>
      </BlurView>
    </View>
  )
}

export default Slide
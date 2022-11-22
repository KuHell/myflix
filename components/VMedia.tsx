import React from "react";
import { Movie, Title } from "../style/Movies.styled";
import Poster from "./Poster";
import Votes from "./Votes";

interface VMediaProps {
  posterPath: string;
  originalTitle: string;
  voteAverage: number;
}

const VMedia: React.FC<VMediaProps> = ({
  posterPath,
  originalTitle,
  voteAverage,
}) => (
  <Movie>
    <Poster path={posterPath} />
    <Title>
      {originalTitle.slice(0, 13)}
      {originalTitle.length > 13 ? "..." : null}
    </Title>
    <Votes votes={voteAverage} />
  </Movie>
);

export default VMedia;
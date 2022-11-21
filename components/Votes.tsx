import React from 'react'
import { Text } from '../style/Votes.styled';

interface VotesProps {
  votes: number;
}

const Votes: React.FC<VotesProps> = ({votes}) => {
  return (
    votes > 0 
    ? <Text>⭐️ {votes}/10</Text> 
    : `Coming soon`
  )
}

export default Votes
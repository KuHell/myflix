import React from 'react'
import { Text } from '../style/Votes.styled';

interface VotesProps {
  votes: number;
}

const Votes: React.FC<VotesProps> = ({ votes }) => (
  <Text>{votes > 0 ? `⭐️ ${votes}/10` : `Coming soon`}</Text>
);

export default Votes

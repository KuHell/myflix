import React from 'react' 
import { Image } from '../style/Poster.styled';
import { makeImgPath } from '../utils';

interface PosteProps {
  path:string;  
}

const Poster:React.FC<PosteProps> = ({path}) => {
  return (
    <Image source={{uri: makeImgPath(path)}} />
  )
}

export default Poster
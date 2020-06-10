import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Movie = ({name, price}) => {
  return(
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}
export default Movie;
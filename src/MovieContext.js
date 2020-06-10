import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
  {
    name: 'Harry Potter',
    price: '$10',
    id: 235039
  },
  {
    name: 'Game of Thrones',
    price: '$10',
    id: 3245456,
  },
  {
    name: 'Inception',
    price: '$10',
    id: 456456
  }
  ]);

  return(
    <MovieContext.Provider value={[movies, setMovies]}>
      { props.children }
    </MovieContext.Provider>
  );
}
import React, { useState } from 'react';
import Header from './Header';
import Display from './Display';

function App() {

  const [pokedexNumber, setPokedexNumber] = useState([]);
  const [pokemon, setPokemon] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <>
      <Header />
      <Display
        pokemon={pokemon}
      />
    </>
  );
}

export default App;

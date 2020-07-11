import React, { useState } from 'react';
import Header from './Header';

function App() {

  const {pokedexNumber, setPokedexNumber } = useState([]);

  return (
    <>
      <Header />
      <h1>Hello!</h1>
    </>
  );
}

export default App;

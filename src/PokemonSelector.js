import React from 'react';

const PokemonSelector = () => {
	const selector = Math.floor((Math.random())*894);

	return (
		<h2>Which pokemon is National Pokedex Number {selector}?</h2>
	)
}

export default PokemonSelector;
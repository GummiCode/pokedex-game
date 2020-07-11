import React from 'react';
import styled from 'styled-components';
import PokemonSelector from './PokemonSelector';
import ButtonContainer from './ButtonContainer';

const HeaderStyles = styled.div`
	margin: 0;
	padding: 0; 
	width: 100vw;
	height: auto;
	background-color: dimgrey;
	color: whitesmoke;
	font-size: 1em;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
`

const Header = () => {
	return (
		<>
			<HeaderStyles>
				<h1> The Pokedex Challenge </h1>
				<PokemonSelector />
				<ButtonContainer />
			</HeaderStyles>
		</>
	);
}

export default Header;
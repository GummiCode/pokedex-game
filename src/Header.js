import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.div`
	margin: 0;
	padding: 0; 
	width: 100vw;
	height: 60px;
	background-color: dimgrey;
	color: whitesmoke;
	font-size: 2.4em;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
`

const Header = () => {
	return (
		<HeaderStyles> The Pokedex Challenge</HeaderStyles>
	);
}

export default Header;
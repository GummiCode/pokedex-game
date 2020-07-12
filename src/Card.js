import React from 'react';
import styled from 'styled-components';

const card = styled.div`
	height: 200px;
	width: 200px;
	background-color: purple;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
`

const pokeImg = styled.img`

`

const Card = ({ monster }) => {

	return(
		<>
			<card>
				<pokeImg 
					src="./images/missingno.png"
					alt="Missingno" 
				/>
				<p>{monster}</p>
			</card>
		</>
	)
}

export default Card;
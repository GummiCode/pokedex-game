import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const cardGrid = styled.div`
	width: 800px;
	height: auto;
	background-color: yellow;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: start;
`

const Display = ({ pokemon }) => {
	return (
		<cardGrid>
			{pokemon.map((monster) => (
				<div>
					<Card
						monster={monster}
					/>
				</div>
			))}
		</cardGrid>
	)
};

export default Display;

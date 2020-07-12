import React from 'react';
import styled from 'styled-components';

const Display = ({ pokemon }) => {
	return (
		pokemon.map((monster) => (

			<div>
				<p>{monster}</p>
			</div>
		))
	)
};

export default Display;

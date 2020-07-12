import React, { useState } from 'react';
import styled from 'styled-components';
import ModeButton from './ModeButton';


const buttonContainer = styled.div`
	width: auto;
	height: auto;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
`

const buttons = styled.div`
	width: auto;
	height: auto;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	`

const ButtonContainer = () => {

	const [modeState, setModeState] = useState("Normal")

	return (	
		<buttonContainer>
			<h3>Difficulty:</h3>
			<buttons>
				<ModeButton mode="Easy" />
				<ModeButton mode="Normal" />
				<ModeButton mode="Great" />
				<ModeButton mode="Ultra" />
				<ModeButton mode="Master" />
			</buttons>
		</buttonContainer>	
	)
}

export default ButtonContainer;
import React, { useState } from 'react';
import stytled from 'styled-components';
import ModeButton from './ModeButton';

const ButtonContainer = () => {

	const [modeState, setModeState] = useState("Normal")

	return (
		<buttonContainer>
			<ModeButton mode="Easy" />
			<ModeButton mode="Normal" />
			<ModeButton mode="Great" />
			<ModeButton mode="Ultra" />
			<ModeButton mode="Master" />
		</buttonContainer>
	)
}

export default ButtonContainer;
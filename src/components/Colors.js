// Imports
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Color from "./Color";

// Components
const Colors = () => {

	// Store
	const { colorBoxes } = useSelector((store) => { return store.dragAndDrop; });

	// Return
	return(
		<Wrapper>
			{
				colorBoxes.map((colorBox) => {
					return <Color key={ colorBox.id } { ...colorBox } />
				})
			}
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.aside`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: var(--gray0);
	box-shadow: 0 0 10px rgba(0,0,0,0.4);
	@media only screen and (min-width: 768px){
		height: 150px;
	}
`;

// Export
export default Colors;
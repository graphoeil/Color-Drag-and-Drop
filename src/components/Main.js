// Imports
import React from "react";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { useSelector } from "react-redux";
import Colors from "./Colors";
import Containers from "./Containers";

// Component
const Main = () => {

	// Store
	const { isTouch } = useSelector((store) => { return store.dragAndDrop; });

	// DnD variables
	const customBackend = isTouch ? TouchBackend : HTML5Backend;
	const customOptions = isTouch ? { enableMouseEvents:true } : {};

	// Return
	return(
		<DndProvider backend={ customBackend } options={ customOptions }>
			<Wrapper>
				<Colors/>
				<Containers/>
			</Wrapper>
		</DndProvider>
	);

};

// Styled
const Wrapper = styled.main`
	width: 100%;
	height: 100%;
`;

// Export
export default Main;
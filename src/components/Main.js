// Imports
import React from "react";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import Colors from "./Colors";
import Containers from "./Containers";

// Modernizr
const Modernizr = window.Modernizr;

// Component
const Main = () => {
	
	// Returns
	if (Modernizr.touchevents){
		return(
			<DndProvider backend={ TouchBackend } options={ { enableMouseEvents:true } }>
				<Wrapper>
					<Colors/>
					<Containers/>
				</Wrapper>
			</DndProvider>
		);
	} else {
		return(
			<DndProvider backend={ HTML5Backend }>
				<Wrapper>
					<Colors/>
					<Containers/>
				</Wrapper>
			</DndProvider>
		);
	}

};

// Styled
const Wrapper = styled.main`
	width: 100%;
	height: 100%;
`;

// Export
export default Main;
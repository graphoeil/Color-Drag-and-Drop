// Imports
import React from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/constants";

// Components
const Color = ({ color, resolution }) => {

	// Draggable
	const [{ isDragging }, drag] = useDrag(() => ({
		type:ItemTypes.COLORBOX,
		item:{ color, resolution },
		collect:(monitor) => ({
			isDragging:!!monitor.isDragging()
		})
	}));

	// Return
	return(
		<Wrapper ref={ drag } isDragging={ isDragging } color={ color }>
			{ resolution.toLowerCase() }
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.div`
	width: 70px;
	height: 70px;
	margin: 0 10px 0 0;
	text-align: center;
	font-size: 18px;
	line-height: 70px;
	color: white;
	background-color: ${ (props) => props.color };
	opacity: ${ (props) => props.isDragging ? 0.5 : 1 };
	cursor: move;
	touch-action: none;
	user-select: none;
	&:last-of-type{
		margin: 0;
	}
	@media only screen and (min-width: 414px){
		margin: 0 20px 0 0;
	}
	@media only screen and (min-width: 768px){
		width: 100px;
		height: 100px;
		line-height: 100px;
		font-size: 20px;
		margin: 0 30px 0 0;
	}
`;

// Export
export default Color;
// Imports
import React from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { setColor } from "../store/features/dragAndDropSlice";
import { ItemTypes } from "../utils/constants";
import ColorDragLayer from "./ColorDragLayer";

// Modernizr
const Modernizr = window.Modernizr;

// Components
const Container = ({ id, acceptedResolutions, name, color, big }) => {

	// Dispatch
	const dispatch = useDispatch();

	// Can accept
	const canAccept = (resolution) => {
		let isAcceptable = false;
		acceptedResolutions.forEach((element) => {
			if (element === resolution){
				isAcceptable = true;
			}
		});
		return isAcceptable;
	};

	// Drop handler
	const [{ canDrop }, drop] = useDrop(() => ({
		accept:ItemTypes.COLORBOX,
		drop:(item) => {
			const color = item.color;
			dispatch(setColor({ containerID:id, color }));
		},
		canDrop:(item) => canAccept(item.resolution),
		collect:(monitor) => ({
			isOver:!!monitor.isOver(),
			canDrop:!!monitor.canDrop()
		})
	}));

	// Returns
	if (Modernizr.touchevents){
		return(
			<React.Fragment>
				<Wrapper ref={ drop } color={ color } big={ big } canDrop={ canDrop }>
					{ name }
				</Wrapper>
				<ColorDragLayer/>
			</React.Fragment>
		);
	}
	return(
		<React.Fragment>
			<Wrapper ref={ drop } color={ color } big={ big } canDrop={ canDrop }>
				{ name }
			</Wrapper>
		</React.Fragment>
	);

};

// Styled
const Wrapper = styled.article`
	width: 100%;
	height: 300px;
	margin: 0 0 20px 0;
	padding: 10px;
	background-color: ${ (props) => props.color };
	border: ${ ({ canDrop }) => {
		if (canDrop){
			return '4px solid var(--blue)';
		} else {
			return '4px solid transparent';
		}
	} };
	color: ${ ({ color }) => {
		if (color === '#f7f7f7'){
			return 'black';
		}
		return 'white';
	} };
	user-select: none;
	&:last-of-type{
		margin: 0;
	}
	@media only screen and (min-width: 768px) and (orientation: landscape){
		width: ${ (props) => props.big ? '100%' : 'calc(50% - 10px)' };
		margin: ${ (props) => props.big ? '0 0 20px 0' : '0 20px 0 0' };
	}
	@media only screen and (min-width: 768px) and (orientation: portrait){
		width: ${ (props) => props.big ? '100%' : 'calc(50% - 10px)' };
		height: ${ (props) => props.big ? '400px' : '300px' };
		margin: ${ (props) => props.big ? '0 0 20px 0' : '0 20px 0 0' };
	}
	@media only screen and (min-width: 1366px){
		height: ${ (props) => props.big ? '400px' : '300px' };
	}
`;

// Export
export default Container;
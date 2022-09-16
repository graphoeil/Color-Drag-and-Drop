// Imports
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Container from "./Container";

// Components
const Containers = () => {

	// Store
	const { containers } = useSelector((store) => { return store.dragAndDrop; });

	// Return
	return(
		<Wrapper>
			{
				containers.map((container) => {
					return <Container key={ container.id } { ...container }/>
				})
			}
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 1366px;
	margin: 0 auto;
	padding: 20px;
`;

// Export
export default Containers;
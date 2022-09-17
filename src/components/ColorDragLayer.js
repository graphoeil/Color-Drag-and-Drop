// Imports
import React from "react";
import { useDragLayer } from "react-dnd";
import { ItemTypes } from "../utils/constants";
import Color from "./Color";

// Styles
const layerStyles = {
	position: 'fixed',
	pointerEvents: 'none',
	zIndex: 1000,
	left: 0,
	top: 0,
	width: '100%',
	height: '100%'
};

// Component
const ColorDragLayer = () => {

	// Drag layer
	const { itemType, isDragging, item, initialOffset, currentOffset } = useDragLayer((monitor) => ({
		item:monitor.getItem(),
		itemType:monitor.getItemType(),
		initialOffset: monitor.getInitialSourceClientOffset(),
		currentOffset: monitor.getSourceClientOffset(),
		isDragging:monitor.isDragging()
    }));

	// Item styles
	const getItemStyles = (initialOffset, currentOffset) => {
		if (!initialOffset || !currentOffset){
			return { display:'none' };
		}
		const { x, y } = currentOffset;
		const transform  = `translate(${ x }px, ${ y }px)`;
		return { transform };
	};

	// Render item ?
	const renderItem = () => {
		if (itemType === ItemTypes.COLORBOX){
			return(
				<div style={ layerStyles }>
					<div style={ getItemStyles(initialOffset, currentOffset) }>
						<Color color={ item.color } resolution={ item.resolution }/>
					</div>
				</div>
			);
		}
		return null;
	};

	// Not dragging
	if (!isDragging){ return null; }

	// Return
	return(
		<React.Fragment>
			{ renderItem() }
		</React.Fragment>
	);

};

// Export
export default ColorDragLayer;
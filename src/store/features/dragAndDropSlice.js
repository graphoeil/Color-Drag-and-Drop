// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
	// Is touch ?
	isTouch:false,
	// Draggable color box
	colorBoxes:[
		{ id:1, color:'#00bceb', resolution:'4K' },
		{ id:2, color:'#6abf4b', resolution:'2K' },
		{ id:3, color:'#fbab18', resolution:'4K' },
		{ id:4, color:'#e2231a', resolution:'1K' }
	],
	// Dropable container
	containers:[
		{ id:1, acceptedResolutions:['4K', '2K', '1K'], name:'4K Container', color:'#f7f7f7', big:true },
		{ id:2, acceptedResolutions:['2K', '1K'], name:'2K Container', color:'#f7f7f7', big:false },
		{ id:3, acceptedResolutions:['1K'], name:'1K Container', color:'#f7f7f7', big:false }
	]
};

// Slice
const dragAndDropSlice = createSlice({
	name:'dragAndDrop',
	initialState,
	reducers:{
		// Is touch
		setIsTouch:(state) => {
			state.isTouch = true;
		},
		// Set color to container
		setColor:(state, { payload }) => {
			const { containerID, color } = payload;
			const container = state.containers.find((item) => {
				return item.id === containerID;
			});
			const containerIndex = state.containers.findIndex((item) => {
				return item.id === containerID;
			});
			container.color = color;
			state.containers[containerIndex] = container;
		}
	}
});

// Actions export
export const { setIsTouch, setColor } = dragAndDropSlice.actions;

// Reducer export
export default dragAndDropSlice.reducer;
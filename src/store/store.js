// Imports
import { configureStore } from "@reduxjs/toolkit";
import dragAndDropReducer from "./features/dragAndDropSlice";

// Store
const store = configureStore({
	reducer:{
		dragAndDrop:dragAndDropReducer
	}
});

// Export
export default store;
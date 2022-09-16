// Imports
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsTouch } from "./store/features/dragAndDropSlice";
import "./css/displayMain.css";
import Main from "./components/Main";

// Modernizr
const Modernizr = window.Modernizr;

// Component
const App = () => {

	// Dispatch
	const dispatch = useDispatch();

	// Is touch
	useEffect(() => {
		if (Modernizr.touchevents){
			dispatch(setIsTouch());
		}
	},[dispatch]);

	// Return
	return(
		<React.Fragment>
			<Main/>
		</React.Fragment>
	);

};

// Export
export default App;
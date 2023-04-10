import { configureStore } from "@reduxjs/toolkit";
import { utilitySliceReducers } from "./Slice/UtilitySlice";

const store = configureStore({
	reducer: {
		utils: utilitySliceReducers,
	},
});

export default store;

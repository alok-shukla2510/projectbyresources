import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isRegModalOpen: false,
	isLoginModalOpen: false,
	isMenuOpen: true,
};

const utilitySlice = createSlice({
	name: "utility",
	initialState,
	reducers: {
		openRegModal: (state) => {
			state.isRegModalOpen = true;
		},
		closeRegModal: (state) => {
			state.isRegModalOpen = false;
		},
		openMenuModal: (state) => {
			state.isMenuOpen = true;
		},
		closeMenuModal: (state) => {
			state.isMenuOpen = false;
		},
		openLoginModal: (state) => {
			state.isLoginModalOpen = true;
		},
		closeLoginModal: (state) => {
			state.isLoginModalOpen = false;
		},
	},
});

export const utilitySliceReducers = utilitySlice.reducer;
export const utilitySliceActions = utilitySlice.actions;

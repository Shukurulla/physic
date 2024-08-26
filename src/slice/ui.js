import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    activePage: "",
    showSide: true,
  },
  reducers: {
    changeActivePage: (state, action) => {
      state.activePage = action.payload;
    },
    changeShowSide: (state, action) => {
      state.showSide = action.payload;
    },
  },
});

export const { changeActivePage, changeShowSide } = uiSlice.actions;
export default uiSlice.reducer;

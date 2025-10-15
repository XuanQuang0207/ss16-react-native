import { createSlice } from "@reduxjs/toolkit";

export type DisplayMode = "list" | "grid";

interface DisplayState {
  mode: DisplayMode;
}

const initialState: DisplayState = {
  mode: "list",
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setListMode: (state) => {
      state.mode = "list";
    },
    setGridMode: (state) => {
      state.mode = "grid";
    },
  },
});

export const { setListMode, setGridMode } = displaySlice.actions;
export default displaySlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

interface NumberState {
  numbers: number[];
}

const initialState: NumberState = {
  numbers: [],
};

const numberSlice = createSlice({
  name: "numbers",
  initialState,
  reducers: {
    generateRandomNumbers: (state) => {
      const randomList = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * 100)
      );
      state.numbers = randomList;
    },
    clearNumbers: (state) => {
      state.numbers = [];
    },
  },
});

export const { generateRandomNumbers, clearNumbers } = numberSlice.actions;
export default numberSlice.reducer;
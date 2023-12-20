import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

// Define a type for the slice state
export interface PaginationState {
  value: number;
}

// Define the initial state using that type
const initialState: PaginationState = {
  value: 0,
};

export const paginationSlice = createSlice({
  name: "pagination",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = paginationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.pagination.value;

export default paginationSlice.reducer;

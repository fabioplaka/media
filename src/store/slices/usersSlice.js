import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const usersReducers = usersSlice.reducer;

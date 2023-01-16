import { configureStore } from "@reduxjs/toolkit";
import { usersReducers } from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducers,
  },
});

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";

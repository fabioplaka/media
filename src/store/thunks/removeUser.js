import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../helpers/url";

export const removeUser = createAsyncThunk("users/remove", async (user) => {
  await axios.delete(`${BASE_URL}users/${user.id}`);

  return user;
});

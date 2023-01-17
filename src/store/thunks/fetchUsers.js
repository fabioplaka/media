import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pause } from "../../helpers/pause";
import { BASE_URL } from "../../helpers/url";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get(`${BASE_URL}users`);

  // DEV only
  await pause(1000);

  return response.data;
});

export { fetchUsers };

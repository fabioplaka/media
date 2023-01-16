import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { BASE_URL } from "../../helpers/url";

export const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post(`${BASE_URL}users`, {
    name: faker.name.fullName(),
  });
  return response.data;
});

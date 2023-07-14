import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isError: false,
  isAuthenticated: false,
  token: null,
  username: "",
};

export const authenticateUser = createAsyncThunk(
  "auth/authenticateUser",
  async (credentials) => {
    console.log(credentials);
    try {
      const response = await axios.post(
        "https://dokunext.vercel.app/postman/Example%20Backend%20API.postman_collection.json/auth",
        credentials
      );
      return response.data.token;
    } catch (error) {
      console.error("Error during authentication:", error);
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.username = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload;
      })
      .addCase(authenticateUser.rejected, (state) => {
        state.isAuthenticated = false;
        state.token = null;
        state.token = true;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

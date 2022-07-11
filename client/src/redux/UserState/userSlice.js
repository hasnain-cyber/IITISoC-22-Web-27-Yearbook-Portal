import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: { loggedIn: false },
  },
  reducers: {
    login: (state, action) => {
      state.value = {
        loggedIn: true,
        ...action.payload,
      };

      const localStorage = window.localStorage;
      localStorage.setItem(
        "user",
        JSON.stringify({
          loggedIn: true,
          ...action.payload,
        })
      );

      // send this request at every log in to create user if not already present.
      axios
        .post(process.env.REACT_APP_API_URL + "createNewUser")
        .catch((err) => {
          console.log(err);
        });
    },

    logout: (state) => {
      state.value = { loggedIn: false };

      const localStorage = window.localStorage;
      localStorage.setItem(
        "user",
        JSON.stringify({
          loggedIn: false,
        })
      );
    },

    initialize: (state) => {
      const localStorage = window.localStorage;
      state.value = JSON.parse(localStorage.getItem("user"));
      if (!state.value) state.value = { loggedIn: false };
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, initialize } = userSlice.actions;
export default userSlice.reducer;

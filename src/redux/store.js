import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import home from "./home";

const initialState = {};
const store = configureStore({
  reducer: {
    user,
    home
  },
});

export default store;

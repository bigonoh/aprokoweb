import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import home from "./home";
import info from "./info";
import transaction from "./transaction";

const initialState = {};
const store = configureStore({
  reducer: {
    user,
    home,
    info,
    transaction
  },
});

export default store;

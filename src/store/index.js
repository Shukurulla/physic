import { configureStore } from "@reduxjs/toolkit";
import UiReducer from "../slice/ui.js";
import UserReducer from "../slice/user.slice.js";

const store = configureStore({
  reducer: {
    ui: UiReducer,
    user: UserReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

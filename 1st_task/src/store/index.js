import { configureStore } from "@reduxjs/toolkit";
import addItem from "./addItem";

const store = configureStore({
  reducer: { itemReducer: addItem },
});

export default store;

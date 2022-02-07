import { configureStore } from "@reduxjs/toolkit";
import coachSlice from "./coachesSlice";

const store = configureStore({
  reducer: coachSlice.reducer,
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const initialItem = { item: [], target: "" };
const addItem = createSlice({
  name: "item",
  initialState: initialItem,
  reducers: {
    addItem(state, action) {
      state.item.push(action.payload);
    },
    movable(state, action) {
      state.target = action.payload;
    },
  },
});

export const ItemAction = addItem.actions;

export default addItem.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favTrails: [
    { TRAILID: 1234, TR_ALT: 100 },
    { TRAILID: 2345, TR_ALT: 200 },
  ],
};

const favTrailSlice = createSlice({
  name: "favTrail",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.favTrails.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = trailId
      state.favTrails = state.favTrails.filter(
        (item) => item.TRAILID !== action.payload,
      );
    },
    clearList(state, action) {
      state.favTrails = [];
    },
  },
});

export const { addItem, deleteItem, clearList } = favTrailSlice.actions;

export default favTrailSlice.reducer;

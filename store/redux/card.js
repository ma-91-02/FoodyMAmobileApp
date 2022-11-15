import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    ids: [],
  },
  reducers: {
    addCard: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeCard: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addCard = cardsSlice.actions.addCard;
export const removeCard = cardsSlice.actions.removeCard;
export default cardsSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites";
import cardReducer from "./card-slice";
export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
    cardMeals: cardReducer,
    cart: cardReducer,
  },
});

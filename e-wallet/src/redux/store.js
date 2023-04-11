import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cards";

export default configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

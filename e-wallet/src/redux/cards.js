import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: [
    {
      cardholderName: "Dennis Byberg",
      cardNumber: "1234 5678 9101 1123",
      validThru: "12/23",
      ccv: 111,
      vendor: "Bitcoin INC",
    },
  ],
  reducers: {
    addNewCardToCardStack: () => {
      console.log("Added New Card");
    },
  },
});

export const { addNewCardToCardStack } = cardsSlice.actions;

export default cardsSlice.reducer;

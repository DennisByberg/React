import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: [
    {
      id: "1234 5678 9101 1123",
      cardNumber: "1234 5678 9101 1123",
      cardholderName: "Dennis Byberg",
      validThru: "12/23",
      ccv: 111,
      vendor: "bitcoin",
    },
    {
      id: "1844 5678 9121 1221",
      cardholderName: "Sune Byberg",
      cardNumber: "1844 5678 9121 1221",
      validThru: "01/24",
      ccv: 222,
      vendor: "evil",
    },
    {
      id: "1814 3333 9121 3221",
      cardholderName: "Polka Kattsson",
      cardNumber: "1814 3333 9121 3221",
      validThru: "11/25",
      ccv: 333,
      vendor: "ninja",
    },
  ],
  reducers: {
    addNewCardToCardStack: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addNewCardToCardStack } = cardsSlice.actions;

export default cardsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [
      {
        id: "1844 5678 9121 1221",
        cardholderName: "SUNE BYBERG",
        cardNumber: "1844 5678 9121 1221",
        validThru: "01/24",
        ccv: 222,
        vendor: "evil",
      },
      {
        id: "1814 3333 9121 3221",
        cardholderName: "POLKA KATTSSON",
        cardNumber: "1814 3333 9121 3221",
        validThru: "11/25",
        ccv: 333,
        vendor: "ninja",
      },
      {
        id: "1815 1323 9121 1151",
        cardholderName: "SOFIA OLSSON",
        cardNumber: "1815 1323 9121 1151",
        validThru: "10/21",
        ccv: 428,
        vendor: "blockchain",
      },
    ],
    activeCard: {
      id: "1234 5678 9101 1123",
      cardNumber: "1234 5678 9101 1123",
      cardholderName: "DENNIS BYBERG",
      validThru: "12/23",
      ccv: 111,
      vendor: "bitcoin",
    },
  },
  reducers: {
    addNewCardToCardStack: (state, action) => {
      state.cards.push(action.payload);
    },
    setActiveCard: (state, action) => {
      state.activeCard = action.payload;
    },
    deleteCardFromCardStack: (state, action) => {
      const cardIdToDelete = action.payload;
      state.cards = state.cards.filter((card) => card.id !== cardIdToDelete);
    },
  },
});

export const { addNewCardToCardStack, setActiveCard, deleteCardFromCardStack } =
  cardsSlice.actions;

export default cardsSlice.reducer;

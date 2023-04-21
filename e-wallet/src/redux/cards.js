// redux toolkit
import { createSlice } from "@reduxjs/toolkit";

// OM det är första gången man startar appen finns startkort för lata folk som inte orkar lägga till sina egna kort.. (jag) :D... annars läser den in sparade cards från local storage.
const initialState = {
  cards: JSON.parse(localStorage.getItem("cards")) || [
    {
      id: "1844 5678 9121 1221",
      cardholderName: "WHISKERS KATTSSON",
      cardNumber: "1844 5678 9121 1221",
      validThru: "01/24",
      ccv: 212,
      vendor: "evil",
    },
    {
      id: "1814 3333 9121 3221",
      cardholderName: "WHISKERS KATTSSON",
      cardNumber: "1814 3333 9121 3221",
      validThru: "11/25",
      ccv: 385,
      vendor: "ninja",
    },
    {
      id: "1815 1323 9121 1151",
      cardholderName: "WHISKERS KATTSSON",
      cardNumber: "1815 1323 9121 1151",
      validThru: "10/21",
      ccv: 329,
      vendor: "blockchain",
    },
  ],
  activeCard: JSON.parse(localStorage.getItem("activeCard")) || {
    id: "1234 5678 9101 1123",
    cardNumber: "1234 5678 9101 1123",
    cardholderName: "WHISKERS KATTSSON",
    validThru: "12/23",
    ccv: 836,
    vendor: "bitcoin",
  },
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    // Lägger till ett nytt kort till kortarrayen i staten och bevarar den uppdaterade kortarrayen i localStorage.
    addNewCardToCardStack: (state, action) => {
      state.cards.push(action.payload);
      localStorage.setItem("cards", JSON.stringify(state.cards));
    },

    // Uppdaterar tillståndet för activeCard med värdet action.payload. Använder också localStorage för att bevara det uppdaterade värdet för activeCard. Genom att lagra activeCard i localStorage kommer värdet att behållas även om användaren uppdaterar sidan eller stänger webbläsaren.
    setActiveCard: (state, action) => {
      state.activeCard = action.payload;
      localStorage.setItem("activeCard", JSON.stringify(action.payload));
    },

    // Tar bort ett kort från kortarrayen i tillståndet baserat på kortets ID som skickas in genom action.payload. Den uppdaterade kortarrayen finns sedan kvar i localStorage.
    deleteCardFromCardStack: (state, action) => {
      const cardIdToDelete = action.payload;
      state.cards = state.cards.filter((card) => card.id !== cardIdToDelete);
      localStorage.setItem("cards", JSON.stringify(state.cards));
    },
  },
});

export const { addNewCardToCardStack, setActiveCard, deleteCardFromCardStack } =
  cardsSlice.actions;

export default cardsSlice.reducer;

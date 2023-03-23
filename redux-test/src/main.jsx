import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Reducers/counterReducer";

const store = legacy_createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// DEVTOOLS?

//   Store - Ditt state med all data
// Reducers - Uppdaterar ditt state baserat på en action
// Actions - Säger åt din reducer vad du vill göra
// Dispather - Triggar en action

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

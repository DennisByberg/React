const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return state.counter < 10
        ? { ...state, counter: state.counter + action.payload }
        : state;

    case "DECRESE":
      return state.counter > 10
        ? { ...state, counter: state.counter - action.payload }
        : state;
    default:
      return state;
  }
};

export default reducer;

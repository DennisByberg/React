function increase(value) {
  return {
    type: "INCREASE",
    payload: value,
  };
}

function decrease(value) {
  return {
    type: "DECRESE",
    payload: value,
  };
}

export { increase, decrease };

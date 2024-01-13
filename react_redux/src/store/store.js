const initialState = {
  counter: 1,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "increament":
      return {
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}

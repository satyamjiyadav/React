import { createStore } from "redux";

// Initial State
const initialState = {
  count: 0,
};

// Reducer Function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

// Create Store
export const Store1 = createStore(counterReducer);



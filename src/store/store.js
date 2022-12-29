import { createStore } from "redux";

const initialState = {
  user: "Saifur Rahman",
  isModal: false,
};

function handleState(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}

const store = createStore(handleState);

export default store;

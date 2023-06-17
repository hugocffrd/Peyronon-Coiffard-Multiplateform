import { SUBMIT_CONNEXION, UPDATE_FAVORIS } from "../constants";

export const initialState = {
  user: {
    id: "",
    name: "",
    surname: "",
    password: "",
    email: "",
    animals: [],
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FAVORIS:
      return {
        ...state,
        user: action.payload,
      };
    case SUBMIT_CONNEXION:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

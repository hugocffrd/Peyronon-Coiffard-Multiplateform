import { SUBMIT_CONNEXION, UPDATE_FAVORIS } from "../constants";
import { initialState } from "../store";

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

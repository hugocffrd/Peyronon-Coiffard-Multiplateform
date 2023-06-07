import { FETCH_CAGNOTES, UPDATE_CAGNOTE } from "../constants";

const initialState = [];

export const cagnoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAGNOTES:
      return {
        ...state,
        cagnotes: action.payload,
      };
    case UPDATE_CAGNOTE:
      return {
        ...state,
        cagnotes: action.payload,
      };
    default:
      return state;
  }
};

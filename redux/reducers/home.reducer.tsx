import { FETCH_ANIMALS } from "../constants";

const initialState = [];

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANIMALS:
      return {
        ...state,
        animalList: action.payload,
      };
    default:
      return state;
  }
};

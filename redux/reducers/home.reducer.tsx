import AnimalCard from "../../screens/AnimalCard";
import { FETCH_ANIMALS } from "../constants";

const initialState = [
  AnimalCard,
  AnimalCard,
  AnimalCard,
  AnimalCard,
  AnimalCard,
  AnimalCard,
  AnimalCard,
  AnimalCard,
  AnimalCard,
  AnimalCard,
  AnimalCard,
];

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANIMALS:
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
};

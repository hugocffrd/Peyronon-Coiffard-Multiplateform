import { FETCH_CAGNOTE, FETCH_CAGNOTES, UPDATE_CAGNOTE } from "../constants";

const initialState = [];

export const cagnoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAGNOTES:
      return {
        ...state,
        cagnotes: action.payload,
      };
    case UPDATE_CAGNOTE:
      const updatedCagnotes = action.payload;
      const updatedCagnote = updatedCagnotes.find(
        //@ts-ignore
        (cagnote) => cagnote.id === state.cagnote?.id
      );
      return {
        ...state,
        cagnotes: updatedCagnotes,
        cagnote: updatedCagnote,
      };
    case FETCH_CAGNOTE: {
      return {
        ...state,
        cagnote: action.payload,
      };
    }
    default:
      return state;
  }
};

import { UserModel } from "../../models/user.model";
import { SUBMIT_CONNEXION, UPDATE_EMAIL, UPDATE_PASSWORD } from "../constants";

const initialState: UserModel = {
  name: "test",
  surname: "test",
  password: "test",
  email: "test@test.com",
  favorite: [],
};

export const modalConnexionReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SUBMIT_CONNEXION:
      return {
        ...state,
      };
    default:
      return state;
  }
};

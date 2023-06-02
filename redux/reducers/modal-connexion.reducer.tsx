import { UserModel } from "../../models/user.model";
import { modalConnexionConsts } from "../constants";

const initialState: UserModel = {
  name: "test",
  surname: "test",
  password: "test",
  email: "test@test.com",
  favorite: [],
};

export const modalConnexionReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalConnexionConsts.UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case modalConnexionConsts.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case modalConnexionConsts.SUBMIT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

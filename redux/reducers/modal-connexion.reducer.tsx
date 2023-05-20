import { UserModel } from "../../models/user.model";
import { modalConnexionConsts } from "../constants";

const initialState: UserModel = {
  name: "Test",
  surname: "Test",
  password: "Test",
  email: "test.test@test.test",
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

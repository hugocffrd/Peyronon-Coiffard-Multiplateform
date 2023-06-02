import { UserModel } from "../../models/user.model";
import { SUBMIT_CONNEXION } from "../constants";

interface ModalConnexionInitialProps {
  user: UserModel;
}

const initialState: ModalConnexionInitialProps = {
  user: {
    name: "",
    surname: "",
    password: "",
    email: "",
    animals: [],
  },
};

export const modalConnexionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_CONNEXION:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

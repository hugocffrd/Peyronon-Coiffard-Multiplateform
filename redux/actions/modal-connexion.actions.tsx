import { SUBMIT_CONNEXION, UPDATE_EMAIL, UPDATE_PASSWORD } from "../constants";

interface UserSubmitCOnnexionProps {
  email: string;
  password: string;
}

export const updateUsername = (email: string) => {
  return {
    type: UPDATE_EMAIL,
    payload: email,
  };
};

export const updatePassword = (password: string) => {
  return {
    type: UPDATE_PASSWORD,
    payload: password,
  };
};

export const submitForm = (user: UserSubmitCOnnexionProps) => {
  return {
    type: SUBMIT_CONNEXION,
    payload: user,
  };
};

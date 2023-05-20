import { modalConnexionConsts } from "../constants";

export const updateUsername = (email: string) => {
  return {
    type: modalConnexionConsts.UPDATE_EMAIL,
    payload: email,
  };
};

export const updatePassword = (password: string) => {
  return {
    type: modalConnexionConsts.UPDATE_PASSWORD,
    payload: password,
  };
};

export const submitForm = (user: { email: string; password: string }) => {
  return {
    type: modalConnexionConsts.SUBMIT,
    payload: user,
  };
};

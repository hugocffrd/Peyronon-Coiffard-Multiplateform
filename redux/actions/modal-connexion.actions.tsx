import { UserModel } from "../../models/user.model";
import { SUBMIT_CONNEXION } from "../constants";

export const submitForm = (user: UserModel) => {
  return {
    type: SUBMIT_CONNEXION,
    payload: user,
  };
};

export const connectUser = (email: string, password: string) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        ` http://localhost:8080/api/user/getUserForConnexion?email=${email}&password=${password}`,
        {
          method: "POST",
        }
      );
      const userJson = await response.json();
      dispatch(submitForm(userJson));
    } catch (error) {
      console.log("Error call API : " + error);
    }
  };
};

export const changePassword = (user: UserModel, newPassword: string) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        ` http://localhost:8080/api/user/changePassword?email=${user.email}&password=${user.password}&newPassword=${newPassword}`,
        {
          method: "PUT",
        }
      );
      const userJson = await response.json();
      dispatch(submitForm(userJson));
    } catch (error) {
      console.log("Error call API : " + error);
    }
  };
};

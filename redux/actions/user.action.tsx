import { AnimalModel } from "../../models/animal.model";
import { UserModel, UserParam } from "../../models/user.model";
import { SUBMIT_CONNEXION, UPDATE_FAVORIS } from "../constants";

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
        ` http://localhost:8080/api/user/getUserForConnexion`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const userJson = await response.json();
      dispatch(submitForm(userJson));
    } catch (error) {
      console.log("Error call API : " + error);
      alert("Error while connection");
    }
  };
};

export const changePassword = (user: UserModel, newPassword: string) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        ` http://localhost:8080/api/user/changePassword`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            newPassword,
          }),
        }
      );
      const userJson = await response.json();
      dispatch(submitForm(userJson));
    } catch (error) {
      console.log("Error call API : " + error);
      alert("Error while changing password");
    }
  };
};

export const updateNewFavorite = (user: UserModel) => {
  return {
    type: UPDATE_FAVORIS,
    payload: user,
  };
};

export const updateFavorite = (
  user: UserModel,
  animalSelected: AnimalModel
) => {
  return async (dispatch) => {
    const updatedUser: UserParam = {
      ...user,
      animal: animalSelected,
      animalIds: user.animals.map((animal) => animal.id),
    };

    try {
      const response = await fetch(
        `http://localhost:8080/api/user/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );

      const newFavorite = await response.json();
      dispatch(updateNewFavorite(newFavorite));
    } catch (error) {
      console.log("Error calling API: " + error);
    }
  };
};

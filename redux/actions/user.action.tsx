import { AnimalModel } from "../../models/animal.model";
import { UserModel, UserParam } from "../../models/user.model";
import { config } from "../../settings";
import { SUBMIT_CONNEXION, UPDATE_FAVORIS } from "../constants";
const machineIP = config.ipMachine;

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
        `http://${machineIP}:8080/api/user/getUserForConnexion`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const userJson = await response.json();
        dispatch(submitForm(userJson));
      } else {
        throw new Error("Fetch request failed");
      }
    } catch (error) {
      console.log("Error call API: " + error);
      alert("Error while connection");
    }
  };
};

export const changePassword = (user: UserModel, newPassword: string) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://${machineIP}:8080/api/user/changePassword`,
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

      if (response.ok) {
        const userJson = await response.json();
        dispatch(submitForm(userJson));
      } else {
        throw new Error("Fetch request failed");
      }
    } catch (error) {
      console.log("Error call API: " + error);
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
        `http://${machineIP}:8080/api/user/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );

      if (response.ok) {
        const newFavorite = await response.json();
        dispatch(updateNewFavorite(newFavorite));
      } else {
        throw new Error("Fetch request failed");
      }
    } catch (error) {
      console.log("Error calling API: " + error);
      alert("Error while updating favorite");
    }
  };
};

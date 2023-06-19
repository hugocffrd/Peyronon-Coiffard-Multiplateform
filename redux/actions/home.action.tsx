import { AnimalModel } from "../../models/animal.model";
import { config } from "../../settings";
import { FETCH_ANIMALS } from "../constants";
const machineIP = config.ipMachine;

export const fetchAnimals = (animalList: AnimalModel[]) => {
  return {
    type: FETCH_ANIMALS,
    payload: animalList,
  };
};

export const getAnimals = () => {
  return async (dispatch) => {
    try {
      const animalsPromise = await fetch(
        `http://${machineIP}:8080/api/animal/`
      );
      const animalsJson = await animalsPromise.json();
      dispatch(fetchAnimals(animalsJson));
    } catch (error) {
      console.log("Error call API : " + error);
      alert("Error while getting animal list");
    }
  };
};

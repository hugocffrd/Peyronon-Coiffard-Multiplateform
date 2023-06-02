import { AnimalModel } from "../../models/animal.model";
import { FETCH_ANIMALS } from "../constants";

export const fetchAnimals = (animalList: AnimalModel[]) => {
  return {
    type: FETCH_ANIMALS,
    payload: animalList,
  };
};

export const getAnimals = () => {
  return async (dispatch) => {
    try {
      const animalsPromise = await fetch("http://localhost:8080/api/animal/");
      console.log(animalsPromise);
      const animalsJson = await animalsPromise.json();
      console.log(animalsJson);

      dispatch(fetchAnimals(animalsJson));
    } catch (error) {
      console.log("Error call API : " + error);
    }
  };
};

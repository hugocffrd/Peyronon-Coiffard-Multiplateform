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
      if (animalsPromise.ok) {
        const animalsJson = await animalsPromise.json();
        dispatch(fetchAnimals(animalsJson));
      } else {
        throw new Error("Fetch request failed");
      }
    } catch (error) {
      console.log("Error call API : " + error);
      alert("Error while getting animal list");
    }
  };
};

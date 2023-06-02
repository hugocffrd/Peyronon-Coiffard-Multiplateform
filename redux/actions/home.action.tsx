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
      const animalsPromise = await fetch("mon url");
      const animalsJson = await animalsPromise.json();
      const animalList: AnimalModel[] = animalsJson.map((elt: AnimalModel) => {
        return {
          name: elt.name,
          typeAnimal: elt.animalType,
        };
      });
      dispatch(fetchAnimals(animalList));
    } catch (error) {
      console.log("Error call API : " + error);
    }
  };
};

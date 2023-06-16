import { homeReducer } from "../../reducers/home.reducer";
import { FETCH_ANIMALS } from "../../constants";
import { AnimalModel } from "../../../models/animal.model";
import { GeolocationModel } from "../../../models/geolocation.model";
import { DietModel } from "../../../models/diet.model";
import { StatusModel } from "../../../models/status.model";

describe("Home Reducer", () => {
  it("should return the initial state", () => {
    const initialState = [];
    const action = {};
    const newState = homeReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  it("should handle FETCH_ANIMALS", () => {
    const initialState = [];
    const animalList: AnimalModel[] = [
      {
        id: "1",
        name: "Lion",
        typeAnimal: "Mammal",
        longevity: 10,
        geoLocation: GeolocationModel.Africa,
        diet: DietModel.CARNIVORE,
        status: StatusModel.ETEINT,
        gestation: 3,
        nbKid: 2,
        images: ["image1.jpg", "image2.jpg"],
      },
    ];
    const action = {
      type: FETCH_ANIMALS,
      payload: animalList,
    };
    const newState = homeReducer(initialState, action);
    //@ts-ignore
    expect(newState.animalList).toEqual(animalList);
  });

  it("should return the current state for unknown action types", () => {
    const initialState = [
      {
        id: 1,
        name: "Lion",
      },
    ];
    const action = {
      type: "UNKNOWN_ACTION",
      payload: {},
    };
    const newState = homeReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});

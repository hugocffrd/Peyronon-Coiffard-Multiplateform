import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { AnimalModel } from "../../../models/animal.model";
import { DietModel } from "../../../models/diet.model";
import { GeolocationModel } from "../../../models/geolocation.model";
import { StatusModel } from "../../../models/status.model";
import { fetchAnimals, getAnimals } from "../../actions/home.action";
import { describe, it, expect } from "@jest/globals";
import { FETCH_ANIMALS } from "../../constants";

const mockStore = configureStore([thunk]);
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

const expectedAction = {
  type: FETCH_ANIMALS,
  payload: animalList,
};

describe("Animal Actions", () => {
  it("should create an action to fetch animals", () => {
    expect(fetchAnimals(animalList)).toEqual(expectedAction);
  });

  it("should dispatch fetchAnimals action when getAnimals is called", async () => {
    const expectedActions = [expectedAction];

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(animalList),
    });

    const store = mockStore({});
    await store.dispatch(getAnimals());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should handle error when getAnimals encounters an error", async () => {
    jest.spyOn(console, "log");
    global.fetch = jest.fn().mockRejectedValue(new Error("API Error"));
    global.alert = jest.fn();

    const store = mockStore({});
    await store.dispatch(getAnimals());
    expect(console.log).toHaveBeenCalledWith(
      "Error call API : Error: API Error"
    );
    expect(global.alert).toHaveBeenCalledWith(
      "Error while getting animal list"
    );
  });
});

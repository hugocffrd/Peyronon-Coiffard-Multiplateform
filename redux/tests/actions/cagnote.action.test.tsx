import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  fetchCagnote,
  getCagnotes,
  updateCagnote,
} from "../../actions/cagnote.action";
import { FETCH_CAGNOTE, FETCH_CAGNOTES, UPDATE_CAGNOTE } from "../../constants";
import { describe, it, expect } from "@jest/globals";
import { AnimalModel } from "../../../models/animal.model";
import { UserModel } from "../../../models/user.model";
import { CagnoteModel } from "../../../models/cagnote.model";
import { GeolocationModel } from "../../../models/geolocation.model";
import { DietModel } from "../../../models/diet.model";
import { StatusModel } from "../../../models/status.model";

const mockStore = configureStore([thunk]);
const animalSelected: AnimalModel = {
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
};

const users: UserModel[] = [
  {
    id: "1",
    name: "John",
    email: "john@example.com",
    password: "johnPassword",
    animals: [],
  },
  {
    id: "2",
    name: "Jean",
    email: "jean@example.com",
    password: "jeanPassword",
    animals: [],
  },
];
const cagnoteList: CagnoteModel = {
  users: users,
  animal: animalSelected,
  amount: 100,
  id: "1",
};
describe("Cagnote Actions", () => {
  it("should create an action to fetch cagnote", () => {
    const expectedAction = {
      type: FETCH_CAGNOTE,
      payload: cagnoteList,
    };

    expect(fetchCagnote(cagnoteList)).toEqual(expectedAction);
  });

  it("should dispatch fetchCagnote action when getCagnotes is called", async () => {
    const expectedActions = [
      {
        type: FETCH_CAGNOTES,
        payload: cagnoteList,
      },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(cagnoteList),
    });

    const store = mockStore({});
    await store.dispatch(getCagnotes());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should handle error when getCagnotes encounters an error", async () => {
    jest.spyOn(console, "log");
    global.fetch = jest.fn().mockRejectedValue(new Error("API Error"));
    global.alert = jest.fn();

    const store = mockStore({});
    await store.dispatch(getCagnotes());
    expect(console.log).toHaveBeenCalledWith(
      "Error call API : Error: API Error"
    );
    expect(global.alert).toHaveBeenCalledWith("Error while getting kittys");
  });

  it("should dispatch updateNewCagnote action when updateCagnote is called", async () => {
    const id = "1";
    const amountToAdd = 50;
    const idUserToAdd = "2";
    const updatedCagnoteList: CagnoteModel[] = [cagnoteList];

    const expectedActions = [
      {
        type: UPDATE_CAGNOTE,
        payload: updatedCagnoteList,
      },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(updatedCagnoteList),
    });

    const store = mockStore({});
    await store.dispatch(updateCagnote(id, amountToAdd, idUserToAdd));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should handle error when updateCagnote encounters an error", async () => {
    jest.spyOn(console, "log");
    global.fetch = jest.fn().mockRejectedValue(new Error("API Error"));
    const store = mockStore({});
    await store.dispatch(updateCagnote("1", 50, "2"));
    expect(console.log).toHaveBeenCalledWith(
      "Error call API : Error: API Error"
    );
  });
});

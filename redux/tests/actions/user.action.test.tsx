import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { AnimalModel } from "../../../models/animal.model";
import { DietModel } from "../../../models/diet.model";
import { GeolocationModel } from "../../../models/geolocation.model";
import { StatusModel } from "../../../models/status.model";
import { UserModel } from "../../../models/user.model";
import {
  submitForm,
  connectUser,
  changePassword,
  updateFavorite,
  updateNewFavorite,
} from "../../actions/user.action";
import { SUBMIT_CONNEXION, UPDATE_FAVORIS } from "../../constants";

const mockStore = configureStore([thunk]);
const user: UserModel = {
  id: "1",
  name: "John",
  email: "john@example.com",
  password: "johnPassword",
  animals: [],
};

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

const expectedAction = {
  type: SUBMIT_CONNEXION,
  payload: user,
};

describe("User Actions", () => {
  it("should create an action to submit form", () => {
    expect(submitForm(user)).toEqual(expectedAction);
  });

  it("should dispatch submitForm action when connectUser is called", async () => {
    const expectedActions = [
      {
        type: SUBMIT_CONNEXION,
        payload: user,
      },
    ];

    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(user),
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse);
    const store = mockStore({});
    await store.dispatch(connectUser(user.email, user.password));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should handle error when connectUser encounters an error", async () => {
    jest.spyOn(console, "log");
    global.fetch = jest.fn().mockRejectedValue(new Error("API Error"));
    global.alert = jest.fn();
    const store = mockStore({});
    await store.dispatch(connectUser("john@example.com", "password"));
    expect(console.log).toHaveBeenCalledWith(
      "Error call API: Error: API Error"
    );
    expect(global.alert).toHaveBeenCalledWith("Error while connection");
  });

  it("should dispatch submitForm action when changePassword is called", async () => {
    const expectedActions = [
      {
        type: SUBMIT_CONNEXION,
        payload: user,
      },
    ];

    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(user),
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse);
    const store = mockStore({});
    await store.dispatch(changePassword(user, "newpassword"));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should handle error when changePassword encounters an error", async () => {
    jest.spyOn(console, "log");
    global.fetch = jest.fn().mockRejectedValue(new Error("API Error"));
    global.alert = jest.fn();

    const store = mockStore({});
    await store.dispatch(
      changePassword(
        { email: "john@example.com", password: "oldpassword" },
        "newpassword"
      )
    );

    expect(console.log).toHaveBeenCalledWith(
      "Error call API: Error: API Error"
    );
    expect(global.alert).toHaveBeenCalledWith("Error while changing password");
  });

  it("should create an action to update new favorite", () => {
    const expectedAction = {
      type: UPDATE_FAVORIS,
      payload: user,
    };

    expect(updateNewFavorite(user)).toEqual(expectedAction);
  });

  it("should dispatch updateNewFavorite action when updateFavorite is called", async () => {
    const expectedActions = [
      {
        type: UPDATE_FAVORIS,
        payload: user,
      },
    ];

    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(user),
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse);
    const store = mockStore({});
    await store.dispatch(updateFavorite(user, animalSelected));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should handle error when updateFavorite encounters an error", async () => {
    jest.spyOn(console, "log");
    global.fetch = jest.fn().mockRejectedValue(new Error("API Error"));
    global.alert = jest.fn();

    const store = mockStore({});
    await store.dispatch(updateFavorite(user, animalSelected));
    expect(console.log).toHaveBeenCalledWith(
      "Error calling API: Error: API Error"
    );
    expect(global.alert).toHaveBeenCalledWith("Error while updating favorite");
  });
});

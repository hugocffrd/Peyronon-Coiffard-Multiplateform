import { userReducer } from "../../reducers/user.reducer";
import { SUBMIT_CONNEXION, UPDATE_FAVORIS } from "../../constants";
import { initialState } from "../../store";
import { describe, it, expect } from "@jest/globals";
import { UserModel } from "../../../models/user.model";

const user: UserModel = {
  id: "1",
  name: "John",
  email: "john@example.com",
  password: "johnPassword",
  animals: [],
};

describe("User Reducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SUBMIT_CONNEXION action", () => {
    const action = {
      type: SUBMIT_CONNEXION,
      payload: user,
    };

    const newState = userReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      user: {
        ...initialState.user,
        ...user,
      },
    });
  });

  it("should handle UPDATE_FAVORIS action", () => {
    const action = {
      type: UPDATE_FAVORIS,
      payload: user,
    };

    const newState = userReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      user: user,
    });
  });
});

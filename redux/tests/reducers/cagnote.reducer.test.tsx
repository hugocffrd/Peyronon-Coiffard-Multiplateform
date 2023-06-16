import { cagnoteReducer } from "../../reducers/cagnote.reducer";
import { FETCH_CAGNOTES, UPDATE_CAGNOTE } from "../../constants";

describe("Cagnote Reducer", () => {
  it("should return the initial state", () => {
    const initialState = [];
    const action = {};
    const newState = cagnoteReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  it("should handle FETCH_CAGNOTES", () => {
    const initialState = [];
    const cagnoteList = [
      {
        id: 1,
        amount: 100,
      },
      {
        id: 2,
        amount: 200,
      },
    ];
    const action = {
      type: FETCH_CAGNOTES,
      payload: cagnoteList,
    };
    const newState = cagnoteReducer(initialState, action);
    //@ts-ignore
    expect(newState.cagnotes).toEqual(cagnoteList);
  });

  it("should handle UPDATE_CAGNOTE", () => {
    const initialState = [];
    const updatedCagnoteList = [
      {
        id: 1,
        amount: 150,
      },
      {
        id: 2,
        amount: 250,
      },
    ];
    const action = {
      type: UPDATE_CAGNOTE,
      payload: updatedCagnoteList,
    };
    const newState = cagnoteReducer(initialState, action);
    //@ts-ignore
    expect(newState.cagnotes).toEqual(updatedCagnoteList);
  });

  it("should return the current state for unknown action types", () => {
    const initialState = [
      {
        id: 1,
        amount: 100,
      },
    ];
    const action = {
      type: "UNKNOWN_ACTION",
      payload: {},
    };
    const newState = cagnoteReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});

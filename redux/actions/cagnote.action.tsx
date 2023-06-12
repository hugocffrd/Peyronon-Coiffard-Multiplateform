import { CagnoteModel } from "../../models/cagnote.model";
import { FETCH_CAGNOTES, UPDATE_CAGNOTE } from "../constants";

export const fetchCagnote = (cagnoteList: CagnoteModel[]) => {
  return {
    type: FETCH_CAGNOTES,
    payload: cagnoteList,
  };
};

export const updateNewCagnote = (cagnoteList: CagnoteModel[]) => {
  return {
    type: UPDATE_CAGNOTE,
    payload: cagnoteList,
  };
};

export const getCagnotes = () => {
  return async (dispatch) => {
    try {
      const cagnotePromise = await fetch("http://localhost:8080/api/cagnote/");
      const cagnoteJson = await cagnotePromise.json();
      dispatch(fetchCagnote(cagnoteJson));
    } catch (error) {
      console.log("Error call API : " + error);
      alert("Error while getting kittys");
    }
  };
};

export const updateCagnote = (
  id: string,
  amountToAdd: number,
  idUserToAdd: string
) => {
  return async (dispatch) => {
    try {
      const cagnotePromise = await fetch(
        ` http://localhost:8080/api/cagnote/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, amountToAdd, idUserToAdd }),
        }
      );
      const cagnoteJson = await cagnotePromise.json();
      dispatch(updateNewCagnote(cagnoteJson));
    } catch (error) {
      console.log("Error call API : " + error);
      alert("Error while getting kittys");
    }
  };
};

import { CagnoteModel } from "../../models/cagnote.model";
import { FETCH_CAGNOTE, FETCH_CAGNOTES, UPDATE_CAGNOTE } from "../constants";

export const fetchCagnotes = (cagnoteList: CagnoteModel[]) => {
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

export const fetchCagnote = (cagnote: CagnoteModel) => {
  return {
    type: FETCH_CAGNOTE,
    payload: cagnote,
  };
};

export const getCagnotes = () => {
  return async (dispatch) => {
    try {
      const cagnotePromise = await fetch("http://localhost:8080/api/cagnote/");
      const cagnoteJson = await cagnotePromise.json();
      dispatch(fetchCagnotes(cagnoteJson));
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
  console.log(id, amountToAdd, idUserToAdd);

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

export const getCagnoteById = (id: string) => {
  return async (dispatch) => {
    try {
      const cagnotePromise = await fetch(
        `http://localhost:8080/api/cagnote/getByAnimalId/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (cagnotePromise.ok) {
        const cagnoteJson = await cagnotePromise.json();
        if (cagnoteJson && cagnoteJson.error) {
          console.log("Error response from API: ", cagnoteJson.error);
        } else {
          dispatch(fetchCagnote(cagnoteJson));
        }
      } else {
        console.log("Error response from API: ", cagnotePromise.status);
      }
    } catch (error) {
      console.log("Error call API : " + error);
      alert("Error while getting kittys");
    }
  };
};

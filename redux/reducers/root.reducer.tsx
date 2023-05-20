import { combineReducers } from "redux";
import { modalConnexionReducer } from "./modal-connexion.reducer";

export const rootReducer = combineReducers({
  modalConnexion: modalConnexionReducer,
});

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { homeReducer } from "./reducers/home.reducer";
import { modalConnexionReducer } from "./reducers/modal-connexion.reducer";

const reducer = {
  homeReducer: homeReducer,
  modalConnexionReducer: modalConnexionReducer,
};

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

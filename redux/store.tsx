import { configureStore } from "@reduxjs/toolkit";
import { cagnoteReducer } from "./reducers/cagnote.reducer";
import { homeReducer } from "./reducers/home.reducer";
import { userReducer } from "./reducers/user.reducer";

export const initialState = {
  user: {
    id: "",
    name: "",
    surname: "",
    password: "",
    email: "",
    animals: [],
  },
};

const reducer = {
  homeReducer: homeReducer,
  userReducer: userReducer,
  cagnoteReducer: cagnoteReducer,
};

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

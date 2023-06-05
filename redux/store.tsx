import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./reducers/home.reducer";
import { userReducer } from "./reducers/user.reducer";

export const initialState = {
  user: {
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
};

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

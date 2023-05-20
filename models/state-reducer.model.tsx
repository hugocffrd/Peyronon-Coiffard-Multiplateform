import { AnimalModel } from "./animal.model";
import { UserModel } from "./user.model";

export interface StateReducerModel {
  user: UserModel;
  favoritelist: AnimalModel[];
  mainList: AnimalModel[];
  theme: "light";
}

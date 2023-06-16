import { AnimalModel } from "./animal.model";

export interface UserModel {
  id?: string;
  name?: string;
  surname?: string;
  password?: string;
  email?: string;
  animals?: AnimalModel[];
}

export interface UserParam extends UserModel {
  animal?: AnimalModel;
  animalIds?: string[];
  newPassword?: string;
}

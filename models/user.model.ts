import { AnimalModel } from "./animal.model";

export interface UserModel {
  name: string;
  surname: string;
  password: string;
  email: string;
  animals: AnimalModel[];
}

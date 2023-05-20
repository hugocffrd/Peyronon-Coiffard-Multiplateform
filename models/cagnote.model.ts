import { AnimalModel } from "./animal.model";
import { UserModel } from "./user.model";

export interface CagnoteModel {
  users: UserModel[];
  animal: AnimalModel;
  amount: number;
}

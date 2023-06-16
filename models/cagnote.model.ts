import { AnimalModel } from "./animal.model";
import { UserModel } from "./user.model";

export interface CagnoteModel {
  id: string;
  users: UserModel[];
  animal: AnimalModel;
  amount: number;
}

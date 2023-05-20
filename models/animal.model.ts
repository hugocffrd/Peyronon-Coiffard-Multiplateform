import { DietModel } from "./diet.model";
import { GeolocationModel } from "./geolocation.model";
import { StatusModel } from "./status.model";

export interface AnimalModel {
  name: string;
  animalType: string;
  longevity: number;
  geoLocation: GeolocationModel;
  diet: DietModel;
  status: StatusModel;
  gestation: number;
  nbKid: number;
  images: string[];
}

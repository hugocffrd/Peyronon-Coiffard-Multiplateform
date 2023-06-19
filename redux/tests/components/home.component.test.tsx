import React from "react";
import { render, screen } from "@testing-library/react-native";
import AnimalCard from "../../../components/animal/AnimalCard";
import { AnimalModel } from "../../../models/animal.model";
import { DietModel } from "../../../models/diet.model";
import { GeolocationModel } from "../../../models/geolocation.model";
import { StatusModel } from "../../../models/status.model";
import { UserModel } from "../../../models/user.model";
import "@testing-library/jest-native/extend-expect";

const animal: AnimalModel = {
  id: "1",
  name: "Fluffy",
  typeAnimal: "Cat",
  diet: DietModel.CARNIVORE,
  geoLocation: GeolocationModel.Africa,
  gestation: 10,
  longevity: 10,
  nbKid: 1,
  status: StatusModel.ETEINT,
  images: ["Chimp1.jpg"],
};

const user: UserModel = {
  id: "1",
  name: "John",
  email: "john@example.com",
  animals: [],
};

const theme: Record<string, string> = {
  itemBlock: "blue",
  textPrimary: "white",
  textSecondary: "gray",
};
describe("<AnimalCard />", () => {
  test("Displays animal name and type", () => {
    render(<AnimalCard animal={animal} user={user} theme={theme} />);
    expect(screen.getByTestId("animal-name")).toHaveTextContent("Fluffy");
    expect(screen.getByTestId("animal-typeAnimal")).toHaveTextContent("Cat");
  });
  test("Displays default image when no image is available", () => {
    animal.images = [];
    render(<AnimalCard animal={animal} user={user} theme={theme} />);
    const defaultImage = "GenericFaceLogo.jpg";
    expect(screen.getByTestId("animal-image")).toHaveProp("source", {
      uri: defaultImage,
    });
  });
  test("Displays white star when animal is not in user's animals list", () => {
    render(<AnimalCard animal={animal} user={user} theme={theme} />);
    const yellowStarElement = screen.getByTestId("yellow-star");
    expect(yellowStarElement).toHaveStyle({ color: "white" });
  });
  test("Displays yellow star when animal is in user's animals list", () => {
    user.animals = [animal];
    render(<AnimalCard animal={animal} user={user} theme={theme} />);
    const yellowStarElement = screen.getByTestId("yellow-star");
    expect(yellowStarElement).toHaveStyle({ color: "yellow" });
  });
});

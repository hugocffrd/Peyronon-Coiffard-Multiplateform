import React from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { AnimalModel } from "../../../models/animal.model";
import { CarouselItem } from "./CarouselItem";

const { width } = Dimensions.get("window");
interface AnimalCarouselProps {
  animal: AnimalModel;
}

export const AnimalCarousel = (props: AnimalCarouselProps) => {
  const { animal } = props;

  return (
    <Carousel<string>
      width={width}
      height={width / 1.2}
      data={animal?.images}
      renderItem={(item) => <CarouselItem item={item} />}
    />
  );
};

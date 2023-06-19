import React from "react";
import { Image, Dimensions, View } from "react-native";
import { CarouselItemStyle } from "../../../styles/animal/slider/CarouselItem.style";
const styles = CarouselItemStyle(Dimensions.get("window").width);

interface CarouselItemProps {
  item: {
    item: string;
  };
}

export const CarouselItem = (props: CarouselItemProps) => {
  const { item } = props;
  let image = item.item;
  return (
    <View
      style={{
        padding: 10,
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <Image source={{ uri: image }} style={styles.itemImage} />
    </View>
  );
};

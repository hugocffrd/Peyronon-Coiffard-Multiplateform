import React from "react";
import { Image, StyleSheet, Dimensions, View } from "react-native";

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

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  itemImage: {
    width: width / 1.3,
    height: width / 1.3,
    borderRadius: 10,
  },
});

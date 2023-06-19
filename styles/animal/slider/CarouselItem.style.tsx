import { StyleSheet } from "react-native";
export const CarouselItemStyle = (width: number) =>
  StyleSheet.create({
    itemImage: {
      width: width / 1.3,
      height: width / 1.3,
      borderRadius: 10,
    },
  });

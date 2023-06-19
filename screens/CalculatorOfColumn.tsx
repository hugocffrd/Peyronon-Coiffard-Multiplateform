import { Dimensions } from "react-native";

export const CalculatorOfColumns = () => {
  const windowWidth = Dimensions.get("window").width;
  const itemWidth = 200;
  const minItemMargin = 100;
  const availableWidth = windowWidth - minItemMargin;
  const maxColumns = 2;
  const minColumns = 1;
  const numColumns = Math.floor(availableWidth / itemWidth);
  return Math.max(minColumns, Math.min(numColumns, maxColumns));
};

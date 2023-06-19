import { StyleSheet } from "react-native";
export const AnimalCardStyle = StyleSheet.create({
  boxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    flex: 1,
    margin: 5,
  },
  rightContainer: {
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textContainer: {
    flex: 0.7,
    flexDirection: "column",
    margin: 3,
  },
  textPadding: {
    paddingVertical: 3,
    textAlign: "center",
    flexWrap: "wrap",
  },
  icons: {
    display: "flex",
    flex: 0.4,
  },
});

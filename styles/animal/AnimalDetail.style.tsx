import { StyleSheet } from "react-native";
export const AnimalDetailsStyle = StyleSheet.create({
  detailsView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    marginHorizontal: 5,
  },
  infos: {
    width: "90%",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 10,
    margin: 20,
    padding: 20,
  },
  lineStyle: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#eeeeee",
    margin: 10,
  },
  titleBlock: {
    width: "90%",
    backgroundColor: "transparents",
    alignItems: "center",
    marginBottom: 3,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subtitleText: {
    fontWeight: "300",
    fontSize: 16,
  },
  grid: {
    flex: 2,
    marginHorizontal: "auto",
    width: "100%",
  },
  row: {
    flexDirection: "row",
  },
  col1: {
    width: "auto",
    flex: 1,
  },
  "2col": {
    width: "auto",
    flex: 2,
  },
});

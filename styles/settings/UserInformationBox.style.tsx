import { StyleSheet } from "react-native";
export const UserInformationBoxStyle = StyleSheet.create({
  mainContainerInfoBox: {
    alignItems: "center",
    display: "flex",
    marginHorizontal: 5,
  },
  informationBox: {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  informations: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  informationsText: {
    paddingLeft: 10,
  },

  lineStyle: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#eeeeee",
    margin: 10,
  },
});

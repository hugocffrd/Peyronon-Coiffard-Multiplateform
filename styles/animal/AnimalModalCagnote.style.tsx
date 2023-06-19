import { StyleSheet } from "react-native";
export const AnimalModalCagnoteStyle = StyleSheet.create({
  modalCenteredView: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalContent: {
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },

  modalBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  modal: {
    width: "50%",
    borderRadius: 20,
    padding: 5,
  },
  modalBtnText: {
    color: "black",
    textAlign: "center",
  },
});

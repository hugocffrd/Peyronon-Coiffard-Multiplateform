import { StyleSheet } from "react-native";
export const InputModalSettingsStyle = StyleSheet.create({
  modalTextInput: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  modalLabelText: {
    marginBottom: 5,
    textAlign: "center",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
  },
  iconPassword: {
    marginRight: 5,
  },

  iconContainer: {
    position: "absolute",
    top: 17,
    right: 10,
    zIndex: 1,
  },
});

import { StyleSheet } from "react-native";
export const OptionSettingsStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 5,
    marginTop: 10,
    borderRadius: 10,
  },
  optionContainer: {
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    width: "100%",
  },
  option: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
    height: 50,
  },
  optionText: {
    width: "auto",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  switch: {
    marginRight: 15,
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
});

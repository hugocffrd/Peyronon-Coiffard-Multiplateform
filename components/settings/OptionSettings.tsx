import React, { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../../theme/theme";
import { StyleSheet, View, Switch } from "react-native";
import ModalGeneric from "./ModalGeneric";
import { ItemInputModalsModel } from "../../models/input-modals.model";
import WrapperText from "../wrappers/WrapperText";
import { UserModel } from "../../models/user.model";

interface OptionsSettingsProps {
  isDarkMode: boolean;
  setIsDarkMode: Function;
  user: UserModel;
  windowWidth: number;
}

export default function OptionSettings(props: OptionsSettingsProps) {
  const { isDarkMode, setIsDarkMode, user, windowWidth } = props;
  const [isEnabled, setIsEnabled] = useState(isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleSwitch = (): void => {
    setIsEnabled(!isEnabled);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.optionContainer}>
        <View style={styles.option}>
          <WrapperText
            customStyle={styles.optionText}
            text={"Theme: " + (isDarkMode ? "Dark" : "Light")}
            size={18}
          />
          <View>
            <WrapperText customStyle={theme.test} text={"Test"} />
          </View>
          <Switch
            trackColor={{ false: "black", true: "white" }}
            thumbColor={isEnabled ? "black" : "white"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch()}
            value={isEnabled}
            style={styles.switch}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal:5,
    marginTop:10,
  },
  heading: {
    textAlign: "center",
    marginBottom: 10,
  },
  optionContainer: {
    backgroundColor: "#FFFFFF",
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

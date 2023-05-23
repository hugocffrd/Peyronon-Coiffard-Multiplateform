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
  const [passwordLength, setPasswordLength] = useState(0);

  const [modalChangePasswordVisible, setModalChangePasswordVisible] =
    useState(false);

  const toggleSwitch = (): void => {
    setIsEnabled(!isEnabled);
    setIsDarkMode(!isDarkMode);
  };

  useEffect((): void => {
    setPasswordLength(user.password.length);
  }, [user.password]);

  const submit = (): void => {
    console.log("change password");
  };

  const [userPassword, setUserPassword] = useState(user.password);

  const inputModals: ItemInputModalsModel[] = [
    {
      headerInput: "Nouveau mot de passe : ",
      value: userPassword,
      changeValue: setUserPassword,
      placeholder: "Mot de passe",
    },
  ];

  return (
    <View style={[styles.container]}>
      <WrapperText customStyle={styles.optionText} text={"Options"} />
      <View style={styles.optionContainer}>
        <View style={styles.option}>
          <WrapperText
            customStyle={styles.optionText}
            text={"Theme: " + (isDarkMode ? "Dark" : "Light")}
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
        <View style={styles.option}>
          <WrapperText customStyle={styles.optionText} text={"Mot de passe"} />
          <WrapperText text={"*".repeat(passwordLength)} />
          <ModalGeneric
            isVisible={modalChangePasswordVisible}
            setIsVisible={setModalChangePasswordVisible}
            submit={submit}
            btnContent="Changer de mot de passe"
            inputModals={inputModals}
            windowWidth={windowWidth}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  heading: {
    textAlign: "center",
    marginBottom: 10,
  },
  optionContainer: {
    backgroundColor: "#B3B3B3",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
    width: "100%",
  },
  option: {
    justifyContent: "space-between",
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
    height: 50,
  },
  optionText: {
    width: "auto",
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  switch: {
    marginRight: 15,
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
});

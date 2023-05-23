import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import OptionSettings from "../components/settings/OptionSettings";
import UserInformationBox from "../components/settings/UserInformationBox";
import { useDispatch, useSelector } from "react-redux";
import ModalGeneric from "../components/settings/ModalGeneric";
import {
  submitForm,
  updatePassword,
  updateUsername,
} from "../redux/actions/modal-connexion.actions";
import { ItemInputModalsModel } from "../models/input-modals.model";

interface SettingsProps {
  isDarkMode: boolean;
  setIsDarkMode: Function;
  theme: any;
  windowWidth: number;
}

export default function Settings(props: SettingsProps) {
  const { isDarkMode, setIsDarkMode, theme, windowWidth } = props;

  const user = useSelector((state: any) => state.modalConnexion);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalConnexionVisible, setModalConnexionVisible] = useState(false);

  const dispatch = useDispatch();

  const onChangeUsername = (newEmail: string): void => {
    setEmail(newEmail);
    dispatch(updateUsername(newEmail));
  };

  const onChangePassword = (newPassword: string): void => {
    setPassword(newPassword);
    dispatch(updatePassword(newPassword));
  };

  const submit = (): void => {
    setEmail("");
    setPassword("");
    dispatch(submitForm({ email, password }));
  };

  const inputModals: ItemInputModalsModel[] = [
    {
      headerInput: "Email : ",
      value: email,
      changeValue: onChangeUsername,
      placeholder: "Email",
    },
    {
      headerInput: "Password",
      value: password,
      changeValue: onChangePassword,
      placeholder: "Password",
    },
  ];

  return (
    <View style={[styles.container, theme.test]}>
      <View style={styles.spacing} />
      <UserInformationBox user={user} />
      <View style={styles.spacing} />
      <OptionSettings
        user={user}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        windowWidth={windowWidth}
      />
      <View style={styles.spacing} />
      <ModalGeneric
        isVisible={modalConnexionVisible}
        setIsVisible={setModalConnexionVisible}
        submit={submit}
        header="Connexion"
        inputModals={inputModals}
        btnContent="Connexion"
        windowWidth={windowWidth}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacing: {
    height: 50,
  },
});

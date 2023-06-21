import { useDispatch } from "react-redux";
import { ItemInputModalsModel } from "../../../models/input-modals.model";
import { connectUser } from "../../../redux/actions/user.action";
import ModalGeneric from "../modals/ModalGeneric";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import WrapperText from "../../wrappers/WrapperText";
import { UserModel } from "../../../models/user.model";
import { NameConnexionStyle } from "../../../styles/settings/informations/NameConnexion.style";

const styles = NameConnexionStyle;

interface NameConnexionProps {
  theme: Record<string, string>;
  user: UserModel;
  windowWidth: number;
  setPassword: Function;
  password: string;
}

export const NameConnexion = (props: NameConnexionProps) => {
  const { theme, user, windowWidth, setPassword, password } = props;
  const [modalConnexionVisible, setModalConnexionVisible] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const onChangeUsername = (newEmail: string): void => {
    setEmail(newEmail);
  };
  const onChangePassword = (newPassword: string): void => {
    setPassword(newPassword);
  };
  const inputModalsConnexion: ItemInputModalsModel[] = [
    {
      headerInput: "Email : ",
      value: email,
      changeValue: onChangeUsername,
      placeholder: "Email",
      secureTextEntry: false,
      showEyeInput: false,
    },
    {
      headerInput: "Password : ",
      value: password,
      changeValue: onChangePassword,
      placeholder: "Password",
      secureTextEntry: true,
      showEyeInput: true,
    },
  ];

  const submitConnexion = (): void => {
    setEmail("");
    setPassword("");
    //@ts-ignore
    dispatch(connectUser(email, password));
  };

  return (
    <View
      style={[styles.informations, , { backgroundColor: theme.navigation }]}
    >
      <WrapperText
        customStyle={[styles.informationsText, { color: theme.textPrimary }]}
        text={user?.name + " " + user?.surname}
        size={18}
      />
      <ModalGeneric
        theme={theme}
        isVisible={modalConnexionVisible}
        setIsVisible={setModalConnexionVisible}
        submit={submitConnexion}
        inputModals={inputModalsConnexion}
        btnContent={user === undefined ? "Déconnection" : "Connection"}
        windowWidth={windowWidth}
      />
    </View>
  );
};

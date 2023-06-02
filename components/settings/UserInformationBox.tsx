import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { UserModel } from "../../models/user.model";
import WrapperText from "../wrappers/WrapperText";
import ModalGeneric from "./ModalGeneric";
import { ItemInputModalsModel } from "../../models/input-modals.model";
import { useDispatch } from "react-redux";
import {
  changePassword,
  connectUser,
} from "../../redux/actions/modal-connexion.actions";

interface UserInformationBoxProps {
  user: UserModel;
  windowWidth: number;
}

export default function UserInformationBox(props: UserInformationBoxProps) {
  const { user, windowWidth } = props;
  const [modalConnexionVisible, setModalConnexionVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalChangePasswordVisible, setModalChangePasswordVisible] =
    useState(false);
  const [userPassword, setUserPassword] = useState(user.password);
  const dispatch = useDispatch();

  const submitPassWord = (): void => {
    setPassword("");
    //@ts-ignore
    dispatch(changePassword(user, userPassword));
  };

  const submitConnexion = (): void => {
    setEmail("");
    setPassword("");
    //@ts-ignore
    dispatch(connectUser(email, password));
  };

  const onChangeUsername = (newEmail: string): void => setEmail(newEmail);
  const onChangePassword = (newPassword: string): void =>
    setPassword(newPassword);

  const inputModalsConnexion: ItemInputModalsModel[] = [
    {
      headerInput: "Email : ",
      value: email,
      changeValue: onChangeUsername,
      placeholder: "Email",
      secureTextEntry: false,
    },
    {
      headerInput: "Password : ",
      value: password,
      changeValue: onChangePassword,
      placeholder: "Password",
      secureTextEntry: true,
    },
  ];

  const inputModalsPassword: ItemInputModalsModel[] = [
    {
      headerInput: "New Password : ",
      value: userPassword,
      changeValue: setUserPassword,
      placeholder: "Password",
      secureTextEntry: true,
    },
  ];

  return (
    <View>
      <View style={styles.mainContainerInfoBox}>
        <View style={styles.informationBox}>
          <View style={styles.informations}>
            <WrapperText
              customStyle={styles.informationsText}
              text={user.name + " " + user.surname}
              size={18}
            />
            <ModalGeneric
              isVisible={modalConnexionVisible}
              setIsVisible={setModalConnexionVisible}
              submit={submitConnexion}
              inputModals={inputModalsConnexion}
              btnContent={user === undefined ? "Déconnection" : "Connection"}
              windowWidth={windowWidth}
            />
          </View>
          <View style={styles.informations}>
            <WrapperText
              customStyle={styles.informationsText}
              text={user.email}
              size={12}
            />
          </View>
          <View style={styles.informations}>
            <WrapperText
              customStyle={styles.informationsText}
              text={"Password: "}
              size={18}
            />
            <WrapperText text={"*".repeat(user.password.length)} size={18} />
            <ModalGeneric
              isVisible={modalChangePasswordVisible}
              setIsVisible={setModalChangePasswordVisible}
              submit={submitPassWord}
              btnContent="Edit"
              inputModals={inputModalsPassword}
              windowWidth={windowWidth}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainerInfoBox: {
    alignItems: "center",
    display: "flex",
    marginHorizontal: 5,
  },
  informationBox: {
    width: "100%",
    backgroundColor: "#FFFFFF",
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
  headerCard: {
    textAlign: "center",
  },
});

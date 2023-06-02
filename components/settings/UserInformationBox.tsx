import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { UserModel } from "../../models/user.model";
import WrapperText from "../wrappers/WrapperText";
import ModalGeneric from "./ModalGeneric";
import { ItemInputModalsModel } from "../../models/input-modals.model";
import { useDispatch } from "react-redux";
import { submitForm, updatePassword, updateUsername } from "../../redux/actions/modal-connexion.actions";

interface UserInformationBoxProps {
  user: UserModel;
  windowWidth: number;
}

export default function UserInformationBox(props: UserInformationBoxProps) {
  const { user, windowWidth } = props;
  const [passwordLength, setPasswordLength] = useState(0);
  const [modalConnexionVisible, setModalConnexionVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const [modalChangePasswordVisible, setModalChangePasswordVisible] =
    useState(false);

  useEffect((): void => {
    setPasswordLength(user.password.length);
  }, [user.password]);

  const submitPassWord = (): void => {
    console.log("changing password");
  };

  const submitUser = (): void => {
    setEmail("");
    setPassword("");
    dispatch(submitForm({ email, password }));
  };

  const onChangeUsername = (newEmail: string): void => {
    setEmail(newEmail);
    dispatch(updateUsername(newEmail));
  };

  const onChangePassword = (newPassword: string): void => {
    setPassword(newPassword);
    dispatch(updatePassword(newPassword));
  };

  const inputModalsUser: ItemInputModalsModel[] = [
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

  const [userPassword, setUserPassword] = useState(user.password);

  const inputModalsPassword: ItemInputModalsModel[] = [
    {
      headerInput: "New Password : ",
      value: userPassword,
      changeValue: setUserPassword,
      placeholder: "Password",
    },
  ];
  

  return (
    <View>
      <View style={styles.mainContainerInfoBox}>
        <View style={styles.informationBox}>
          <View style={styles.informations}>
            <WrapperText
              customStyle={styles.informationsText}
              text={user.name + " " + user.surname }
              size={18}
            />
            <ModalGeneric
            isVisible={modalConnexionVisible}
            setIsVisible={setModalConnexionVisible}
            submit={submitUser}
            inputModals={inputModalsUser}
            btnContent="Connection"
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
          <WrapperText customStyle={styles.informationsText} text={"Password: "} size={18} />
          <WrapperText text={"*".repeat(passwordLength)} size={18} />
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
    marginHorizontal:5,

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

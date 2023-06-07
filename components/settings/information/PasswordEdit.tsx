import WrapperText from "../../wrappers/WrapperText";
import ModalGeneric from "../modals/ModalGeneric";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ItemInputModalsModel } from "../../../models/input-modals.model";
import { UserModel } from "../../../models/user.model";
import React from "react";

interface PasswordEditProps {
  theme: Record<string, string>;
  windowWidth: number;
  setPassword: Function;
  user: UserModel;
}

export const PasswordEdit = (props: PasswordEditProps) => {
  const { theme, windowWidth, setPassword, user } = props;
  const dispatch = useDispatch();
  const [userPassword, setUserPassword] = useState(user?.password);
  const [modalChangePasswordVisible, setModalChangePasswordVisible] =
    useState(false);

  const submitPassWord = (): void => {
    setPassword("");
    //@ts-ignore
    dispatch(changePassword(user, userPassword));
  };

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
    <View style={styles.informations}>
      <WrapperText
        customStyle={[styles.informationsText, { color: theme.textPrimary }]}
        text={"Password: "}
        size={18}
      />
      <WrapperText
        text={"*".repeat(user?.password?.length)}
        size={18}
        customStyle={{ color: theme.textPrimary }}
      />
      <ModalGeneric
        theme={theme}
        isVisible={modalChangePasswordVisible}
        setIsVisible={setModalChangePasswordVisible}
        submit={submitPassWord}
        btnContent="Edit"
        inputModals={inputModalsPassword}
        windowWidth={windowWidth}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  informations: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  informationsText: {
    paddingLeft: 10,
  },
});

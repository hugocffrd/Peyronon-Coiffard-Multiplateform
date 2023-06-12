import { FlatList } from "react-native";
import React from "react";
import { Modal, StyleSheet, View, Platform } from "react-native";
import { Button } from "react-native-paper";
import { ItemInputModalsModel } from "../../../models/input-modals.model";
import InputModalSettings from "./InputModalSettings";
import WrapperText from "../../wrappers/WrapperText";
import { UserModel } from "../../../models/user.model";

interface ModalGenericProps {
  isVisible: boolean;
  setIsVisible: Function;
  submit: Function;
  inputModals: ItemInputModalsModel[];
  windowWidth: number;
  btnContent: string;
  theme: Record<string, string>;
  user: UserModel;
}

export default function ModalGeneric(props: ModalGenericProps) {
  const {
    user,
    isVisible,
    setIsVisible,
    submit,
    inputModals,
    windowWidth,
    btnContent,
    theme,
  } = props;

  const isOnPhone =
    Platform.OS === "android" ||
    Platform.OS === "ios" ||
    Platform.OS === "macos";
  return (
    <View style={styles.modalCenteredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={(): void => {
          setIsVisible(!isVisible);
        }}
      >
        <View style={styles.modalCenteredView}>
          <View
            style={[
              styles.modalContent,
              {
                width: windowWidth * 0.8,
                backgroundColor: theme.modalBackground,
              },
            ]}
          >
            <FlatList
              keyExtractor={(item) => item.headerInput}
              data={inputModals}
              renderItem={(item) => (
                <InputModalSettings
                  submit={submit}
                  theme={theme}
                  inputModals={item}
                  windowWidth={windowWidth}
                  isVisible={isVisible}
                  setIsVisible={setIsVisible}
                />
              )}
            />

            <View style={styles.modalBtnContainer}>
              <Button
                style={[
                  styles.modal,
                  {
                    backgroundColor: theme.buttonBackground,
                    borderColor: theme.buttonBorderColor,
                  },
                ]}
                mode="contained"
                onPress={() => setIsVisible(!isVisible)}
              >
                <WrapperText
                  text={"Close"}
                  size={20}
                  customStyle={[
                    styles.modalBtnText,
                    { color: theme.buttonColorText },
                  ]}
                ></WrapperText>
              </Button>
              <Button
                style={[
                  styles.modal,
                  {
                    backgroundColor: theme.buttonBackground,
                    borderColor: theme.buttonBorderColor,
                  },
                ]}
                mode="contained"
                onPress={() => {
                  setIsVisible(!isVisible);
                  submit();
                }}
              >
                <WrapperText
                  text={"Validate"}
                  size={20}
                  customStyle={[
                    styles.modalBtnText,
                    { color: theme.buttonColorText },
                  ]}
                ></WrapperText>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
      <Button
        mode="contained"
        disabled={user?.email === ""}
        style={[
          styles.modal,
          {
            alignSelf: btnContent === "Connexion" ? "center" : "flex-end",
            backgroundColor: theme.buttonBackground,
            borderColor: theme.buttonBorderColor,
          },
        ]}
        onPress={() => setIsVisible(true)}
      >
        <WrapperText
          text={btnContent}
          size={15}
          customStyle={[styles.modalBtnText, { color: theme.buttonColorText }]}
        ></WrapperText>
      </Button>
      {isOnPhone}
    </View>
  );
}

const styles = StyleSheet.create({
  modalCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalContent: {
    backgroundColor: "white",
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
    width: 150,
    borderRadius: 20,
    padding: 5,
  },
  modalBtnText: {
    color: "black",
    textAlign: "center",
  },
});

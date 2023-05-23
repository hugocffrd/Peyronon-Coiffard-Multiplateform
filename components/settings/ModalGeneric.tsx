import { FlatList } from "react-native";
import React from "react";
import {
  Modal,
  StyleSheet,
  Pressable,
  View,
  Dimensions,
  Platform,
} from "react-native";
import WrapperText from "../wrappers/WrapperText";
import { ItemInputModalsModel } from "../../models/input-modals.model";
import InputModalSettings from "./InputModalSettings";

interface ModalGenericProps {
  isVisible: boolean;
  setIsVisible: Function;
  submit: Function;
  inputModals: ItemInputModalsModel[];
  windowWidth: number;
  btnContent: string;
}

export default function ModalGeneric(props: ModalGenericProps) {
  const {
    isVisible,
    setIsVisible,
    submit,
    inputModals,
    windowWidth,
    btnContent,
  } = props;

  const isOnPhone =
    Platform.OS === "android" ||
    Platform.OS === "ios" ||
    Platform.OS === "macos";
  const fontSize = Dimensions.get("window").width;
  return (
    <View style={styles.modalCenteredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(!isVisible);
        }}
      >
        <View style={styles.modalCenteredView}>
          <View style={[styles.modalContent, { width: windowWidth * 0.8 }]}>
            <FlatList
              keyExtractor={(item) => item.headerInput}
              data={inputModals}
              renderItem={(item) => (
                <InputModalSettings
                  inputModals={item}
                  windowWidth={windowWidth}
                />
              )}
            />

            <View style={styles.modalBtnContainer}>
              <Pressable
                style={styles.modal}
                onPress={() => setIsVisible(!isVisible)}
              >
                <WrapperText
                  customStyle={[
                    styles.modalBtnText,
                    {
                      fontSize: isOnPhone ? fontSize * 0.05 : fontSize * 0.02,
                    },
                  ]}
                  text="Close"
                />
              </Pressable>
              <Pressable
                style={styles.modal}
                onPress={() => {
                  setIsVisible(!isVisible);
                  submit();
                }}
              >
                <WrapperText
                  customStyle={[
                    styles.modalBtnText,
                    {
                      fontSize: isOnPhone ? fontSize * 0.05 : fontSize * 0.02,
                    },
                  ]}
                  text="Validate"
                />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[
          styles.modal,
          { alignSelf: btnContent === "Connexion" ? "center" : "flex-end" },
        ]}
        onPress={() => setIsVisible(true)}
      >
        <WrapperText
          customStyle={[
            styles.modalBtnText,
            {
              fontSize: isOnPhone ? fontSize * 0.02 : fontSize * 0.01,
            },
          ]}
          text={btnContent}
        />
      </Pressable>
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
    backgroundColor: "#007bfe",
    borderRadius: 20,
    padding: 5,
    color: "white",
    width: "auto",
  },
  modalBtnText: {
    color: "black",
    textAlign: "center",
  },
});

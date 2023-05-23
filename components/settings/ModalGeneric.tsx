import { FlatList } from "react-native";
import React from "react";
import { Modal, StyleSheet, Pressable, View } from "react-native";
import WrapperText from "../wrappers/WrapperText";
import { ItemInputModalsModel } from "../../models/input-modals.model";
import InputModalSettings from "./InputModalSettings";

interface ModalGenericProps {
  isVisible: boolean;
  setIsVisible: Function;
  submit: Function;
  inputModals: ItemInputModalsModel[];
  header: string;
  windowWidth: number;
  btnContent: string;
}

export default function ModalGeneric(props: ModalGenericProps) {
  const {
    isVisible,
    setIsVisible,
    submit,
    inputModals,
    header,
    windowWidth,
    btnContent,
  } = props;

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
            <View>
              <WrapperText
                customStyle={styles.modalHeaderTitle}
                text={header}
              />
            </View>
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
                <WrapperText customStyle={styles.modalBtnText} text="Close" />
              </Pressable>
              <Pressable
                style={styles.modal}
                onPress={() => {
                  setIsVisible(!isVisible);
                  submit();
                }}
              >
                <WrapperText
                  customStyle={styles.modalBtnText}
                  text="Validate"
                />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable style={styles.modal} onPress={() => setIsVisible(true)}>
        <WrapperText customStyle={styles.modalBtnText} text={btnContent} />
      </Pressable>
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
    backgroundColor: "#007bfe",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    color: "white",
  },
  modalBtnText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 10,
    fontSize: 15,
  },
  modalHeaderTitle: {
    marginBottom: 20,
    textAlign: "center",
    borderColor: "black",
    borderRadius: 20,
    height: 40,
  },
});

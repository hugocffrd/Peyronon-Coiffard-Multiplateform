import { TextInput, StyleSheet, View } from "react-native";
import React from "react";
import WrapperText from "../../wrappers/WrapperText";
import { InputModalsModel } from "../../../models/input-modals.model";

interface InputModalProps {
  inputModals: InputModalsModel;
  windowWidth: number;
}

export default function InputModalSettings(props: InputModalProps) {
  return (
    <View>
      <WrapperText
        customStyle={styles.modalLabelText}
        text={props.inputModals.item.headerInput}
        size={props.windowWidth * 0.01}
      />
      <TextInput
        style={[styles.modalTextInput, { width: props.windowWidth * 0.4 }]}
        value={props.inputModals.item.value}
        secureTextEntry={props.inputModals.item.secureTextEntry}
        placeholder={props.inputModals.item.placeholder}
        onChangeText={props.inputModals.item.changeValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalTextInput: {
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    color: "black",
    placeholderTextColor: "black",
  },

  modalLabelText: {
    textAlign: "center",
  },
});

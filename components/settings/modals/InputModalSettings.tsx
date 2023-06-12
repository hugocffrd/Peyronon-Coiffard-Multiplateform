import { StyleSheet, View } from "react-native";
import React from "react";
import WrapperText from "../../wrappers/WrapperText";
import { InputModalsModel } from "../../../models/input-modals.model";
import { TextInput } from "react-native-paper";

interface InputModalProps {
  inputModals: InputModalsModel;
  windowWidth: number;
  theme: Record<string, string>;
  submit: Function;
  isVisible: boolean;
  setIsVisible: Function;
}

export default function InputModalSettings(props: InputModalProps) {
  const { theme, submit, isVisible, setIsVisible } = props;

  function onSubmit(): void {
    setIsVisible(!isVisible);
    submit();
  }
  return (
    <View>
      <WrapperText
        customStyle={[styles.modalLabelText, { color: theme.modalText }]}
        text={props.inputModals.item.headerInput}
        size={props.windowWidth * 0.01}
      />
      <TextInput
        style={[styles.modalTextInput, { width: props.windowWidth * 0.4 }]}
        value={props.inputModals.item.value}
        secureTextEntry={props.inputModals.item.secureTextEntry}
        placeholder={props.inputModals.item.placeholder}
        onChangeText={props.inputModals.item.changeValue}
        onSubmitEditing={() => onSubmit()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalTextInput: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  modalLabelText: {
    marginBottom: 5,
    textAlign: "center",
  },
});

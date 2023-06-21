import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import WrapperText from "../../wrappers/WrapperText";
import { InputModalsModel } from "../../../models/input-modals.model";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { InputModalSettingsStyle } from "../../../styles/settings/modal/InputModalSettings.style";

const styles = InputModalSettingsStyle;

interface InputModalProps {
  inputModals: InputModalsModel;
  windowWidth: number;
  theme: Record<string, string>;
  submit: Function;
  isVisible: boolean;
  setIsVisible: Function;
}

export default function InputModalSettings(props: InputModalProps) {
  const { theme, submit, isVisible, setIsVisible, inputModals } = props;
  const [showPassword, setShowPassword] = useState(
    inputModals.item.showEyeInput === undefined
      ? true
      : inputModals.item.showEyeInput
  );

  const onSubmit = (): void => {
    setIsVisible(!isVisible);
    submit();
  };

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <WrapperText
        customStyle={[styles.modalLabelText, { color: theme.modalText }]}
        text={props.inputModals.item.headerInput}
        size={20}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.modalTextInput, { width: props.windowWidth * 0.5 }]}
          value={props.inputModals.item.value}
          secureTextEntry={showPassword}
          placeholder={inputModals.item.placeholder}
          onChangeText={inputModals.item.changeValue}
          onSubmitEditing={() => onSubmit()}
        />
        {inputModals.item.showEyeInput ? (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={togglePasswordVisibility}
          >
            <Ionicons
              style={styles.iconPassword}
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
}

import { Button } from "react-native-paper";
import { View } from "react-native";
import React from "react";
import WrapperText from "./WrapperText";
import { ButtonModalStyle } from "../../styles/wrappers/ButtonModal.style";
const styles = ButtonModalStyle;

interface ButtonModalProps {
  theme: Record<string, string>;
  setIsVisible: Function;
  isVisible: boolean;
  submit?: Function;
  showValidate?: boolean;
}

export const ButtonModal = (props: ButtonModalProps) => {
  const { theme, setIsVisible, isVisible, submit, showValidate } = props;
  const showValidateBtn = showValidate ?? true;
  return (
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
        onPress={() => {
          setIsVisible(!isVisible);
        }}
      >
        <WrapperText
          text={"Close"}
          size={20}
          customStyle={[styles.modalBtnText, { color: theme.buttonColorText }]}
        ></WrapperText>
      </Button>
      {showValidateBtn ? (
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
      ) : null}
    </View>
  );
};

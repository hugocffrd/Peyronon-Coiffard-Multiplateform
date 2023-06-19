import React, { useState } from "react";
import { Dimensions, Modal, View } from "react-native";
import { Button } from "react-native-paper";
import WrapperText from "../wrappers/WrapperText";
import { ButtonModal } from "../wrappers/ButtonModal";
import { CagnoteModel } from "../../models/cagnote.model";
import { useSelector } from "react-redux";
import { CagnoteItem } from "../cagnote/CagnoteItem";
import { UserModel } from "../../models/user.model";
import { AnimalModalCagnoteStyle } from "../../styles/animal/AnimalModalCagnote.style";
const styles = AnimalModalCagnoteStyle;

interface AnimalModalCagnoteProps {
  btnContent: string;
  theme: Record<string, string>;
  cagnote: CagnoteModel;
}
const windowWidth = Dimensions.get("window").width;

export const AnimalModalCagnote = (props: AnimalModalCagnoteProps) => {
  const { btnContent, theme, cagnote } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  //@ts-ignore
  const user: UserModel = useSelector((state) => state.userReducer.user);

  return (
    <View style={styles.modalCenteredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalOpen}
        onRequestClose={(): void => {
          setIsModalOpen(!isModalOpen);
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
            <CagnoteItem theme={theme} item={{ ...cagnote }} user={user} />
            <View style={styles.modalBtnContainer}>
              <ButtonModal
                showValidate={false}
                theme={theme}
                isVisible={isModalOpen}
                setIsVisible={setIsModalOpen}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Button
        mode="contained"
        style={[
          styles.modal,
          {
            backgroundColor: theme.buttonBackground,
            borderColor: theme.buttonBorderColor,
          },
        ]}
        onPress={() => setIsModalOpen(true)}
      >
        <WrapperText
          text={btnContent}
          size={15}
          customStyle={[styles.modalBtnText, { color: theme.buttonColorText }]}
        ></WrapperText>
      </Button>
    </View>
  );
};

import React, { useState } from "react";
import {
  TextInput,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
} from "react-native";
export default function ModalChangePassword(props) {
  const { user, fontSize } = props;
  const [userPassword, setUserPassword] = useState(user.password);
  const [modalChangePasswordVisible, setModalChangePasswordVisible] =
    useState(false);

  const onChangePassword = (newPassword: string): void => {
    setUserPassword(newPassword);
  };

  const submit = (): void => {
    console.log("change password");
  };

  return (
    <View style={styles.modalCenteredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalChangePasswordVisible}
        onRequestClose={() => {
          setModalChangePasswordVisible(!modalChangePasswordVisible);
        }}
      >
        <View style={styles.modalCenteredView}>
          <View style={styles.modalContent}>
            <View>
              <Text style={[styles.modalHeaderTitle, { fontSize }]}>
                Changement de mot de passe
              </Text>
            </View>
            <View>
              <Text style={styles.modalLabelText}>Nouveau mot de passe : </Text>
              <TextInput
                style={styles.modalTextInput}
                value={userPassword}
                secureTextEntry={true}
                placeholder="Nouveau mot de passe"
                onChangeText={onChangePassword}
              />
            </View>
            <View style={styles.modalBtnContainer}>
              <Pressable
                style={styles.modal}
                onPress={() =>
                  setModalChangePasswordVisible(!modalChangePasswordVisible)
                }
              >
                <Text style={styles.modalBtnText}>Close</Text>
              </Pressable>
              <Pressable
                style={styles.modal}
                onPress={() => {
                  setModalChangePasswordVisible(!modalChangePasswordVisible);
                  submit();
                }}
              >
                <Text style={styles.modalBtnText}>Validate</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.modal}
        onPress={() => setModalChangePasswordVisible(true)}
      >
        <Text style={styles.modalBtnText}>Changer de mot de passe</Text>
      </Pressable>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  modalCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalContent: {
    width: windowWidth * 0.8,
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
  modalTextInput: {
    width: windowWidth * 0.7,
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    color: "black",
    placeholderTextColor: "black",
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
  },
  modalHeaderTitle: {
    marginBottom: 20,
    textAlign: "center",
    borderColor: "black",
    borderRadius: 20,
    height: 40,
  },
  modalLabelText: {
    textAlign: "center",
  },
});

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

export default function ModalConnexion(props) {
  const { fontSize } = props;
  const { modalVisible } = props;
  const { setModalVisible } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (event): void => {
    setUsername(event);
  };

  const onChangePassword = (event): void => {
    setPassword(event);
  };

  const submit = (): void => {
    setUsername("");
    setPassword("");
  };

  return (
    <View style={styles.modalCenteredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalCenteredView}>
          <View style={styles.modalContent}>
            <View>
              <Text style={[styles.modalHeaderTitle, { fontSize }]}>
                Connexion
              </Text>
            </View>
            <View>
              <Text style={styles.modalLabelText}>Username : </Text>
              <TextInput
                style={styles.modalTextInput}
                value={username}
                placeholder="Username"
                onChangeText={onChangeUsername}
              />
              <Text style={styles.modalLabelText}>Password : </Text>
              <TextInput
                style={styles.modalTextInput}
                value={password}
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={onChangePassword}
              />
            </View>
            <View style={styles.modalBtnContainer}>
              <Pressable
                style={styles.buttonModal}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.modalBtnText}>Close</Text>
              </Pressable>
              <Pressable
                style={styles.buttonModal}
                onPress={() => {
                  setModalVisible(!modalVisible);
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
        style={styles.buttonModal}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.modalBtnText}>Connexion</Text>
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
  buttonModal: {
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

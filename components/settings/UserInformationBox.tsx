import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UserInformationBox(props) {
  const { fontSize, user } = props;
  return (
    <View>
      <Text style={[{ textAlign: "center" }, { fontSize }]}>Informations</Text>
      <View style={styles.mainContainerInfoBox}>
        <View style={styles.informationBox}>
          <View style={styles.informations}>
            <Text style={[styles.informationsText, { fontSize }]}>
              Nom: {user.name}
            </Text>
          </View>
          <View style={styles.informations}>
            <Text style={[styles.informationsText, { fontSize }]}>
              Prenom: {user.surname}
            </Text>
          </View>
          <View style={styles.informations}>
            <Text style={[styles.informationsText, { fontSize }]}>
              Email: {user.email}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainerInfoBox: {
    alignItems: "center",
    display: "flex",
  },
  informationBox: {
    width: "80%",
    backgroundColor: "#B3B3B3",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 20,
  },
  informations: {
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 10,
    height: 50,
  },
  informationsText: {
    fontSize: 15,
    paddingLeft: 10,
  },
});

import React from "react";
import { StyleSheet, View } from "react-native";
import { UserModel } from "../../models/user.model";
import WrapperText from "../wrappers/WrapperText";

interface UserInformationBoxProps {
  user: UserModel;
}

export default function UserInformationBox(props: UserInformationBoxProps) {
  const { user } = props;
  return (
    <View>
      <WrapperText customStyle={styles.headerCard} text="Informations" />
      <View style={styles.mainContainerInfoBox}>
        <View style={styles.informationBox}>
          <View style={styles.informations}>
            <WrapperText
              customStyle={styles.informationsText}
              text={"Nom:" + user.name}
            />
          </View>
          <View style={styles.informations}>
            <WrapperText
              customStyle={styles.informationsText}
              text={"Prenom:" + user.surname}
            />
          </View>
          <View style={styles.informations}>
            <WrapperText
              customStyle={styles.informationsText}
              text={"Email:" + user.email}
            />
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
    paddingLeft: 10,
  },
  headerCard: {
    textAlign: "center",
  },
});

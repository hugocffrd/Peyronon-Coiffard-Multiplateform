import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { UserModel } from "../../models/user.model";
import WrapperText from "../wrappers/WrapperText";
import { NameConnexion } from "./information/NameConnexion";
import { PasswordEdit } from "./information/PasswordEdit";

interface UserInformationBoxProps {
  user: UserModel;
  windowWidth: number;
  theme: Record<string, string>;
}

export default function UserInformationBox(props: UserInformationBoxProps) {
  const { user, windowWidth, theme } = props;
  const [password, setPassword] = useState("");

  return (
    <View
      style={[
        styles.mainContainerInfoBox,
        { backgroundColor: theme.navigation },
      ]}
    >
      <View
        style={[styles.informationBox, , { backgroundColor: theme.navigation }]}
      >
        <NameConnexion
          theme={theme}
          windowWidth={windowWidth}
          user={user}
          password={password}
          setPassword={setPassword}
        />
        <View style={styles.informations}>
          <WrapperText
            customStyle={[
              styles.informationsText,
              { color: theme.textPrimary },
            ]}
            text={user?.email}
            size={18}
          />
        </View>
        <View style={styles.lineStyle} />
        <PasswordEdit
          theme={theme}
          setPassword={setPassword}
          windowWidth={windowWidth}
          user={user}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainerInfoBox: {
    alignItems: "center",
    display: "flex",
    marginHorizontal: 5,
  },
  informationBox: {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  informations: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  informationsText: {
    paddingLeft: 10,
  },

  lineStyle: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#eeeeee",
    margin: 10,
  },
});

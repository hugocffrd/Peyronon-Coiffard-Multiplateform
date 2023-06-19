import React, { useState } from "react";
import { View } from "react-native";
import { UserModel } from "../../models/user.model";
import { UserInformationBoxStyle } from "../../styles/settings/UserInformationBox.style";
import WrapperText from "../wrappers/WrapperText";
import { NameConnexion } from "./information/NameConnexion";
import { PasswordEdit } from "./information/PasswordEdit";
const styles = UserInformationBoxStyle;

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

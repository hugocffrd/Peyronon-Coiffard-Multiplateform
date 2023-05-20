import React from "react";
import { StyleSheet, View } from "react-native";
import ModalConnexion from "../components/settings/ModalConnexion";
import OptionSettings from "../components/settings/OptionSettings";
import UserInformationBox from "../components/settings/UserInformationBox";
import { useSelector } from "react-redux";

export default function Settings(props) {
  const { fontSize, isDarkMode, setIsDarkMode, theme } = props;

  const user = useSelector((state: any) => state.modalConnexion);
  return (
    <View style={[styles.container, theme.test]}>
      <View style={styles.spacing} />
      <UserInformationBox user={user} fontSize={fontSize} />
      <View style={styles.spacing} />
      <OptionSettings
        user={user}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        fontSize={fontSize}
      />
      <View style={styles.spacing} />
      <ModalConnexion fontSize={fontSize} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacing: {
    height: 50,
  },
});

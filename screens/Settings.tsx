import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import OptionSettings from "../components/settings/OptionSettings";
import UserInformationBox from "../components/settings/UserInformationBox";
import { useDispatch, useSelector } from "react-redux";

interface SettingsProps {
  isDarkMode: boolean;
  setIsDarkMode: Function;
  theme: any;
  windowWidth: number;
}

export default function Settings(props: SettingsProps) {
  const { isDarkMode, setIsDarkMode, theme, windowWidth } = props;

  //@ts-ignore
  const user = useSelector((state) => state.modalConnexionReducer.user);

  return (
    <View style={styles.container}>
      <View style={styles.spacing} />
      <UserInformationBox user={user} windowWidth={windowWidth} />
      <OptionSettings
        user={user}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        windowWidth={windowWidth}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacing: {
    height: "8%",
  },
});

import React from "react";
import { StyleSheet, View } from "react-native";
import OptionSettings from "../components/settings/OptionSettings";
import UserInformationBox from "../components/settings/UserInformationBox";
import { useSelector } from "react-redux";

interface SettingsProps {
  isDarkMode: boolean;
  setIsDarkMode: Function;
  theme: any;
  windowWidth: number;
}

export default function Settings(props: SettingsProps) {
  const { isDarkMode, setIsDarkMode, theme, windowWidth } = props;

  //@ts-ignore
  const user = useSelector((state) => state.userReducer.user);
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.spacing} />
      <UserInformationBox user={user} windowWidth={windowWidth} theme={theme} />
      <OptionSettings
        theme={theme}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacing: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});

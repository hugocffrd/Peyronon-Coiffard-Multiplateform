import React from "react";
import { View } from "react-native";
import OptionSettings from "../components/settings/OptionSettings";
import UserInformationBox from "../components/settings/UserInformationBox";
import { useSelector } from "react-redux";
import { SettingsStyle } from "../styles/SettingsScreen.style";
const styles = SettingsStyle;

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

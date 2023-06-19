import React, { useState } from "react";
import { View, Switch } from "react-native";
import { OptionSettingsStyle } from "../../styles/settings/OptionsSettings.style";
import WrapperText from "../wrappers/WrapperText";
const styles = OptionSettingsStyle;

interface OptionsSettingsProps {
  isDarkMode: boolean;
  setIsDarkMode: Function;
  theme: Record<string, string>;
}

export default function OptionSettings(props: OptionsSettingsProps) {
  const { isDarkMode, setIsDarkMode, theme } = props;
  const [isEnabled, setIsEnabled] = useState(isDarkMode);

  const toggleSwitch = (): void => {
    setIsEnabled(!isEnabled);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.contentBlock }]}>
      <View
        style={[
          styles.optionContainer,
          { backgroundColor: theme.contentBlock },
        ]}
      >
        <View style={[styles.option, { backgroundColor: theme.contentBlock }]}>
          <WrapperText
            customStyle={[styles.optionText, { color: theme.textPrimary }]}
            text={"Theme : " + (isDarkMode ? "dark" : "light")}
            size={18}
          />

          <Switch
            trackColor={{ false: "#000", true: "#FFF" }}
            thumbColor={isEnabled ? "#000" : "#FFF"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch}
          />
        </View>
      </View>
    </View>
  );
}

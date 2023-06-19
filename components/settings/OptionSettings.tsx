import React, { useState } from "react";
import { StyleSheet, View, Switch } from "react-native";
import WrapperText from "../wrappers/WrapperText";

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

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 5,
    marginTop: 10,
    borderRadius: 10,
  },
  optionContainer: {
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    width: "100%",
  },
  option: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
    height: 50,
  },
  optionText: {
    width: "auto",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  switch: {
    marginRight: 15,
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
});

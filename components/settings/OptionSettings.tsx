import React, { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../../theme/theme";
import { StyleSheet, Text, View, Dimensions, Switch } from "react-native";
import ModalChangePassword from "./ModalChangePassword";
export default function OptionSettings(props) {
  const { fontSize, isDarkMode, setIsDarkMode, user } = props;
  const [isEnabled, setIsEnabled] = useState(isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [passwordLength, setPasswordLength] = useState(0);

  const toggleSwitch = (): void => {
    setIsEnabled(!isEnabled);
    setIsDarkMode(!isDarkMode);
  };

  useEffect((): void => {
    setPasswordLength(user.password.length);
  }, [user.password]);

  return (
    <View style={[styles.container]}>
      <Text style={[styles.heading, { fontSize }]}>Options</Text>
      <View style={styles.optionContainer}>
        <View style={styles.option}>
          <Text style={[styles.optionText, { fontSize }]}>
            Theme {isDarkMode ? "Dark" : "Light"}
          </Text>
          <View>
            <Text style={theme.test}>Test</Text>
          </View>
          <Switch
            trackColor={{ false: "black", true: "white" }}
            thumbColor={isEnabled ? "black" : "white"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch()}
            value={isEnabled}
            style={styles.switch}
          />
        </View>
        <View style={styles.option}>
          <Text style={[styles.optionText, { fontSize }]}>Mot de passe </Text>
          <Text>{"*".repeat(passwordLength)}</Text>
          <ModalChangePassword fontSize={fontSize} user={user} />
        </View>
      </View>
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  heading: {
    textAlign: "center",
    marginBottom: 10,
  },
  optionContainer: {
    width: screenWidth * 0.8,
    backgroundColor: "#B3B3B3",
    alignItems: "center",
    borderRadius: 20,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
    height: 50,
  },
  optionText: {
    width: "auto",
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
});

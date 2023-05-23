import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import WrapperText from "../wrappers/WrapperText";

export default function HeaderNavigation(props) {
  return (
    <View style={styles.headerNavigationContainer}>
      <Ionicons
        name="arrow-back"
        onPress={() => props.navigation.navigate("Home")}
        style={[
          styles.navigationBackBtn,
          { display: props.title !== "Home" ? "flex" : "none" },
          { fontSize: props.windowWidth * 0.02 },
        ]}
      />
      <WrapperText customStyle={styles.navigationTitle} text={props.title} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerNavigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  navigationTitle: {
    position: "absolute",
    left: 70,
    fontWeight: "bold",
    top: Platform.OS === "ios" ? 70 : 0,
  },
  navigationBackBtn: {
    position: "absolute",
    left: 20,
    top: Platform.OS === "ios" ? 70 : 10,
  },
});

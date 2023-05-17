import React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HeaderNavigation(props) {
  return (
    <View style={styles.headerNavigationContainer}>
      <Ionicons
        style={[
          styles.navigationBackBtn,
          { display: props.title !== "Home" ? "flex" : "none" },
          { fontSize: props.windowWidth * 0.05 },
        ]}
        name="arrow-back"
        onPress={() => props.navigation.navigate("Home")}
      />
      <Text
        style={[styles.navigationTitle, { fontSize: props.windowWidth * 0.05 }]}
      >
        {props.title}
      </Text>
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

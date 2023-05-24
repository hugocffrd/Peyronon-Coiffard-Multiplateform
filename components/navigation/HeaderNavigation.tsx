import React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HeaderNavigation(props){
  return (
    <SafeAreaView style={styles.headerNavigationContainer}>
      <Ionicons
        style={[styles.navigationBackBtn,{ display: props.title !== "Home" ? "flex" : "none" }]}
        name="arrow-back"
        onPress={() => props.navigation.navigate("Home")}/>
      <Text
        style={[styles.navigationTitle]}>
        {props.title}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerNavigationContainer: {
    top:20,
    left:20,
    verticalAlign:"middle",
    flexDirection: "row",
    alignItems: "center",
    height: 100,
  },
  navigationTitle: {
    fontSize : 30,
    fontWeight: "bold",
    top: Platform.OS === "ios" ? 70 : 0,
  },
  navigationBackBtn: {
    marginRight:10,
    fontSize : 30,
    top: Platform.OS === "ios" ? 70 : 0,
  },
});

import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import WrapperText from "../wrappers/WrapperText";

export default function HeaderNavigation(props){
  return (
    <View style={styles.headerNavigationContainer}>
      <Ionicons
        name="arrow-back"
        onPress={() => props.navigation.navigate("Home")}
        style={[
          styles.navigationBackBtn,
          { display: props.title !== "Home" ? "flex" : "none" },
          { fontSize: 30 },
        ]}
      />
      <WrapperText
        customStyle={styles.navigationTitle}
        text={props.title}
        size={30}
      />
   </View>
  );
}

const styles = StyleSheet.create({
  headerNavigationContainer: {
    top:10,
    left:20,
    flexDirection: "row",
    alignItems: "center",
    height: 60,
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

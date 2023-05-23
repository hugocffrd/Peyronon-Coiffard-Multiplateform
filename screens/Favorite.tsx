import React from "react";
import { View } from "react-native";
import WrapperText from "../components/wrappers/WrapperText";

export default function Favorite(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <WrapperText text={"Favoris"} />
    </View>
  );
}

import { Dimensions, Text } from "react-native";
import React from "react";

export default function WrapperText(props) {
  const fontSize =
    props.size !== undefined
      ? props.size
      : Dimensions.get("window").width * 0.02;
  return <Text style={[{ fontSize }, props.customStyle]}>{props.text}</Text>;
}

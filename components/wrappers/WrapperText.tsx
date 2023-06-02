import { Dimensions, Text } from "react-native";
import React, { useEffect, useState } from "react";

export default function WrapperText(props) {
  let fontSize;
  useEffect(() => {
    fontSize =
      props.size !== undefined
        ? props.size
        : Dimensions.get("window").width * 0.02;
    Dimensions.addEventListener("change", () => {
      fontSize = Math.round((Dimensions.get("window").width * 15) / 375);
    });
  });

  return <Text style={[{ fontSize }, props.customStyle]}>{props.text}</Text>;
}

import { Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Paragraph } from "react-native-paper";

export default function WrapperText(props) {
  const [fontSize, setFontSize] = useState(
    props.size !== undefined
      ? props.size
      : Math.round((Dimensions.get("window").width * 10) / 375)
  );

  useEffect(() => {
    const updateFontSize = () => {
      setFontSize(Math.round((Dimensions.get("window").width * 10) / 375));
    };

    Dimensions.addEventListener("change", updateFontSize);

    return () => {};
  }, []);

  return (
    <Paragraph style={[{ fontSize }, props.customStyle]}>
      {props.text}
    </Paragraph>
  );
}

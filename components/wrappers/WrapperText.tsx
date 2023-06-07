import { Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Paragraph } from "react-native-paper";

interface WrapperTextProps {
  size?: number;
  customStyle?: Record<string, string>;
  text: string;
}

export default function WrapperText(props: WrapperTextProps) {
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

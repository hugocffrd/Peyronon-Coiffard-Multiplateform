import { Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Paragraph } from "react-native-paper";

interface WrapperTextProps {
  size?: number;
  customStyle?: unknown;
  text: string;
  testId?: string;
}

export default function WrapperText(props: WrapperTextProps) {
  const { testId } = props;
  const [fontSize, setFontSize] = useState(
    props.size !== undefined
      ? props.size
      : fontSizer(Dimensions.get("window").width)
  );

  useEffect(() => {
    const updateFontSize = () => {
      setFontSize(fontSizer(Dimensions.get("window").width));
    };

    Dimensions.addEventListener("change", updateFontSize);

    return () => {};
  }, []);

  function fontSizer(screenWidth) {
    if (screenWidth > 400) {
      return 18;
    } else if (screenWidth > 250) {
      return 14;
    } else {
      return 12;
    }
  }

  return (
    <Paragraph testID={testId} style={[{ fontSize }, props.customStyle]}>
      {props.text}
    </Paragraph>
  );
}

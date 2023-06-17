import React from "react";
import { Paragraph } from "react-native-paper";

interface WrapperTextProps {
  size?: number;
  customStyle?: unknown;
  text: string;
  testId?: string;
}

export default function WrapperText(props: WrapperTextProps) {
  const { testId } = props;

  return (
    <Paragraph
      testID={testId}
      style={[{ fontSize: props.size }, props.customStyle]}
    >
      {props.text}
    </Paragraph>
  );
}

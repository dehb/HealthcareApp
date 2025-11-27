import { COLORS, SIDES } from "@styles/constants";
import { fontColor, fontStyle, textAlign } from "@styles/styleDefinition";
import React from "react";
import {
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  Pressable,
  View,
} from "react-native";

interface InLineType {
  text: string;
  coloredText: string;
  nextText?: string;
  textStyle?: StyleProp<TextStyle>;
  coloredTextStyle?: StyleProp<TextStyle>;
  overAllTextStyle?: StyleProp<TextStyle>;
  numberOfLines?: number;
  coloredText2?: string;
  coloredText2Style?: StyleProp<TextStyle>;
  handleColoredClick?: () => void;
  handleColored2Click?: () => void;
  lastText?: string;
}

const InLine = ({
  text,
  textStyle,
  coloredText,
  coloredTextStyle,
  overAllTextStyle,
  nextText,
  numberOfLines,
  handleColoredClick,
  coloredText2,
  coloredText2Style,
  handleColored2Click,
  lastText,
}: InLineType) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        fontColor(COLORS.APP_BLUE),
        fontStyle.body_regular,
        textAlign(SIDES.CENTER),
        textStyle,
      ]}
    >
      {text}
      <Text
        onPress={handleColoredClick}
        style={[
          fontColor(COLORS.APP_BLUE),
          fontStyle.body_regular,
          coloredTextStyle,
        ]}
      >
        {" "}
        {`${coloredText} `}
      </Text>
      {nextText ?? ""}
      <Text
        onPress={handleColored2Click}
        style={[
          fontColor(COLORS.APP_BLUE),
          fontStyle.body_regular,
          coloredText2Style,
        ]}
      >
        {" "}
        {`${coloredText2 ?? ""}`}
      </Text>
      {lastText ?? ""}
    </Text>
  );
};

export default InLine;

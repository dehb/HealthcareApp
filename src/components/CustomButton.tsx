import React, { JSX } from "react";
import {
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ImageStyle,
  ViewStyle,
  TextStyle,
  ColorValue,
} from "react-native";
import CustomText from "./CustomText";
import { FLEX, POSITION, COLORS, SIDES } from "@styles/constants";
import { height, SPACE, width } from "@styles/spacing";
import { backgroundColor, alignSelf, flexDirection, alignItems, justifyContent, position, fontColor, textAlign, borderRadius, FONT_SIZE, FONT_WEIGHT, fontSize, fontWeight } from "@styles/styleDefinition";
import Loader from "./Loader";

type LoaderSize = "large" | "small";

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  loaderSize?: LoaderSize;
  loaderColor?: ColorValue;
}

export default function CustomButton({
  title,
  onPress,
  textStyle,
  containerStyle,
  loading,
  disabled,
  loaderSize,
  loaderColor,

}: ButtonProps): JSX.Element {
  return (
    <TouchableOpacity
      onPress={loading || disabled ? () => {} : onPress}
      activeOpacity={loading ? 1 : 0.2}
      disabled={disabled}
      style={[
        height(SPACE.BUTTON_HEIGHT),
        backgroundColor(
          disabled
            ? COLORS.APP_GREY
            : COLORS.APP_BLUE
        ),
        borderRadius(28),
        alignSelf(FLEX.CENTER),
        flexDirection(FLEX.ROW),
        alignItems(FLEX.CENTER),
        justifyContent(FLEX.CENTER),
        width(SPACE.FULL),
        containerStyle,
      ]}
    >
  

      {loading ? (
        <Loader
          color={loaderColor ? loaderColor : COLORS.APP_WHITE}
          size={loaderSize ?? "small"}
        />
      ) : (
        <CustomText
          text={title}
          otherStyles={[
            fontColor(
              disabled ? COLORS.APP_TEXT_DARK : COLORS.APP_WHITE
            ),
            fontSize(FONT_SIZE.HEADING),
            alignSelf(FLEX.CENTER),
            textAlign(SIDES.CENTER),
            fontWeight(FONT_WEIGHT.SEMI),
            textStyle,
          ]}
        />
      )}

   
    </TouchableOpacity>
  );
}

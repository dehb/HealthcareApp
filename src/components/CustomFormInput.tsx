import React, { JSX, Ref, useState } from "react";
import {
  Button,
  GestureResponderEvent,
  InputAccessoryView,
  Keyboard,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import CustomText from "./CustomText";
// import IconView from "./IconView";
import { COLORS, FLEX, POSITION } from "@styles/constants";
import { margin, padding } from "@styles/spacing";
import {
  width,
  SPACE,
  keyboardStyle,
  fontStyle,
  height,
  border,
  backgroundColor,
  flexDirection,
  alignItems,
  justifyContent,
  position,
  fontColor,
} from "@styles/styleDefinition";
import EyeClosedIcon from "src/icons/EyeClosedIcon";
import EyeOpenedIcon from "src/icons/EyeOpenedIcon";
// import CloseXGreyIcon from "@/icons/CloseXGreyIcon";

interface FormInputProps {
  icon?: string;
  value?: string;
  label?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (text: string) => void;
  setValue?: (value: string) => void;
  multiline?: boolean;
  secureTextEntry?: boolean;
  editable?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  error?: string;
  maxLength?: number;
  placeholder?: string;
  options?: Array<{ label: string; value: string }>;
  outerContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  touched?: boolean;
  textContentType?: any;
  inputAccessoryID?: string;
  imgSrc?: string;
  setShowCalendar?: React.Dispatch<React.SetStateAction<boolean>>;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  active?: boolean;
  autocomplete?:
    | "additional-name"
    | "address-line1"
    | "birthdate-full"
    | "cc-exp"
    | "cc-exp-day"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-number"
    | "country"
    | "current-password"
    | "email"
    | "family-name"
    | "given-name"
    | "name"
    | "new-password"
    | "nickname"
    | "password"
    | "password-new"
    | "street-address"
    | "sms-otp"
    | "tel"
    | "username"
    | undefined;
}

const CustomFormInput = ({
  icon,
  secureTextEntry,
  label,
  onPress,
  error,
  placeholder,
  outerContainerStyle,
  containerStyle,
  inputStyle,
  textInputStyle,
  setValue,
  editable,
  touched,
  inputAccessoryID,
  imgSrc,
  setShowCalendar,
  leftIcon,
  rightIcon,
  active,
  autocomplete,
  ...rest
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[margin(0, 0, 16, 0), width(SPACE.FULL), outerContainerStyle]}>
      {Platform.OS === "ios" && (
        <InputAccessoryView nativeID="Done">
          <View style={keyboardStyle.accessory}>
            <Button onPress={() => Keyboard.dismiss()} title="Done" />
          </View>
        </InputAccessoryView>
      )}
      {label && (
        <CustomText
          otherStyles={[fontStyle.small_regular, margin(0, 0, 6, 0)]}
          left
          text={label}
        />
      )}

      <View
        style={[
          height(SPACE.INPUT_HEIGHT),
          active
            ? border(8, 1, COLORS.APP_TEXT_DARK)
            : border(8, 1, COLORS.APP_GREY),
          backgroundColor(COLORS.APP_WHITE),
          flexDirection(FLEX.ROW),
          alignItems(FLEX.CENTER),
          justifyContent(FLEX.SPACE_B),
          padding(0, SPACE.INPUT_PADDING),
          width(SPACE.FULL),
          containerStyle,
        ]}
      >
        {/* {leftIcon && (
          <IconView
            containerStyle={[
              position(POSITION.ABSOLUTE),
              { left: 0, marginLeft: 12 },
            ]}
          >
            {leftIcon}
          </IconView>
        )} */}

        <TextInput
          {...rest}
          underlineColorAndroid={"transparent"}
          editable={editable ?? true}
          placeholder={placeholder}
          secureTextEntry={showPassword ? false : secureTextEntry}
          style={[
            fontStyle.body_regular,
            width(SPACE.NINTY_PERCENT),
            height(SPACE.INPUT_HEIGHT),
            justifyContent(FLEX.CENTER),
            { marginBottom: Platform.OS === "ios" ? 10 : 0 },
            textInputStyle,
          ]}
          placeholderTextColor={"#CECECE"}
          inputAccessoryViewID={"Done"}
          autoComplete={autocomplete}
        />

        {icon === "password" && (
          <Pressable
            onPress={() => {
              setShowPassword((oldState) => !oldState);
            }}
            style={[
              position(POSITION.ABSOLUTE),
              { right: 0, marginRight: 12 },
              height(SPACE.INPUT_HEIGHT),
              alignItems(FLEX.CENTER),
              justifyContent(FLEX.CENTER),
              padding(0, 4),
            ]}
          >
            {showPassword ? <EyeOpenedIcon /> : <EyeClosedIcon />}
          </Pressable>
        )}
        {/* {icon === "close" && (
          <Pressable
            onPress={() => {
              setShowPassword((oldState) => !oldState);
            }}
            style={[
              position(POSITION.ABSOLUTE),
              { right: 0, marginRight: 12 },
              height(SPACE.INPUT_HEIGHT),
              alignItems(FLEX.CENTER),
              justifyContent(FLEX.CENTER),
              padding(0, 4),
            ]}
          >
            <CloseXGreyIcon />
          </Pressable>
        )} */}

        {rightIcon && (
          <Pressable
            onPress={() => {
              setShowPassword((oldState) => !oldState);
            }}
            style={[
              position(POSITION.ABSOLUTE),
              { right: 0, marginRight: 12 },
              height(SPACE.INPUT_HEIGHT),
              alignItems(FLEX.CENTER),
              justifyContent(FLEX.CENTER),
              padding(0, 4),
            ]}
          >
            rightIcon
          </Pressable>
        )}
      </View>
      {error !== undefined && error?.length > 0 && (
        <CustomText
          left
          text={error}
          otherStyles={[
            fontStyle.small_medium,
            margin(4, 0, 0, 0),
            fontColor(COLORS.APP_ERROR_RED),
          ]}
        />
      )}
    </View>
  );
};

export default CustomFormInput;

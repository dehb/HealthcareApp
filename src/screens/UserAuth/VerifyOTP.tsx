import CustomButton from "@components/CustomButton";
import CustomText from "@components/CustomText";
import InLine from "@components/InLine";
import { FLEX, SIDES, COLORS, POSITION } from "@styles/constants";
import { padding, margin } from "@styles/spacing";
import {
  flex,
  backgroundColor,
  justifyContent,
  fontStyle,
  textAlign,
  fontColor,
  width,
  maxWidth,
  height,
  border,
  alignItems,
  fontWeight,
  FONT_WEIGHT,
  fontSize,
  FONT_SIZE,
  position,
} from "@styles/styleDefinition";
import { IComponent } from "src/types";
import React, { JSX, useCallback, useEffect, useState } from "react";
import {
  Platform,
  View,
  Text,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import { SafeAreaView } from "react-native-safe-area-context";
import { TAB, WELCOME_SCREEN } from "src/navigation/screenComponentConstant";
import Appbar from "@components/CustomAppbar";

const heightScreen = Dimensions.get("window").height;

function VerifyOTP({ navigation, route }: IComponent): JSX.Element {
  const emailAddress = "example@email.com";

  const [codeError, setCodeError] = useState("");
  const [timer, setTimer] = useState(15);
  const CELL_COUNT = 4;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

  const [opeUpdatePhone, setOpenUpdatePhone] = useState(false);

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const timeOutCallback = useCallback(
    () => setTimer((currTimer) => currTimer - 1),
    []
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (timer > 0) timeout = setTimeout(timeOutCallback, 1000);
    return () => clearTimeout(timeout);
  }, [timer, timeOutCallback]);

  useEffect(() => {
    if (emailAddress) {
      setTimer(15);
    }
  }, [emailAddress]);

  const handleResendCode = async () => {};

  const handleCodeSubmission = async () => {
    navigation.push(TAB);
  };

  return (
    <SafeAreaView style={[flex(1)]}>
      <Appbar back={true} navigation={navigation} />
      <KeyboardAvoidingView
        style={[flex(1), backgroundColor(COLORS.APP_WHITE)]}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            minHeight: heightScreen - 80,
            paddingBottom: 20,
          }}
          indicatorStyle="black"
          showsVerticalScrollIndicator={false}
        >
          <View
            style={[
              flex(1),
              padding(24, 16, 0, 16),
              justifyContent(FLEX.SPACE_B),
            ]}
          >
            <View>
              <CustomText
                text={"Verify Code"}
                otherStyles={[fontStyle.title_semibold]}
              />
              <InLine
                text={"Please enter the code we just sent to email"}
                coloredText={`${emailAddress}`}
                textStyle={[
                  fontStyle.body_regular,
                  textAlign(SIDES.CENTER),
                  margin(12, 0, 40, 0),
                  justifyContent(FLEX.CENTER),
                  fontColor(COLORS.APP_PURE_BLACK),
                ]}
                handleColoredClick={() => setOpenUpdatePhone(true)}
                coloredTextStyle={[
                  fontStyle.body_bold,
                  fontColor(COLORS.APP_TEXT_BLUE),
                ]}
              />

              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType={"number-pad"}
                textContentType={"oneTimeCode"}
                inputAccessoryViewID={"Done"}
                renderCell={({ index, symbol, isFocused }) => (
                  <View
                    key={index}
                    onLayout={getCellOnLayoutHandler(index)}
                    style={[
                      width(52),
                      maxWidth(52),
                      height(52),
                      border(8, 1, COLORS.APP_PANEL),
                      flex(1),
                      alignItems(FLEX.CENTER),
                      justifyContent(FLEX.CENTER),
                      backgroundColor(COLORS.APP_WHITE),
                    ]}
                  >
                    <Text
                      style={[
                        fontStyle.subtitle_regular,
                        textAlign(SIDES.CENTER),
                        textAlign(SIDES.V_CENTER),
                        fontColor(COLORS.APP_TEXT_DARK),
                      ]}
                    >
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  </View>
                )}
              />
              {codeError !== undefined && codeError.length > 0 && (
                <CustomText
                  left
                  text={codeError}
                  otherStyles={[
                    fontStyle.small_medium,
                    margin(4, 0, 0, 0),
                    fontColor(COLORS.APP_ERROR_RED),
                  ]}
                />
              )}
              <View style={[margin(40, 0, 10, 0), justifyContent(FLEX.CENTER)]}>
                <CustomText
                  text={"Didn't receive OTP?"}
                  otherStyles={[fontStyle.body_regular]}
                />
                {timer ? (
                  <InLine
                    text={"Resend code in"}
                    coloredText={`0.${timer}s`}
                    overAllTextStyle={[
                      fontStyle.body_medium,
                      textAlign(SIDES.CENTER),
                      justifyContent(FLEX.CENTER),
                    ]}
                    coloredTextStyle={[
                      fontStyle.body_medium,
                      fontColor(COLORS.APP_ERROR_RED),
                    ]}
                    textStyle={[fontStyle.body_medium]}
                  />
                ) : (
                  <CustomButton
                    loaderSize="small"
                    loaderColor={"#ffffff"}
                    textStyle={[
                      fontColor(COLORS.APP_TEXT_BLUE),
                      textAlign(SIDES.V_CENTER),
                      fontWeight(FONT_WEIGHT.BOLD),
                      fontSize(FONT_SIZE.SMALL),
                    ]}
                    containerStyle={[
                      backgroundColor(COLORS.APP_WHITE),
                      padding(0, 0, 0, 0),
                      {
                        width: 120,
                        height: 40,
                      },
                    ]}
                    title={"Resend Code"}
                    onPress={handleResendCode}
                  />
                )}
              </View>
            </View>
            <CustomButton
              title={"Next"}
              onPress={handleCodeSubmission}
              containerStyle={[
                margin(0, 0, 24, 0),
                position(POSITION.ABSOLUTE),
                { bottom: 0, marginBottom: 60 },
              ]}
              loaderColor={COLORS.APP_WHITE}
              disabled={value.length < 4}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default VerifyOTP;

const styles = StyleSheet.create({
  codeFieldRoot: {
    justifyContent: "space-between",
    width: "75%",
    alignSelf: "center",
  },
  cell: {
    width: 52,
    maxWidth: 52,
    height: 52,
    borderRadius: 12,
    flex: 1,
    borderColor: "#CECECE",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fcfcfc",
    fontSize: 16,
  },
  text: {
    lineHeight: 38,
    backgroundColor: "#fcfcfc",
    fontSize: 24,
    textAlign: "center",
    textAlignVertical: "center",
  },
  accessory: {
    width: Dimensions.get("window").width,
    height: 48,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 8,
  },

  phone_input_container: {
    backgroundColor: COLORS.APP_WHITE,
    borderLeftWidth: 1,
    borderTopEndRadius: 8,
    borderBottomEndRadius: 8,
    paddingTop: 0,
    paddingBottom: 0,
  },

  phone_input: {
    paddingBottom: 0,
    paddingTop: Platform.OS === "ios" ? 2 : 3,
    fontWeight: "400",
  },
  input_container: {
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CECECE",
    width: "100%",
    backgroundColor: COLORS.APP_WHITE,
    marginBottom: 16,
  },

  code_text: {
    paddingTop: 3,
    fontWeight: "400",
  },
});

import CustomButton from "@components/CustomButton";
import CustomText from "@components/CustomText";
import InLine from "@components/InLine";
import { COLORS, FLEX, SIDES } from "@styles/constants";
import { margin, padding } from "@styles/spacing";
import {
  fontStyle,
  fontColor,
  textAlign,
  buttonStyle,
  backgroundColor,
  alignItems,
  justifyContent,
  color,
  border,
  borderRadius,
} from "@styles/styleDefinition";
import { mobile_mockup } from "@utils/images";
import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  SIGNUP_SCREEN,
  LOGIN_SCREEN,
} from "src/navigation/screenComponentConstant";

export default function Landing({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={mobile_mockup}
        resizeMode="contain"
        style={{ height: 400, width: 400 , marginTop: 60, alignSelf: 'center', }}
      />

      <View
        style={[
          borderRadius(40, 40, 0, 0),
          backgroundColor(COLORS.APP_BKG_WHITE),
          padding(30, 20, 30, 20),
          margin(-6, 0, 0, 0),
          // {
          //   position: "absolute",
          //   bottom: 40,
          //   right: 0,
          //   left: 0,
          // },
        ]}
      >
        <InLine
          text={"Your"}
          coloredText={"Ultimate Doctor"}
          nextText={"Appointment Booking App"}
          coloredTextStyle={[
            fontStyle.title_semibold,
            fontColor(COLORS.APP_BLUE),
          ]}
          textStyle={[
            textAlign(SIDES.CENTER),
            fontStyle.title_semibold,
            margin(6, 0, 0, 0),
            fontColor(COLORS.APP_TEXT_DARK),
          ]}
        />

        <CustomText
          text={
            "Book appointments effortlessly and manage your health journey."
          }
          otherStyles={[
            fontStyle.body_medium,
            { color: COLORS.APP_TEXT_LIGHT, marginVertical: 20 },
          ]}
        />

        <CustomButton
          title="Let's Get Started"
          onPress={() => {
            navigation.navigate(SIGNUP_SCREEN);
          }}
          containerStyle={[
            margin(0, 0, 24, 0),
            buttonStyle.button_medium,
            backgroundColor(COLORS.APP_BLUE),
          ]}
          textStyle={[fontColor(COLORS.APP_WHITE), fontStyle.body_medium]}
        />

        <InLine
          text={"Already have an account?"}
          coloredText={"Sign In"}
          textStyle={[
            alignItems(FLEX.CENTER),
            justifyContent(FLEX.CENTER),
            fontStyle.body_medium,
            color(COLORS.APP_TEXT_DARK),
            margin(0, 0, 50, 0),
          ]}
          handleColoredClick={() => navigation.navigate(LOGIN_SCREEN)}
          coloredTextStyle={[fontStyle.body_medium]}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.APP_WHITE,
    paddingTop: 20,
  },

  image: {
    width: 320,
    height: 320,
  },
});

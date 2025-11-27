import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

import { useState } from "react";
import React from "react";
import {
  alignItems,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  buttonStyle,
  flex,
  flexDirection,
  fontColor,
  fontStyle,
  height,
  justifyContent,
  width,
} from "@styles/styleDefinition";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@components/CustomButton";
import InLine from "@components/InLine";
import { FLEX, COLORS } from "@styles/constants";
import { padding, margin } from "@styles/spacing";
import { IComponent } from "src/types";
import CustomFormInput from "@components/CustomFormInput";
import CustomText from "@components/CustomText";
import {
  SIGNUP_SCREEN,
  VERIFY_OTP_SCREEN,
} from "src/navigation/screenComponentConstant";
import { apple_image, facebook_image, google_image } from "@utils/images";

export default function SignUp({ navigation }: IComponent) {
  const [loginForm, setLoginForm] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });

  return (
    <SafeAreaView style={[flex(1)]}>
      <KeyboardAvoidingView
        style={[flex(1), backgroundColor(COLORS.APP_WHITE)]}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            paddingBottom: 20,
          }}
          indicatorStyle="black"
          showsVerticalScrollIndicator={false}
        >
          <View style={[flex(1), padding(40, 16, 0, 16), margin(0)]}>
            <CustomText
              text={"Sign Up"}
              otherStyles={[fontStyle.title_semibold]}
            />
            <CustomText
              text={"Hi! Welcome, it is good to have you here."}
              otherStyles={[
                fontStyle.small_regular,
                fontColor(COLORS.APP_TEXT_LIGHT),
                margin(8, 0, 40, 0),
              ]}
            />
            <CustomFormInput
              label="Fullname"
              placeholder="Firstname Lastname"
              keyboardType="default"
              value={loginForm.email.value}
              error={loginForm.email.error}
              autoCapitalize="none"
              autocomplete={"email"}
              textContentType="emailAddress"
              onChangeText={(text: string) => {}}
              active={loginForm.email.value.length > 0}
            />
            <CustomFormInput
              label="Email"
              placeholder="John@mail.com"
              keyboardType="default"
              value={loginForm.email.value}
              error={loginForm.email.error}
              autoCapitalize="none"
              autocomplete={"email"}
              textContentType="emailAddress"
              onChangeText={(text: string) => {}}
              active={loginForm.email.value.length > 0}
            />
            <CustomFormInput
              label="Phone"
              placeholder="0814722222222222"
              keyboardType="default"
              value={loginForm.email.value}
              error={loginForm.email.error}
              autoCapitalize="none"
              autocomplete={"email"}
              textContentType="emailAddress"
              onChangeText={(text: string) => {}}
              active={loginForm.email.value.length > 0}
            />
            <CustomFormInput
              label="Password"
              placeholder="**********"
              autoCapitalize="none"
              icon="password"
              maxLength={4}
              textContentType="password"
              keyboardType="number-pad"
              value={loginForm.password.value}
              error={loginForm.password.error}
              secureTextEntry={true}
              onChangeText={(text: string) => {}}
              active={loginForm.password.value.length > 0}
            />

            <View
              style={[
                {
                  bottom: 0,
                  marginBottom: 0,
                },
              ]}
            >
              <CustomButton
                title={"Sign Up"}
                onPress={() => navigation.push(VERIFY_OTP_SCREEN)}
                containerStyle={[
                  margin(20, 0, 20, 0),
                  buttonStyle.button_medium,
                ]}
                loaderColor={COLORS.APP_WHITE}
              />

              <CustomText
                text={"--------- Or sign in with ---------"}
                otherStyles={[
                  fontStyle.small_medium,
                  fontColor(COLORS.APP_TEXT_LIGHT),
                ]}
              />

              <View
                style={[
                  flexDirection(FLEX.ROW),
                  margin(20, 0, 20, 0),

                  alignItems(FLEX.CENTER),
                  justifyContent(FLEX.CENTER),
                ]}
              >
                <TouchableOpacity
                  onPress={() => {}}
                  style={[
                    backgroundColor(COLORS.APP_WHITE),
                    height(60),
                    width(60),
                    borderRadius(50),
                    alignItems(FLEX.CENTER),
                    justifyContent(FLEX.CENTER),
                    padding(4),
                    borderColor(COLORS.APP_PANEL),
                    borderWidth(1),
                  ]}
                >
                  <Image source={apple_image} style={[width(50), height(50)]} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {}}
                  style={[
                    backgroundColor(COLORS.APP_WHITE),
                    height(60),
                    width(60),
                    borderRadius(50),
                    alignItems(FLEX.CENTER),
                    justifyContent(FLEX.CENTER),
                    padding(4),
                    borderColor(COLORS.APP_PANEL),
                    borderWidth(1),
                    margin(0, 10, 0, 10),
                  ]}
                >
                  <Image
                    source={google_image}
                    style={[width(22), height(22)]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {}}
                  style={[
                    backgroundColor(COLORS.APP_WHITE),
                    height(60),
                    width(60),
                    borderRadius(50),
                    alignItems(FLEX.CENTER),
                    justifyContent(FLEX.CENTER),
                    padding(4),
                    borderColor(COLORS.APP_PANEL),
                    borderWidth(1),
                  ]}
                >
                  <Image
                    source={facebook_image}
                    style={[width(28), height(28)]}
                  />
                </TouchableOpacity>
              </View>

              <InLine
                text={"Already have an account?"}
                coloredText={"Sign In"}
                textStyle={[
                  alignItems(FLEX.CENTER),
                  justifyContent(FLEX.CENTER),
                  fontColor(COLORS.APP_TEXT_DARK),
                  fontStyle.body_medium,
                ]}
                handleColoredClick={() => navigation.navigate(SIGNUP_SCREEN)}
                coloredTextStyle={[fontStyle.body_medium]}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

import React, { JSX, useContext, useEffect, useState } from "react";
import * as Routes from "./screenComponentConstant";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";

import { Platform } from "react-native";
import AppIntro from "@screens/UserAuth/AppIntro";
import Landing from "@screens/UserAuth/Landing";
import SignIn from "@screens/UserAuth/SignIn";
import SignUp from "@screens/UserAuth/SignUp";
import VerifyOTP from "@screens/UserAuth/VerifyOTP";
import TabBar from "@components/TabBar";
import Booking from "@screens/Booking";
import Explore from "@screens/Explore";
import Dashboard from "@screens/Home/Dashboard";
import Chat from "@screens/Chat";
import Profile from "@screens/Profile";

export const navigationRef = createNavigationContainerRef();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreenOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: "#FDFDFE",
  },
  animationEnabled: false,
  animation: "none",
  // tabBarStyle: {
  //   backgroundColor: '#EDAA27',
  //   borderTopWidth: 0,
  //   height: 56
  // }
};

const ScreenOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: "#FDFDFE",
  },
  animationEnabled: false,
};

const TabNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator
      id="TabNavigator"
      screenOptions={TabScreenOptions}
      tabBar={(props: JSX.IntrinsicAttributes & BottomTabBarProps) => (
        <TabBar {...props} />
      )}
      initialRouteName={Routes.HOME_SCREEN}
    >
      <Tab.Screen name={Routes.HOME_SCREEN} component={Dashboard} />
      <Tab.Screen name={Routes.EXPLORE_HOME_SCREEN} component={Explore} />
      <Tab.Screen name={Routes.BOOKING_HOME_SCREEN} component={Booking} />
      <Tab.Screen name={Routes.CHAT_SCREEN} component={Chat} />

      <Tab.Screen name={Routes.PROFILE_SCREEN} component={Profile} />
    </Tab.Navigator>
  );
};

export default function NavProvider() {
  const [isNavReady, setIsNavReady] = React.useState(false);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        console.log("Navigation is ready"); // Debug log
        setIsNavReady(true); // 2️⃣ Mark as ready
      }}
    >
      <Stack.Navigator
        screenOptions={ScreenOptions}
        initialRouteName={Routes.INTRO_SCREEN}
      >
        <Stack.Screen name={Routes.TAB} component={TabNavigator} />

        <Stack.Screen name={Routes.SIGNUP_SCREEN} component={SignUp} />
        <Stack.Screen name={Routes.LOGIN_SCREEN} component={SignIn} />
        <Stack.Screen name={Routes.INTRO_SCREEN} component={AppIntro} />
        <Stack.Screen name={Routes.LANDING_SCREEN} component={Landing} />
        <Stack.Screen name={Routes.VERIFY_OTP_SCREEN} component={VerifyOTP} />

        {/* <Stack.Screen
            name={Routes.BIOMETRIC_AUTH_SCREEN}
            component={BiometricAuthentication}
          />
          <Stack.Screen
            name={Routes.VERIFY_EMAIL_SCREEN}
            component={VerifyEmail}
          />
          <Stack.Screen name={Routes.WELCOME_SCREEN} component={WelcomePage} />
          <Stack.Screen
            name={Routes.FACE_VER_SCREEN}
            component={FaceVerification}
          />
          <Stack.Screen name={Routes.SUCCESS_SCREEN} component={SuccessPage} />
          <Stack.Screen
            name={Routes.ACCOUNT_EXISTS_SCREEN}
            component={AccountExists}
          />
          <Stack.Screen name={Routes.FORGOT_PIN_SCREEN} component={ForgotPin} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

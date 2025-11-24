import React, { useContext, useEffect, useState } from "react";
import * as Routes from "./screenComponentConstant";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";

import { Platform } from "react-native";
import AppIntro from "@screens/UserAuth/AppIntro";

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

// const TabNavigator = (): JSX.Element => {
//   return (
//     <Tab.Navigator
//       id="TabNavigator"
//       screenOptions={TabScreenOptions}
//       tabBar={(props) => <TabBar {...props} />}
//       initialRouteName={Routes.HOME_SCREEN}
//     >
//       <Tab.Screen name={Routes.HOME_SCREEN} component={Dashboard} />
//       <Tab.Screen name={Routes.TASK_HOME_SCREEN} component={TaskHome} />
//       <Tab.Screen name={Routes.INBOX_SCREEN} component={Inbox} />
//       <Tab.Screen name={Routes.HELP_SCREEN} component={Help} />

//       <Tab.Screen name={Routes.USER_ACCOUNT_SCREEN} component={Account} />
//     </Tab.Navigator>
//   );
// };

export default function NavProvider() {
  const [userStaysLoggedIn, setUserStaysLoggedIn] = React.useState(false);
  const [myAccessToken, setMyAccessToken] = React.useState(true);
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
        // screenOptions={ScreenOptions} initialRouteName={Routes.TAB}>
        screenOptions={ScreenOptions}
        initialRouteName={userStaysLoggedIn ? Routes.TAB : Routes.INTRO_SCREEN}
      >
        {/* <Stack.Screen
            name={Routes.TAB}
            component={TabNavigator}
            options={{
              gestureEnabled: Platform.OS === "ios" ? false : true, // Disable swipe only on iOS
            }}
          /> */}
        {/* <Stack.Screen name={Routes.LOGIN_SCREEN} component={SignIn} />
          <Stack.Screen name={Routes.SIGNUP_SCREEN} component={SignUp} />
           <Stack.Screen name={Routes.LANDING_SCREEN} component={Landing} />
          */}

        <Stack.Screen name={Routes.INTRO_SCREEN} component={AppIntro} />
        {/* <Stack.Screen
            name={Routes.BIOMETRIC_AUTH_SCREEN}
            component={BiometricAuthentication}
          />
          <Stack.Screen name={Routes.VERIFY_OTP_SCREEN} component={VerifyOTP} />
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

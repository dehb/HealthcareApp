import React, { JSX, useEffect, useState } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity, Image, Platform } from "react-native";
import * as Images from "@utils/images";
import * as Routes from "@navigation/screenComponentConstant";

import { height, margin, width } from "@styles/spacing";
import CustomText from "./CustomText";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FLEX, COLORS } from "@styles/constants";
import {
  flexDirection,
  borderColor,
  justifyContent,
  flex,
  alignItems,
  fontColor,
  fontSize,
  fontWeight,
  FONT_WEIGHT,
} from "@styles/styleDefinition";

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): JSX.Element {
  const insets = useSafeAreaInsets();

  const [selectedPage, setSelectedPage] = useState(Routes.HOME_SCREEN);

  return (
    <View
      style={[
        flexDirection(FLEX.COLUMN),
        borderColor(COLORS.APP_PANEL),
        height(Platform.OS === "ios" ? 80 : 86),
        margin(0),
        { borderTopWidth: 1, paddingBottom: insets.bottom || 16 },
      ]}
    >
      <View
        style={[
          flexDirection(FLEX.ROW),
          justifyContent(FLEX.SPACE_A),
          flex(1),
          {
            paddingTop: Platform.OS === "ios" ? 10 : 8,
            height: Platform.OS === "ios" ? 80 : 86,
            alignItems: Platform.OS === "ios" ? "flex-start" : "flex-start",
          },
        ]}
      >
        {state.routes?.map((route, index) => {
          const { options } = descriptors[route.key];
          let iconName;
          route.name === Routes.HOME_SCREEN
            ? (iconName = {
                normal: Images.home,
                active: Images.home_active,
              })
            : route.name === Routes.EXPLORE_HOME_SCREEN
            ? (iconName = {
                normal: Images.explore,
                active: Images.explore_active,
              })
            : route.name === Routes.BOOKING_HOME_SCREEN
            ? (iconName = {
                normal: Images.booking,
                active: Images.booking_active,
              })
            : route.name === Routes.CHAT_SCREEN
            ? (iconName = {
                normal: Images.chat,
                active: Images.chat_active,
              })
            : (iconName = {
                normal: Images.profile,
                active: Images.profile_active,
              });

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            setSelectedPage(route.name);

            if (!isFocused && !event.defaultPrevented) {
              // @ts-ignore
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[alignItems(FLEX.CENTER)]}
            >
              <Image
                resizeMode="contain"
                source={isFocused ? iconName.active : iconName.normal}
                style={[height(24), width(24), margin(0,0,4,0)

                ]}
              />

              <CustomText
                type="subTitle"
                text={route.name}
                otherStyles={[
                  fontSize(12),
                  fontColor(
                    isFocused ? COLORS.APP_TEXT_BLUE : COLORS.APP_TEXT_LIGHT
                  ),
                  fontWeight(
                    isFocused ? FONT_WEIGHT.BOLD : FONT_WEIGHT.REGULAR
                  ),
                ]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

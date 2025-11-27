import {
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  View,
} from "react-native";
import React, { JSX, useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IComponent } from "src/types";
import {
  alignItems,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  flex,
  flexDirection,
  fontColor,
  fontStyle,
  height,
  justifyContent,
  width,
} from "@styles/styleDefinition";
import { margin, padding } from "@styles/spacing";
import { COLORS, FLEX } from "@styles/constants";
import CustomText from "@components/CustomText";
import LocationIconBlue from "src/icons/LocationIconBlue";
import ArrowDownIconBlue from "src/icons/ArrowDownIcon";
import ArrowDownIcon from "src/icons/ArrowDownIcon";
import NotificationIcon from "src/icons/NotificationIcon";

function Dashboard({ navigation }: IComponent): JSX.Element {
  return (
    <SafeAreaView
      style={[
        flex(1),
        padding(10, 16, -40, 16),
        backgroundColor(COLORS.APP_WHITE),
      ]}
    >
      <View style={[flexDirection(FLEX.ROW), justifyContent(FLEX.SPACE_B)]}>
        <View>
          <CustomText
            text={"Location"}
            left
            otherStyles={[
              fontStyle.body_bold,
              fontColor(COLORS.APP_TEXT_LIGHT),
              margin(0, 0, 8, 0),
            ]}
          />
          <View style={[flexDirection(FLEX.ROW), alignItems(FLEX.CENTER)]}>
            <LocationIconBlue />

            <CustomText
              text={"New York, USA"}
              left
              otherStyles={[
                fontStyle.body_bold,
                fontColor(COLORS.APP_TEXT_DARK),
                margin(0, 8, 0, 8),
              ]}
            />

            <ArrowDownIcon
              color={COLORS.APP_TEXT_DARK}
              width={16}
              height={16}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {}}
          style={[
            backgroundColor(COLORS.APP_GREY),
            height(50),
            width(50),
            borderRadius(40),
            alignItems(FLEX.CENTER),
            justifyContent(FLEX.CENTER),
            padding(4),
            borderColor(COLORS.APP_PANEL),
            borderWidth(1),
          ]}
        >
          <NotificationIcon />
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}
export default Dashboard;

import CustomText from "@components/CustomText";
import InLine from "@components/InLine";
import { FLEX, COLORS, SIDES } from "@styles/constants";
import { margin, padding } from "@styles/spacing";
import {
  fontStyle,
  fontColor,
  backgroundColor,
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  textAlign,
  color,
  borderColor,
  borderWidth,
} from "@styles/styleDefinition";
import { slides } from "@utils/data";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { SafeAreaView } from "react-native-safe-area-context";
import { IComponent } from "src/types";
import Ionicons from "react-native-vector-icons/Ionicons";

const { height, width } = Dimensions.get("screen");

const IntroNavButton = ({ text }: { text: string }) => (
  <View
    style={[
      styles.buttonCircle,
      backgroundColor(text === "Back" ? COLORS.APP_WHITE : COLORS.APP_BLUE),
      borderColor(COLORS.APP_BLUE),
      borderWidth(1),
    ]}
  >
    <Ionicons
      name={
        text === "Next"
          ? "arrow-forward-outline"
          : text === "Back"
          ? "arrow-back-outline"
          : "arrow-forward-outline"
      }
      color={text === "Back" ? COLORS.APP_BLUE : COLORS.APP_WHITE}
      size={24}
      style={{ backgroundColor: "transparent" }}
    />
  </View>
);

const IntroNavSkipButton = ({
  text,
  last,
}: {
  text: string;
  last: boolean;
}) => (
  <View style={styles.navigationButtonContainer}>
    <CustomText
      otherStyles={[
        styles.navigationButtonText,
        padding(0, 10, 0, 10),
        fontStyle.body_medium,
        fontColor(last ? COLORS.APP_WHITE : COLORS.APP_TEXT_BLUE),
      ]}
      text={text}
    />
  </View>
);

const AppIntro = ({ navigation, route }: IComponent) => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const renderItem = ({ item }: any) => {
    return (
      <SafeAreaView
        style={[
          backgroundColor(COLORS.APP_WHITE),
          flex(1),
          padding(0, 0, 20, 0),
        ]}
      >
        <Pressable
          onPress={
            () => {}
            // navigation.navigate(LANDING_SCREEN)
          }
          style={[
            flexDirection(FLEX.ROW),
            justifyContent(FLEX.FLEX_E),
            padding(14, 16, 15, 20),
            { marginTop: Platform.OS === "ios" ? 0 : 20 },
          ]}
        >
          <IntroNavSkipButton
            text="Skip"
            last={currentSlide === slides.length - 1}
          />
        </Pressable>
        <View style={styles.slide}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={item.image}
          />

          <View
            style={[flex(1), alignItems(FLEX.CENTER), margin(0, 20, 0, 20)]}
          >
            <InLine
              text={item.title1}
              coloredText={item.title2}
              nextText={item.title3}
              coloredTextStyle={[
                fontStyle.title_semibold,
                fontColor(COLORS.APP_BLUE),
              ]}
              textStyle={[
                textAlign(SIDES.CENTER),
                fontStyle.title_semibold,
                margin(6, 0, 0, 0),
                fontColor(COLORS.APP_DARK_TEXT),
              ]}
            />

            <View style={[padding(10, 0)]}>
              <CustomText
                key={item?.id}
                text={item?.text}
                otherStyles={[
                  fontStyle.body_regular,
                  color(COLORS.APP_LIGHT_TEXT),
                ]}
                type="subTitle"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      onDone={
        () => {}
        // navigation.navigate(LANDING_SCREEN)
      }
      data={slides}
      onSlideChange={(index: number) => setCurrentSlide(index)} // Update slide index
      dotStyle={{
        backgroundColor: COLORS.APP_ACCENT_PANEL,
      }}
      showPrevButton={true}
      renderPrevButton={() => <IntroNavButton text="Back" />}
      renderNextButton={() => <IntroNavButton text="Next" />}
      renderDoneButton={() => <IntroNavButton text="Get Started" />}
      activeDotStyle={{
        backgroundColor: COLORS.APP_BLUE,
      }}
    />
  );
};

export default AppIntro;

const styles = StyleSheet.create({
  slide: {
    minHeight: height - 180,
    backgroundColor: COLORS.APP_WHITE,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: width,
    height: height * 0.5,
  },

  nextButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  subTitle: {
    color: "#444040",
    paddingVertical: 0,
  },
  navigationButtonContainer: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  navigationButtonText: {
    color: COLORS.APP_BLUE,
    textAlignVertical: "center",
    alignSelf: "center",
  },

  buttonCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    // right: 0,
    // bottom: 10,
  },
});

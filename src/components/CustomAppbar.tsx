import {
  TouchableOpacity,
  View,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  ImageStyle,
} from "react-native";
import CustomText from "./CustomText";
import { COLORS, FLEX } from "@styles/constants";
import { padding, zIndex } from "@styles/spacing";
import {
  height,
  SPACE,
  width,
  flexDirection,
  alignItems,
  justifyContent,
  fontStyle,
  border,
} from "@styles/styleDefinition";
import BackIcon from "src/icons/BackIcon";

interface IAppBar {
  navigation?: any;
  back?: boolean;
  title?: string;
  onPress?: () => void;
  handleTrailingAction?: () => void;
  trailingTextStyles?: StyleProp<TextStyle>;
  onIconClick?: (event: GestureResponderEvent) => void;
  otherStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  backBackgroundStyle?: StyleProp<ViewStyle>;

}

const Appbar = ({
  navigation,
  onPress,
  back,
  title,
  otherStyles,
  textStyles,
  backBackgroundStyle,
}: IAppBar) => {
  return (
      <View
        style={[
          height(SPACE.APP_BAR_HEIGHT),
          width(SPACE.FULL),
          flexDirection(FLEX.ROW),
          alignItems(FLEX.CENTER),
          justifyContent(FLEX.SPACE_B),
          padding(SPACE.DEFAULT_PADDING),
          otherStyles,
        ]}
      >
        <TouchableOpacity
          style={[
            width(SPACE.BACK_ICON_SIZE),
            height(SPACE.BACK_ICON_SIZE),
            // zIndex(6),
            border(30, 1, COLORS.APP_PANEL),
            alignItems(FLEX.CENTER),
            justifyContent(FLEX.CENTER),
            backBackgroundStyle,
          ]}
          onPress={
            back && navigation
              ? onPress
                ? onPress
                : () => navigation.goBack()
              : undefined
          }
        >
          {back && navigation && (
            <>
              <BackIcon />
            </>
          )}
        </TouchableOpacity>

        <View>
          {back && navigation ? (
            <CustomText
              text={title ?? ""}
              otherStyles={[
                height(SPACE.BACK_ICON_SIZE),
                fontStyle.heading_semibold,
                { marginLeft: -34 },
                textStyles,
              ]}
            />
          ) : (
            <CustomText
              text={title ?? ""}
              otherStyles={[
                height(SPACE.BACK_ICON_SIZE),
                fontStyle.heading_semibold,
                { marginLeft: 0 },
                textStyles,
              ]}
            />
          )}
        </View>

      </View>
  );
};

export default Appbar;

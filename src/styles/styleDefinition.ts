import { Dimensions, StyleSheet } from 'react-native';
import { FLEX, POSITION, SIDES } from './constants';

export const fontStyle = StyleSheet.create({
    large_bold: {
        fontWeight: "700",
        lineHeight: 64,
        fontSize: 56,
    },
    title_heavy: {
        fontWeight: "800",
        lineHeight: 48,
        fontSize: 34,
    },
    title_semibold: {
        fontWeight: "600",
        lineHeight: 34,
        fontSize: 28,
    },
    title_regular: {
        fontWeight: "400",
        lineHeight: 34,
        fontSize: 28,
    },
    subtitle_heavy: {
        fontWeight: "800",
        lineHeight: 32,
        fontSize: 20,
    },
    subtitle_semibold: {
        fontWeight: "600",
        lineHeight: 32,
        fontSize: 20,
    },
    subtitle_regular: {
        fontWeight: "400",
        lineHeight: 32,
        fontSize: 20,

    },
    content_bold: {
        fontWeight: "700",
        lineHeight: 30,
        fontSize: 18,

    },
    content_medium: {
        fontWeight: "500",
        lineHeight: 30,
        fontSize: 18,

    },
    content_regular: {
        fontWeight: "400",
        lineHeight: 30,
        fontSize: 18,
    },
    heading_heavy: {
        fontWeight: "800",
        lineHeight: 28,
        fontSize: 17,

    },
    heading_bold: {
        fontWeight: "700",
        lineHeight: 24,
        fontSize: 17,

    },
    heading_semibold: {
        fontWeight: "600",
        lineHeight: 28,
        fontSize: 17,

    },
    heading_regular: {
        fontWeight: "400",
        lineHeight: 28,
        fontSize: 17,

    },
    body_bold: {
        fontWeight: "700",
        lineHeight: 20,
        fontSize: 15,

    },
    body_medium: {
        fontWeight: "500",
        lineHeight: 20,
        fontSize: 15,

    },
    body_regular: {
        fontWeight: "400",
        lineHeight: 20,
        fontSize: 15,
    },
    normal_bold: {
        fontWeight: "700",
        lineHeight: 20,
        fontSize: 14,
    },
    normal_regular: {
        fontWeight: "400",
        lineHeight: 20,
        fontSize: 14,
    },
    small_bold: {
        fontWeight: "700",
        lineHeight: 20,
        fontSize: 12,

    },
    small_medium: {
        fontWeight: "500",
        lineHeight: 20,
        fontSize: 12,

    },
    small_regular: {
        fontWeight: "400",
        lineHeight: 20,
        fontSize: 12,

    },
    tiny_bold: {
        fontWeight: "700",
        lineHeight: 20,
        fontSize: 11,
    },
    tiny_regular: {
        fontWeight: "400",
        lineHeight: 20,
        fontSize: 10,
    },
    error_text: {
        fontWeight: "400",
        lineHeight: 20,
        fontSize: 12,
        color: '#FF0000'

    },
    sb_semibold: {
        fontWeight: "600",
        lineHeight: 38,
        fontSize: 24,
    },
})

export enum FONT_WEIGHT {
  LIGHT = "200",
  REGULAR = "400",
  MEDIUM = "500",
  SEMI = "600",
  BOLD = "700",
  BLACK = "900",
  NORMAL = "normal",
}

export enum FONT_SIZE {
  TITLE= 34,
  SUBTITLE= 20,
  HEADING= 17,
  CONTENT= 18,
  BODY= 15,
  SMALL= 12,
} 

export const buttonStyle = StyleSheet.create({
    button_small: {
        height: 32,
        borderRadius: 20,
        paddingVertical: 0,
        paddingHorizontal: 16,
        fontSize: 12,
        fontWeight: '700',
        // lineHeight:26,
    },
    button_medium: {
        height: 48,
        borderRadius: 24,
        paddingVertical: 0,
        paddingHorizontal: 16,
        fontSize: 15,
        fontWeight: '700',
        // lineHeight:26,
    },
    button_big: {
        height: 56,
        borderRadius: 28,
        paddingVertical: 14,
        paddingHorizontal: 16,
        fontSize: 17,
        fontWeight: '800',
        lineHeight: 28,
    },

})
export const keyboardStyle = StyleSheet.create({
    accessory: {
        width: Dimensions.get('window').width,
        height: 48,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 8,
    },
})
export const fontWeight = (fontWeight: FONT_WEIGHT = FONT_WEIGHT.REGULAR) =>
  ({ fontWeight } as any);

export const fontSize = (fontSize: FONT_SIZE = FONT_SIZE.BODY) => ({ fontSize });
export const fontColor = (color: string) => ({ color });
export const flex = (flex: number) => ({ flex });
export const flexDirection = (flexDirection: FLEX) => ({ flexDirection } as any);
export const justifyContent = (justifyContent: FLEX = FLEX.CENTER ) => ({ justifyContent } as any);
export const alignItems = (alignItems: FLEX = FLEX.CENTER) => ({ alignItems } as any);
export const alignSelf = (alignSelf: FLEX = FLEX.FLEX_S) => ({ alignSelf } as any);
export const backgroundColor = (backgroundColor: string ) => ({ backgroundColor });
export const color = (color: string ) => ({ color });
export const position = (position: POSITION = POSITION.ABSOLUTE) => ({ position } as any);

export const borderWidth = (
  top: number,
  right?: number,
  bottom?: number,
  left?: number
) => {
  if (right === undefined && bottom === undefined && left === undefined) {
    // Only one parameter is passed
    return { borderWidth: top };
  } else if (bottom === undefined && left === undefined) {
    // Two parameters are passed
    return {
      borderTopWidth: top,
      borderRightWidth: right!,
      borderBottomWidth: top,
      borderLeftWidth: right!,
    };
  } else if (left === undefined) {
    // Three parameters are passed
    return {
      borderTopWidth: top,
      borderRightWidth: right!,
      borderBottomWidth: bottom!,
      borderLeftWidth: right!,
    };
  } else {
    // Four parameters are passed
    return {
      borderTopWidth: top,
      borderRightWidth: right,
      borderBottomWidth: bottom,
      borderLeftWidth: left,
    };
  }
};

export const borderColor = (
  top: string,
  right?: string,
  bottom?: string,
  left?: string
) => {
  if (right === undefined && bottom === undefined && left === undefined) {
    // Only one parameter is passed
    return { borderColor: top };
  } else if (bottom === undefined && left === undefined) {
    // Two parameters are passed
    return {
      borderTopColor: top,
      borderRightColor: right!,
      borderBottomColor: top,
      borderLeftColor: right!,
    };
  } else if (left === undefined) {
    // Three parameters are passed
    return {
      borderTopColor: top,
      borderRightColor: right!,
      borderBottomColor: bottom!,
      borderLeftColor: right!,
    };
  } else {
    // Four parameters are passed
    return {
      borderTopColor: top,
      borderRightColor: right,
      borderBottomColor: bottom,
      borderLeftColor: left,
    };
  }
};

export const border = (radius: number, width?: number, color?: string) => {
  if (width === undefined && color === undefined) {
    // Only one parameter is passed
    return { borderRadius: radius };
  } else if (color === undefined) {
    // Two parameters are passed
    return { borderRadius: radius, borderWidth: width! };
  } else {
    // Three parameters are passed
    return { borderRadius: radius, borderWidth: width, borderColor: color };
  }
};
export const borderRadius = (
  topLeft: number,
  topRight?: number,
  bottomRight?: number,
  bottomLeft?: number
) => {
  if (
    topRight === undefined &&
    bottomRight === undefined &&
    bottomLeft === undefined
  ) {
    // Only one parameter is passed
    return { borderRadius: topLeft };
  } else if (bottomRight === undefined && bottomLeft === undefined) {
    // Two parameters are passed
    return {
      borderTopRightRadius: topLeft,
      borderTopLeftRadius: topLeft,
      borderBottomRightRadius: topRight,
      borderBottomLeftRadius: topRight,
    };
  } else {
    // Four parameters are passed
    return {
      borderTopRightRadius: topRight,
      borderTopLeftRadius: topLeft,
      borderBottomRightRadius: bottomRight,
      borderBottomLeftRadius: bottomLeft,
    };
  }
};

export const textAlign = (textAlign: SIDES = SIDES.CENTER) =>  ({ textAlign } as any);

export const width = (width: SPACE | number = SPACE.EIGHT) => ({ width });
export const minWidth = (minWidth: SPACE | number = SPACE.EIGHT) => ({ minWidth });
export const maxWidth = (maxWidth: SPACE | number = SPACE.EIGHT) => ({ maxWidth });
export const height = (height: SPACE | number = SPACE.EIGHT) => ({ height });
export const minHeight = (minHeight: SPACE | number = SPACE.EIGHT) => ({ minHeight });
export const maxHeight = (maxHeight: SPACE | number = SPACE.EIGHT) => ({ maxHeight });


export enum SPACE {
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  FOUR = 4,
  SIX = 6,
  EIGHT = 8,
  TEN = 10,
  TWELVE = 12,
  FOURTEEN = 14,
  SIXTEEN = 16,
  TWENTY = 20,
  THIRTY = 30,
  THIRTY_2 = 32,
  FORTY = 40,
  SIXTY = 60,
  EIGHTY = 80,
  HUNDRED = 100,
  HUNDRED_12 = 112,
  HUNDRED_70 = 170,

  HUNDRED_80 = 180,
  HUNDRED_90 = 190,
  TWO_HUNDRED = 200,
  SMALL_BUTTON_HEIGHT = 48,
  BACK_ICON_SIZE = 40,
  APP_BAR_HEIGHT = 48,
  BUTTON_HEIGHT = 48,
  FIFTEEN_PERCENT = "15%",
  TWENTY_PERCENT = "20%",
  TWENTY_2_PERCENT = "22%",
  TWENTY_6_PERCENT = "26%",
  THIRTY_PERCENT = "30%",
  THIRTY_5_PERCENT = "35%",
  FORTY_PERCENT = "40%",
  FORTY_4_PERCENT = "44%",
  FORTY_8_PERCENT = "48%",
  FIFTY_PERCENT = "50%",
  FIFTY_5_PERCENT = "55%",
  SIXTY_PERCENT = "60%",
  SIXTY_5_PERCENT = "65%",
  SEVENTY_PERCENT = "70%",
  SEVENTY_5_PERCENT = "75%",
  EIGHTY_PERCENT = "80%",
  EIGHTY_FIVE_PERCENT = "85%",
  NINTY_PERCENT = "90%",
  NINTY_5_PERCENT = "95%",

  INPUT_HEIGHT = 44,
  DEFAULT_PADDING = 16,
  INPUT_PADDING = 12,
  two70 = 270,
  three40 = 340,
  FULL = "100%"
}
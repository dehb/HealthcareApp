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
        lineHeight: 26,
        fontSize: 15,

    },
    body_medium: {
        fontWeight: "500",
        lineHeight: 26,
        fontSize: 15,

    },
    body_regular: {
        fontWeight: "400",
        lineHeight: 20,
        fontSize: 15,
    },
    normal_bold: {
        fontWeight: "700",
        lineHeight: 24,
        fontSize: 14,
    },
    normal_regular: {
        fontWeight: "400",
        lineHeight: 24,
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

export const textAlign = (textAlign: SIDES = SIDES.CENTER) =>
  ({ textAlign } as any);
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
  BACK_ICON_SIZE = 28,
  APP_BAR_HEIGHT = 48,
  // BUTTON_HEIGHT = 56,
  BUTTON_HEIGHT = 48,
  FIFTEEN_PERCENT = "15%",
  TWENTY_PERCENT = "20%",
  TWENTY_2_PERCENT = "22%",
  TWENTY_6_PERCENT = "26%",
  THIRTY_PERCENT = "30%",
  THIRTY_5_PERCENT = "35%",
  FORTY_PERCENT = "40%",
  FORTY_4_PERCENT = "44%",
  FORTY_6_PERCENT = "46%",
  FORTY_8_PERCENT = "48%",
  FIFTY_PERCENT = "50%",
  FIFTY_2_PERCENT = "52%",
  FIFTY_5_PERCENT = "5%",

  SIXTY_PERCENT = "60%",
  SIXTY_5_PERCENT = "65%",
  SEVENTY_PERCENT = "70%",
  SEVENTY_3_PERCENT = "73%",
  SEVENTY_5_PERCENT = "75%",
  EIGHTY_PERCENT = "80%",
  EIGHTY_TWO_PERCENT = "82%",
  EIGHTY_FIVE_PERCENT = "85%",
  NINTY_PERCENT = "90%",
  NINTY_5_PERCENT = "95%",
  NINTY_8_PERCENT = "98%",

  INPUT_HEIGHT = 44,
  DEFAULT_PADDING = 16,
  INPUT_PADDING = 12,
  LAND_LOG_WIDTH = 91,
  LAND_LOG_HEIGHT = 77.3,
  two70 = 270,
  three40 = 340,
  FULL = "100%"
}

// export const width = (width = SPACE.EIGHT, type = ) => ({ width });
export const width = (width: SPACE | number = SPACE.EIGHT) => ({ width });
export const minWidth = (minWidth: SPACE | number = SPACE.EIGHT) => ({ minWidth });
export const maxWidth = (maxWidth: SPACE | number = SPACE.EIGHT) => ({ maxWidth });
export const height = (height: SPACE | number = SPACE.EIGHT) => ({ height });
export const minHeight = (minHeight: SPACE | number = SPACE.EIGHT) => ({ minHeight });
export const maxHeight = (maxHeight: SPACE | number = SPACE.EIGHT) => ({ maxHeight });

export const padding = (
  top: number,
  right?: number,
  bottom?: number,
  left?: number
) => {
  if (right === undefined && bottom === undefined && left === undefined) {
    // Only one parameter is passed
    return {
      paddingTop: top,
      paddingRight: top,
      paddingBottom: top,
      paddingLeft: top,
    };
  } else if (bottom === undefined && left === undefined) {
    // Two parameters are passed
    return {
      paddingTop: top,
      paddingRight: right!,
      paddingBottom: top,
      paddingLeft: right!,
    };
  } else if (left === undefined) {
    // Three parameters are passed
    return {
      paddingTop: top,
      paddingRight: right!,
      paddingBottom: bottom!,
      paddingLeft: right!,
    };
  } else {
    // Four parameters are passed
    return {
      paddingTop: top,
      paddingRight: right,
      paddingBottom: bottom,
      paddingLeft: left,
    };
  }
};

export const margin = (
  top: number,
  right?: number,
  bottom?: number,
  left?: number
) => {
  if (right === undefined && bottom === undefined && left === undefined) {
    // Only one parameter is passed
    return {
      marginTop: top,
      marginRight: top,
      marginBottom: top,
      marginLeft: top,
    };
  } else if (bottom === undefined && left === undefined) {
    // Two parameters are passed
    return {
      marginTop: top,
      marginRight: right!,
      marginBottom: top,
      marginLeft: right!,
    };
  } else if (left === undefined) {
    // Three parameters are passed
    return {
      marginTop: top,
      marginRight: right!,
      marginBottom: bottom!,
      marginLeft: right!,
    };
  } else {
    // Four parameters are passed
    return {
      marginTop: top,
      marginRight: right,
      marginBottom: bottom,
      marginLeft: left,
    };
  }
};

export const zIndex = (zIndex: SPACE.EIGHT | number = SPACE.EIGHT) => ({ zIndex });
export const elevation = (elevation: number = SPACE.EIGHT) => ({ elevation });

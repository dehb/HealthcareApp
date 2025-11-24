import React from 'react'
import { Text, TextProps,  StyleProp, TextStyle } from 'react-native'
import { fontColor } from '../styles/styleDefinition'
import { COLORS } from '../styles/constants'



interface ICustomText extends TextProps{
    type?: 'title' | 'subTitle' | 'error' | 'normal' | undefined
    text: string
    left?: boolean
    right?: boolean
    numberOfLines?: number
    otherStyles?: StyleProp<TextStyle>
    weight?: 'bold' | 'medium' | 'regular' | 'light' | undefined
  }

  const CustomText = ({
    type,
    text,
    numberOfLines,
    otherStyles,
    left,
    right,
    weight,
  }: ICustomText) => {
    return (
        <Text
        numberOfLines={numberOfLines}
        style={[
          {textAlign: left ? 'left' : right ? 'right' : 'center'}, fontColor(COLORS.APP_DARK_TEXT),
            otherStyles,
        ]}
        >
        {text}
      </Text>
    )}

    export default CustomText
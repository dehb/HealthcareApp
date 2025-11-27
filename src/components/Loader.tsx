import { COLORS } from '@styles/constants'
import { width, SPACE } from '@styles/styleDefinition'
import React from 'react'
import {ActivityIndicator, ColorValue, View} from 'react-native'

interface ILoader {
  size?: number | 'large' | 'small' | undefined
  color?: ColorValue
  centralize?: boolean
}

const Loader = ({size, centralize, color}: ILoader) => {
  return (
    <View
      style={[
        size === 'large' ? width(SPACE.EIGHTY) : width(SPACE.THIRTY),
         centralize
          ? {flex: 1,
            justifyContent: "center",
            alignItems: "center"} 
          : {alignItems: "flex-start"},
      ]}>
      <ActivityIndicator
        size={size ?? 'small'}
        color={color ?? COLORS.APP_WHITE}
      />
    </View>
  )
}

export default Loader

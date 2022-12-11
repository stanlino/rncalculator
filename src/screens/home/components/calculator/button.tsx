import React from 'react'
import { Vibration } from 'react-native'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import {
  ButtonContainer,
  ButtonContent,
  ButtonText,
  Pressable,
} from './styles'

interface ButtonProps {
  name: string
  type: 'number' | 'operator'
}

export function Button(props: ButtonProps){

  const animatedScale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: animatedScale.value }]
  }))

  function handlePressIn() {
    animatedScale.value = withTiming(0.8)
    Vibration.vibrate(10)
  }

  function handlePressOut() {
    animatedScale.value = withTiming(1)
  }

  return (
    <ButtonContainer>
      <ButtonContent style={animatedStyle}>
        <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
          <ButtonText type={props.type}>
            {props.name}
          </ButtonText>
        </Pressable>
      </ButtonContent>
    </ButtonContainer>
  )
}
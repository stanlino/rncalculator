import React from 'react'
import { Vibration } from 'react-native'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useCalculator } from '../../../../hooks/useCalculator'

import {
  ButtonContainer,
  ButtonContent,
  ButtonText,
  Icon,
  Pressable,
} from './styles'

interface ButtonProps {
  name: string
  type: 'number' | 'operator'
  value: string
  icon?: boolean
}

export function Button(props: ButtonProps){

  const { detectAction } = useCalculator()

  const animatedScale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: animatedScale.value }]
  }))

  function handlePressIn() {
    animatedScale.value = withTiming(0.9)
    Vibration.vibrate(10)
  }

  function handlePressOut() {
    animatedScale.value = withTiming(1)
  }

  function handlePress() {
    detectAction(props.value)
  }

  const itemsFlex2 = ['AC', '=']

  return (
    <ButtonContainer lg={itemsFlex2.includes(props.name)}>
      <ButtonContent style={animatedStyle}>
        <Pressable 
          onPress={handlePress} 
          onPressIn={handlePressIn} 
          onPressOut={handlePressOut}
        >
          {props.icon ? (
            <Icon name={props.name} />
          ) : (
            <ButtonText type={props.type}>
              {props.name}
            </ButtonText>
          )}
        </Pressable>
      </ButtonContent>
    </ButtonContainer>
  )
}
import React from 'react'
import { Vibration } from 'react-native'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

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
  action: (name: string) => void
}

export function Button(props: ButtonProps){

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
    props.action(props.value)
  }

  return (
    <ButtonContainer>
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
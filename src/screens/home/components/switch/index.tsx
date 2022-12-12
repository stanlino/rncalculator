import React from 'react'

import { useThemeContext } from '../../../../providers/theme'

import {
  Container, Icon, Pressable
} from './styles'

export function Switch(){

  const { toggleTheme, themeName } = useThemeContext()

  const currentThemeIsDark = themeName === 'dark'

  return (
    <Container>
      <Pressable onPress={toggleTheme}>
        <Icon name="sun" active={currentThemeIsDark} />
      </Pressable>
      <Pressable onPress={toggleTheme}>
        <Icon name="moon" active={!currentThemeIsDark} />
      </Pressable>
    </Container>
  )
}
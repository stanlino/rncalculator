import React from 'react'

import { useCalculator } from '../../hooks/useCalculator'

import { Switch } from './components/switch'
import { Calculator } from './components/calculator'

import {
  Body,
  Container, 
  Header, 
  Output, 
  TopBar
} from './styles'

export function HomeScreen(){
  const { value } = useCalculator()

  return (
    <Container>
      <TopBar>
        <Switch />
      </TopBar>
      <Header>
        <Output
          numberOfLines={5}
          adjustsFontSizeToFit
        >
          {value}
        </Output>
      </Header>
      <Body>
        <Calculator />
      </Body>
    </Container>
  )
}
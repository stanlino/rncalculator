import React from 'react'

import { Switch } from './components/switch'

import {
  Body,
  Container, 
  Header, 
  TopBar
} from './styles'
import { Calculator } from './components/calculator'

export function HomeScreen(){
  return (
    <Container>
      <TopBar>
        <Switch />
      </TopBar>
      <Header>

      </Header>
      <Body>
        <Calculator />
      </Body>
    </Container>
  )
}
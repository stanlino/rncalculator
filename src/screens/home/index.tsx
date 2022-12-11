import React, { useState } from 'react'

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

  const [output, setOutput] = useState('0')

  function onButtonPress(value: string){
    if (value === 'AC') return setOutput('0')
    if (output === '0') return setOutput(value)

    setOutput(prev => prev+value)
  }

  return (
    <Container>
      <TopBar>
        <Switch />
      </TopBar>
      <Header>
        <Output
          numberOfLines={3}
          adjustsFontSizeToFit
        >
          {output}
        </Output>
      </Header>
      <Body>
        <Calculator onButtonPress={onButtonPress} />
      </Body>
    </Container>
  )
}
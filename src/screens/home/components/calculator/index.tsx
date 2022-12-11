import React from 'react'

import {
  Container,
  Row
} from './styles'

import rows from './rows'
import { Button } from './button'

interface CalculatorProps {
  onButtonPress: (name: string) => void
}

export function Calculator({ onButtonPress }: CalculatorProps){
  return (
    <Container>
      {rows.map((row, index) => (
        <Row key={index.toString()}>
          {row.map((button) => (
            <Button 
              name={button.name} 
              type={button.type} 
              value={button.value}
              icon={button.icon}
              key={button.name} 
              action={onButtonPress}
            />
          ))}
        </Row>
      ))}
    </Container>
  )
}
import React from 'react'

import { Button } from './button'

import {
  Container,
  Row
} from './styles'

import rows from './rows'

export function Calculator(){
  return (
    <Container>
      {rows.map((row, index) => (
        <Row key={index.toString()}>
          {row.map((button) => (
            <Button 
              {...button}
              key={button.name} 
            />
          ))}
        </Row>
      ))}
    </Container>
  )
}
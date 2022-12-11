import React from 'react'

import {
  Container,
  Row
} from './styles'

import rows from './rows'
import { Button } from './button'

export function Calculator(){
  return (
    <Container>
      {rows.map((row, index) => (
        <Row key={index.toString()}>
          {row.map((button) => (
            <Button name={button.name} type={button.type} key={button.name} />
          ))}
        </Row>
      ))}
    </Container>
  )
}
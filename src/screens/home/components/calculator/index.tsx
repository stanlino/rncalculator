import React from 'react'

import {
  Button,
  Container,
  Row,
  Text,
  Wrapper
} from './styles'

import rows from './rows'

export function Calculator(){
  return (
    <Container>
      {rows.map((row, index) => (
        <Row key={index.toString()}>
          {row.map((button, index) => (
            <Wrapper>
              <Button key={button.name}>
                <Text type={button.type}>{button.name}</Text>
              </Button>
            </Wrapper>
          ))}
        </Row>
      ))}
    </Container>
  )
}
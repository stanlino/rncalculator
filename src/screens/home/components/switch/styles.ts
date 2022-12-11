import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  height: 50px;
  width: 120px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.fg};

  flex-direction: row;
`

export const Pressable = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;
`

interface IconProps {
  active: boolean
}

export const Icon = styled(Feather) <IconProps>`
  font-size: 24px;
  color: ${({ theme, active }) => active ?
    theme.colors.text_secondary :
    theme.colors.text
  };
`
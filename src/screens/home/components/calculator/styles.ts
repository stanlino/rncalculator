import Animated from 'react-native-reanimated'
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 28px;
`

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
`

export const ButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const ButtonContent = styled(Animated.View)`
  background-color: ${({ theme }) => theme.colors.button};
  height: 80%;
  aspect-ratio: 1;

  border-radius: 8px;

  elevation: 1;
`

export const Pressable = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;
`

interface TextProps {
  type: 'number' | 'operator'
}

export const Icon = styled(Feather) <TextProps>`
  font-size: 24px;

  color: #0D98BA;
`

export const ButtonText = styled.Text<TextProps>`
  font-size: 24px;
  font-weight: bold;

  color: ${({ theme, type }) => type === 'number' ?
    theme.colors.text :
    `#0D98BA`
  };
`
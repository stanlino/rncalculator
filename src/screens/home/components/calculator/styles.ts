import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 28px;
`

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
`

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Button = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.button};
  height: 80%;
  aspect-ratio: 1;

  border-radius: 8px;

  align-items: center;
  justify-content: center;
`

interface TextProps {
  type: 'number' | 'operator'
}

export const Text = styled.Text<TextProps>`
  font-size: 24px;
  font-weight: bold;

  color: ${({ theme, type }) => type === 'number' ?
    theme.colors.text :
    `#0D98BA`
  };
`
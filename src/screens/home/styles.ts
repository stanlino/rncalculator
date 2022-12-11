import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
`

export const TopBar = styled.View`
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
`

export const Header = styled.View`
  flex: 1;
`

export const Output = styled.Text`
  font-size: 48px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  text-align: right;
  padding: 16px;
`

export const Body = styled.View`
  flex: 3;
  background-color: ${({ theme }) => theme.colors.fg};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`
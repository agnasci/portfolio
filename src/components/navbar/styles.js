import styled from 'styled-components'

export const NavBackground = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const MainDiv = styled.div`
  box-sizing: border-box;
  padding-right: 25px;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 420px) {
    justify-content: center;
    padding-right: 0px;
  }
`

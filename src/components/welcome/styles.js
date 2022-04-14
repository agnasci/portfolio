import styled from 'styled-components'

export const WhiteTitle = styled.span`
  color: var(--white);
`
export const BlueTitle = styled.span`
  color: var(--blue);
`

export const WelcomeDiv = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

export const MainTitle = styled.span`
  font-size: 62px;
  font-weight: 600;

  @media (max-width: 650px) {
    font-size: 48px;
  }

  @media (max-width: 500px) {
    font-size: 38px;
  }

  @media (max-width: 400px) {
    font-size: 34px;
  }

  @media (max-width: 330px) {
    font-size: 30px;
  }

  @media (max-width: 290px) {
    font-size: 24px;
  }
`

export const SecondTitle = styled.span`
  font-size: 37px;
  font-weight: 600;

  @media (max-width: 650px) {
    font-size: 28px;
  }

  @media (max-width: 500px) {
    font-size: 22px;
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }

  @media (max-width: 330px) {
    font-size: 18px;
  }

  @media (max-width: 290px) {
    font-size: 16px;
  }
`

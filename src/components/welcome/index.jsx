import React from 'react'

import Typical from 'react-typical'

import {
  WhiteTitle,
  BlueTitle,
  WelcomeDiv,
  MainTitle,
  SecondTitle,
} from './styles'

const Welcome = () => {
  return (
    <WelcomeDiv id="welcome">
      <MainTitle>
        <BlueTitle>{'< '}</BlueTitle>
        <WhiteTitle>Matheus Aguiar</WhiteTitle>
        <BlueTitle>{' />'}</BlueTitle>
      </MainTitle>

      <SecondTitle>
        <WhiteTitle>
          <Typical steps={['Front-End Developer']} />
        </WhiteTitle>
      </SecondTitle>
    </WelcomeDiv>
  )
}

export default Welcome

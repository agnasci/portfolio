import styled from 'styled-components'

import mathPhoto from '../../images/math-photo.png'

// MAIN DIV

export const AboutDiv = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  @media (max-height: 830px) {
    min-height: auto;
    padding-bottom: 15px;
  }
`

// TITLE DIV

export const TitleDiv = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AboutTitle = styled.span`
  font-size: 37px;
  font-weight: 600;
  padding-top: 40px;

  @media (max-width: 290px) {
    font-size: 32px;
  }
`

export const WhiteTitle = styled.span`
  color: var(--white);
`
export const BlueTitle = styled.span`
  color: var(--blue);
`

// CONTENT DIV

export const ContentDiv = styled.div`
  width: 85%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1514px) {
    flex-direction: column-reverse;
  }
`

// VIDEO AREA

export const VideoWhiteBackground = styled.div`
  width: 640px;
  height: 360px;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;

  @media (max-width: 715px) {
    width: 540px;
    height: 303.75px;
  }

  @media (max-width: 615px) {
    width: 352.75px;
    height: 198.42px;
  }

  @media (max-width: 376px) {
    width: 318.75px;
    height: 179.29px;
  }

  @media (max-width: 330px) {
    width: 272px;
    height: 153px;
  }

  @media (max-width: 290px) {
    width: 238px;
    height: 133.87px;
  }
`

export const VideoBlueBackground = styled.div`
  box-sizing: content-box;
  background-color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 8px;
`

// TEXT CARD

export const TextBackgroundCard = styled.div`
  width: 550px;
  height: 275px;
  border-radius: 8px;
  display: flex;
  background-color: var(--blue);
  border: 2px solid var(--white);

  @media (max-width: 1516px) {
    margin-bottom: 40px;
  }

  @media (max-width: 715px) {
    margin-left: -15px;
    width: 100%;
    margin-bottom: 0px;
  }

  @media (max-width: 415px) {
    height: 200px;
    width: 90%;
  }
`

export const TextCard = styled.div`
  width: 100%;
  height: 275px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  overflow: hidden;
  box-shadow: -5px -5px 5px 0px rgba(0, 0, 0, 0.15);
  position: relative;
  top: 15px;
  left: 15px;

  @media (max-width: 415px) {
    height: 200px;
  }
`

export const ImgArea = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 420px) {
    width: 35%;
  }

  @media (max-width: 376px) {
    display: none;
  }
`

export const ImgDiv = styled.div`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--blue);
  overflow: hidden;

  background-image: url(${mathPhoto});
  background-size: 110% 110%;
  background-repeat: no-repeat;

  @media (max-width: 545px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 420px) {
    width: 75px;
    height: 75px;
  }
`

export const TextArea = styled.div`
  width: 54%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--darkBlue);
  text-align: justify;

  @media (max-width: 545px) {
    font-size: 12px;
  }

  @media (max-width: 420px) {
    font-size: 9.2px;
  }

  @media (max-width: 376px) {
    width: 80%;
    font-size: 10px;
  }
`

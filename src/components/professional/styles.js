import styled from 'styled-components'

export const ProfessionalDiv = styled.div`
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

  @media (max-height: 600px) {
    margin-top: 85px;
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

export const ProfessionalTitle = styled.span`
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
  min-height: 80vh;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1514px) {
    flex-direction: column;
  }
`

// TECH GRAPHIC

export const GraphicArea = styled.div`
  box-sizing: border-box;
  width: 550px;
  height: 580px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  gap: 15px;

  @media (max-width: 715px) {
    width: 100%;
  }
`

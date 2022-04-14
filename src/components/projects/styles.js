import styled from 'styled-components'

// MAIN DIV

export const ProjectsDiv = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  @media (max-height: 740px) {
    min-height: auto;
    padding-bottom: 15px;
    margin-bottom: 150px;
  }

  @media (max-width: 280px) {
    margin-bottom: 0px;
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

export const ProjectsTitle = styled.span`
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
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

// PROJECTS AREA

export const ProjectArea = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`

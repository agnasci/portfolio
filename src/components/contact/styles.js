import styled from 'styled-components'

export const ContactDiv = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  @media (max-width: 1260px) {
    margin-top: 420px;
  }

  @media (max-width: 1024px) {
    margin-top: 200px;
  }

  @media (max-width: 912px) {
    margin-top: 100px;
  }

  @media (max-width: 420px) {
    margin-top: 0px;
  }

  @media (max-height: 1023px) {
    padding-bottom: 40px;
  }

  @media (max-height: 830px) {
    min-height: auto;
    padding-bottom: 15px;
  }

  @media (max-height: 600px) {
    margin-top: -150px;
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

export const ContactTitle = styled.span`
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

// CONTACT CARD

export const ContactBackground = styled.div`
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
    width: 100%;
    margin-left: -15px;
  }

  @media (max-width: 415px) {
    height: 200px;
    width: 90%;
    margin-bottom: 0px;
  }
`

export const ContactCard = styled.div`
  width: 100%;
  height: 275px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  gap: 15px;
  overflow: hidden;
  box-shadow: -5px -5px 5px 0px rgba(0, 0, 0, 0.15);
  position: relative;
  top: 15px;
  left: 15px;

  @media (max-width: 415px) {
    height: 200px;
  }
`

export const ImagesRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;

  & a {
    cursor: pointer;

    & * {
      width: 65px;
      height: 65px;
      color: var(--darkBlue);
    }

    &:hover {
      & * {
        color: var(--blue);
      }
    }
  }

  @media (max-width: 415px) {
    & a {
      & * {
        width: 50px;
        height: 50px;
      }
    }
  }

  @media (max-width: 280px) {
    & a {
      & * {
        width: 35px;
        height: 35px;
      }
    }
  }
`

export const PhoneNumber = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: var(--darkBlue);

  @media (max-width: 415px) {
    font-size: 18px;
  }

  @media (max-width: 415px) {
    font-size: 14px;
  }
`

// CONTACT FORM

export const FormBackground = styled.div`
  box-sizing: border-box;
  width: 550px;
  height: 80vh;
  max-height: 580px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border: 4px solid var(--blue);
  padding: 25px;
  align-items: center;

  & input {
    width: 95%;
    border-radius: 8px;
    background-color: var(--white);
    border: 2px solid var(--darkBlue);
    color: var(--darkBlue);
    padding: 10px;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 25px;

    &:focus {
      outline: none !important;
      border: 2px solid var(--blue);
    }
  }

  & textarea {
    width: 95%;
    border-radius: 8px;
    background-color: var(--white);
    border: 2px solid var(--darkBlue);
    color: var(--darkBlue);
    padding: 10px;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 25px;
    resize: none;

    &:focus {
      outline: none !important;
      border: 2px solid var(--blue);
    }
  }

  @media (max-width: 1516px) {
    margin-bottom: 40px;
  }

  @media (max-width: 715px) {
    width: 100%;
    margin-bottom: 0px;
  }

  @media (max-width: 415px) {
    margin-top: 45px;
    height: auto;
    width: 100%;
  }

  @media (max-height: 600px) {
    height: auto;
    margin-bottom: 0px;
  }
`

export const FormTitle = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: var(--darkBlue);
  margin-bottom: 25px;

  @media (max-width: 415px) {
    font-size: 22px;
  }
`

export const InputTitle = styled.label`
  font-size: 18px;
  font-weight: 700;
  align-self: flex-start;
  color: var(--darkBlue);
  margin-bottom: 5px;
  margin-left: 5px;

  @media (max-width: 415px) {
    font-size: 16px;
  }
`

export const SubmitButton = styled.button`
  width: 150px;
  height: 150px;
  background-color: var(--darkBlue);
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: var(--blue);
  }

  @media (max-width: 415px) {
    height: 75px;
    width: 70%;
  }
`

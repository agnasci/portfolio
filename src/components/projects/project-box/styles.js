import styled from 'styled-components'

// MAIN DIV

export const BlueBackground = styled.div`
  box-sizing: border-box;
  width: 520px;
  height: 260px;
  background-color: var(--blue);
  border-radius: 8px;
  border: 2px solid var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 420px;
    height: 210px;
  }

  @media (max-width: 800px) {
    width: 380px;
    height: 190px;
  }

  @media (max-width: 480px) {
    width: 310px;
    height: 155px;
  }

  @media (max-width: 280px) {
    width: 210px;
    height: 105px;
  }
`

export const WhiteBackground = styled.div`
  box-sizing: border-box;
  width: 520px;
  height: 260px;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--white);
  padding: 0px 1px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: 0.2s;

  &:hover {
    transform: translateY(10px) translateX(10px);
    box-shadow: -4px -4px 4px 0px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }

  & img {
    max-width: 100%;
    min-width: 100%;
    max-height: 100%;
    min-height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }

  @media (max-width: 1024px) {
    width: 420px;
    height: 210px;
  }

  @media (max-width: 800px) {
    width: 380px;
    height: 190px;
  }

  @media (max-width: 480px) {
    width: 310px;
    height: 155px;
  }

  @media (max-width: 280px) {
    width: 210px;
    height: 105px;
  }
`

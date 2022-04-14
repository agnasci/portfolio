import { createGlobalStyle } from 'styled-components'

import styled from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  :root {
    --white: #f2f3f5;
    --blue: #63bdd6;
    --darkBlue: #283854;
  }
`
export const MainContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom, #141e30, #243b55);
  background-attachment: fixed;
  overflow: hidden;
`

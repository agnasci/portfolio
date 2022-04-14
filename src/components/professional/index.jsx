import React, { useEffect } from 'react'

import GraphicItem from './graphic-item'

import Aos from 'aos'
import 'aos/dist/aos.css'

import {
  ProfessionalDiv,
  WhiteTitle,
  BlueTitle,
  TitleDiv,
  ProfessionalTitle,
  ContentDiv,
  GraphicArea,
} from './styles'

const Professional = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <ProfessionalDiv id="professional">
      <TitleDiv>
        <ProfessionalTitle data-aos="fade">
          <BlueTitle>{'< '}</BlueTitle>
          <WhiteTitle>Profissional</WhiteTitle>
          <BlueTitle>{' />'}</BlueTitle>
        </ProfessionalTitle>
      </TitleDiv>

      <ContentDiv>
        <GraphicArea>
          <GraphicItem title="HTML" percentage="100%" />

          <GraphicItem title="CSS" percentage="100%" />

          <GraphicItem title="JavaScript" percentage="100%" />

          <GraphicItem title="Git" percentage="90%" />

          <GraphicItem title="React" percentage="85%" />

          <GraphicItem title="TypeScript" percentage="75%" />

          <GraphicItem title="Next" percentage="70%" />

          <GraphicItem title="Node" percentage="60%" />
        </GraphicArea>

        <GraphicArea>
          <GraphicItem title="Styled Components" percentage="100%" />

          <GraphicItem title="Material UI" percentage="85%" />

          <GraphicItem title="Figma" percentage="80%" />

          <GraphicItem title="Bootstrap" percentage="75%" />

          <GraphicItem title="Sass CSS" percentage="70%" />

          <GraphicItem title="Redux" percentage="65%" />

          <GraphicItem title="Photoshop" percentage="55%" />

          <GraphicItem title="Docker" percentage="45%" />
        </GraphicArea>
      </ContentDiv>
    </ProfessionalDiv>
  )
}

export default Professional

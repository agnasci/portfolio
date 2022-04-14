import React, { useEffect } from 'react'

import ProjectBox from './project-box'

import Aos from 'aos'
import 'aos/dist/aos.css'

import {
  ProjectsDiv,
  WhiteTitle,
  BlueTitle,
  TitleDiv,
  ProjectsTitle,
  ContentDiv,
  ProjectArea,
} from './styles'

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <ProjectsDiv id="projects">
      <TitleDiv>
        <ProjectsTitle data-aos="fade">
          <BlueTitle>{'< '}</BlueTitle>
          <WhiteTitle>Projetos</WhiteTitle>
          <BlueTitle>{' />'}</BlueTitle>
        </ProjectsTitle>
      </TitleDiv>

      <ContentDiv>
        <ProjectArea>
          <ProjectBox />

          <ProjectBox />

          <ProjectBox />

          <ProjectBox />
        </ProjectArea>
      </ContentDiv>
    </ProjectsDiv>
  )
}

export default Projects

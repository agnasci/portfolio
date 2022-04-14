// Basic Imports

import React from 'react'
import ReactDOM from 'react-dom'

// General Imports

import GlobalStyle, { MainContainer } from './styles/global'

import Particles from 'react-particles-js'
import ParticlesConfig from './components/particles/particlesConfig'

import NavBar from './components/navbar'

// Page Components Imports

import Welcome from './components/welcome'
import About from './components/about'
import Professional from './components/professional'
import Projects from './components/projects'
import Contact from './components/contact'

ReactDOM.render(
  <>
    <GlobalStyle />

    <Particles params={ParticlesConfig} style={{ position: 'fixed' }} />

    <MainContainer>
      <NavBar />

      <Welcome />

      <About />

      <Professional />

      <Projects />

      <Contact />
    </MainContainer>
  </>,
  document.getElementById('root')
)

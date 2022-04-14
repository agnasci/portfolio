import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import TestImg from '../../../images/mock.png'

import { BlueBackground, WhiteBackground } from './styles'

const ProjectBox = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <BlueBackground data-aos="fade">
      <WhiteBackground>
        <img src={TestImg} alt="Teste" />
      </WhiteBackground>
    </BlueBackground>
  )
}

export default ProjectBox

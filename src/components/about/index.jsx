import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import ReactPlayer from 'react-player/youtube'

import {
  AboutDiv,
  WhiteTitle,
  BlueTitle,
  TitleDiv,
  AboutTitle,
  ContentDiv,
  TextBackgroundCard,
  TextCard,
  VideoBlueBackground,
  VideoWhiteBackground,
  TextArea,
  ImgArea,
  ImgDiv,
} from './styles'

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <AboutDiv id="about">
      <TitleDiv>
        <AboutTitle data-aos="fade">
          <BlueTitle>{'< '}</BlueTitle>
          <WhiteTitle>Perfil</WhiteTitle>
          <BlueTitle>{' />'}</BlueTitle>
        </AboutTitle>
      </TitleDiv>

      <ContentDiv>
        <VideoBlueBackground data-aos="fade-right" data-aos-duration="1100">
          <VideoWhiteBackground>
            <ReactPlayer
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=YRNyamyBOIQ"
            />
          </VideoWhiteBackground>
        </VideoBlueBackground>

        <TextBackgroundCard data-aos="fade-left" data-aos-duration="1100">
          <TextCard data-aos="fade-left" data-aos-duration="1200">
            <ImgArea>
              <ImgDiv />
            </ImgArea>

            <TextArea>
              <p>
                Hey! Meu nome é Matheus Aguiar do Nascimento, tenho 23 anos e
                moro em Florianópolis, SC. Sou estudante de Gestão de Tecnologia
                da Informação e trabalho profissionalmente como desenvolvedor
                front-end desde o início de 2021. Perto desse card você
                encontrará um vídeo onde me apresento um pouco mais a fundo, mas
                você também pode conhecer um pouco do meu trabalho ao continuar
                explorando o site!
              </p>
            </TextArea>
          </TextCard>
        </TextBackgroundCard>
      </ContentDiv>
    </AboutDiv>
  )
}

export default About

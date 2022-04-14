import React, { useEffect } from 'react'

import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'

import {
  ContactDiv,
  WhiteTitle,
  BlueTitle,
  TitleDiv,
  ContactTitle,
  ContentDiv,
  ContactBackground,
  ContactCard,
  ImagesRow,
  PhoneNumber,
  FormBackground,
  FormTitle,
  InputTitle,
  SubmitButton,
} from './styles'

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <ContactDiv id="contact">
      <TitleDiv>
        <ContactTitle data-aos="fade">
          <BlueTitle>{'< '}</BlueTitle>
          <WhiteTitle>Contato</WhiteTitle>
          <BlueTitle>{' />'}</BlueTitle>
        </ContactTitle>
      </TitleDiv>

      <ContentDiv>
        <ContactBackground data-aos="fade-right">
          <ContactCard>
            <ImagesRow>
              <a
                href="https://api.whatsapp.com/send?phone=5548984679566"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>

              <a
                href="mailto:mathscndev@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://www.linkedin.com/in/dev-matheus-aguiar/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/agnasci"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </ImagesRow>

            <PhoneNumber>+55 (48) 98467-9566</PhoneNumber>
          </ContactCard>
        </ContactBackground>

        <FormBackground data-aos="fade-left" data-aos-duration="1100">
          <FormTitle>CONTATO</FormTitle>

          <InputTitle htmlFor="ContactName">Nome Completo</InputTitle>
          <input type="text" id="ContactName" name="name" />

          <InputTitle htmlFor="ContactSubject">Assunto</InputTitle>
          <input type="text" id="ContactSubject" name="subject" />

          <InputTitle htmlFor="ContactEmail">E-mail</InputTitle>
          <input type="email" id="ContactEmail" name="email" />

          <InputTitle htmlFor="ContactMessage">Mensagem</InputTitle>
          <textarea name="message" id="ContactMessage" cols="10" rows="10" />

          <SubmitButton>Enviar</SubmitButton>
        </FormBackground>
      </ContentDiv>
    </ContactDiv>
  )
}

export default Contact

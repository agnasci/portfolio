import React, { useState } from 'react'

import { NavBackground, MainDiv } from './styles'

import './styles.css'

import { Link } from 'react-scroll'

const NavBar = () => {
  const [navbar, setNavbar] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeNav)
  }

  return (
    <NavBackground className={navbar ? 'navScroll' : 'navInit'}>
      <MainDiv>
        <Link
          className={navbar ? 'buttonNavOn' : 'buttonNavOff'}
          style={{ marginRight: 15 }}
          to="welcome"
          smooth={true}
          duration={1000}
        >
          Início
        </Link>

        <Link
          className={navbar ? 'buttonNavOn' : 'buttonNavOff'}
          style={{ marginRight: 15 }}
          to="about"
          smooth={true}
          duration={1000}
        >
          Perfil
        </Link>

        <Link
          className={navbar ? 'buttonNavOn' : 'buttonNavOff'}
          style={{ marginRight: 15 }}
          to="professional"
          smooth={true}
          duration={1000}
        >
          Profissional
        </Link>

        <Link
          className={navbar ? 'buttonNavOn' : 'buttonNavOff'}
          style={{ marginRight: 15 }}
          to="projects"
          smooth={true}
          duration={1000}
        >
          Projetos
        </Link>

        <Link
          className={navbar ? 'buttonNavOn' : 'buttonNavOff'}
          to="contact"
          smooth={true}
          duration={1000}
        >
          Contato
        </Link>
      </MainDiv>
    </NavBackground>
  )
}

export default NavBar

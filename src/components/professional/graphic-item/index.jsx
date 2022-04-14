import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { ItemArea, ItemTitle, PercentageBackground, Percentage } from './styles'

const GraphicItem = ({ title, percentage }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <ItemArea data-aos="fade-right">
      <ItemTitle>{title}</ItemTitle>

      <PercentageBackground>
        <Percentage style={{ width: percentage }} />
      </PercentageBackground>
    </ItemArea>
  )
}

export default GraphicItem

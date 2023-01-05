import React from 'react'
import {
    ZelleContainer,
    ZelleImg
} from './ZelleElements'
import zelle from '../../images/zelle.png'

const Zelle = () => {
  return (
    <ZelleContainer>
        <ZelleImg src={zelle} alt='Zelle' />
    </ZelleContainer>
  )
}

export default Zelle
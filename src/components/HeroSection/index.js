import React, { useState } from 'react'
import { 
    HeroContainer, 
    HeroBg, 
    ImgBg, 
    HeroContent, 
    // HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight,
    ImgLogo,
    HeroContentBg,
} from './HeroElements'
import Image from '../../images/soccerball2.jpg'
import { Button } from '../ButtonElement'
import logo from '../../images/GnA_Black.jpg'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
                <HeroBg>
                    <ImgBg src={Image} alt='Goal-and-assists' />
                </HeroBg>
                <HeroContent>
                    <HeroContentBg>
                        <ImgLogo src={logo} alt='Goals and Assists' />
                    </HeroContentBg>
                    <HeroP>
                        You have the goals. We provide the assists.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button
                            to='services'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}                        
                        >
                            Our Mission {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
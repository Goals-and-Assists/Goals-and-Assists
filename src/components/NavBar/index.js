import React, { useState, useEffect } from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  // ImgWrap,
  // Img
} from './NavbarElements'
// import logo from '../../images/GnA_Black.jpg'


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  const navigateDonate = () => {
    scroll.scrollToBottom()
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer id='nav'>
          <NavLogo 
            to='/'
            onClick={toggleHome}
          >
            Goals and Assists
            {/* <ImgWrap>
              <Img src={logo} alt='Goals and Assists' />
            </ImgWrap> */}
          </NavLogo>
          <MobileIcon
            onClick={toggle}
          >
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks 
                to='mission'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >
                Our Mission
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='support'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >
                How to Support
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to='donate'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >
                Donate
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={navigateDonate}>Ways to Donate</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
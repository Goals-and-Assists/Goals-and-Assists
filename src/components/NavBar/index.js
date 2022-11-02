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

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
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
                to='services'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={0}
              >
                Our Mission
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'>How to Support</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='donate'>Donate</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/donate'>Ways to Donate</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
import React from 'react'
import { 
    FaLinkedin, 
    FaInstagram, 
    FaFacebook 
} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterContactLink, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    WebsiteRights,
    WebsiteRightsWrapper,
    ImgWrap,
    Img
} from './FooterElements'
import logo from '../../images/GnA_Black.jpg'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                            <FooterLink 
                                to='mission'
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={0}
                            >
                                Our Mission
                            </FooterLink>
                            <FooterLink 
                                    to='donate'
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={0}
                                >
                                    Ways to Donate
                                </FooterLink>
                                <FooterContactLink href='mailto:goalsandassistsorg@gmail.com'>
                                    Contact Us
                                </FooterContactLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>                        
                        <ImgWrap>
                            <Img src={logo} alt='Goals and Assists'/>
                        </ImgWrap>
                    </SocialLogo>
                    <WebsiteRightsWrapper>
                        <WebsiteRights>Goals and Assists © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <WebsiteRights>501c3 tax-exempt organization, EIN 87-3901111</WebsiteRights>
                    </WebsiteRightsWrapper>
                        <SocialIcons>
                            <SocialIconLink href='//www.instagram.com/goalsandassists/' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='//www.linkedin.com/company/goals-and-assists' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='//www.facebook.com/goalsandassists/' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
        </FooterWrap>
</FooterContainer>
  )
}

export default Footer
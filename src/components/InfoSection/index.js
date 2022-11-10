import React from 'react'
import {
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    ImgWrap,
    Img
} from './InfoElements'
import Image from '../../images/goals_and_assists.jpg'



const InfoSection = () => {
    return (
        <div>
            <InfoContainer id='mission'>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                        <TextWrapper>
                            <TopLine>Goals and Assists</TopLine>
                            <Heading>Our Mission:</Heading>
                            <Subtitle>
                                Our purpose is to provide financial and developmental assistance to nurture the athletic, academic, and
                                character development of gifted boys and girls from all over the world. By providing them with the support
                                structure they need to be relieved of the stresses related to basic day-to-day needs, we allow them to
                                fully focus on advancing their athletic abilities, progressing in their education, and further developing their
                                character.
                            </Subtitle>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={Image} alt='student' />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </div>
    )
}

export default InfoSection
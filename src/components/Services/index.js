import React from 'react'
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    // ServicesIcon, 
    ServicesH2, 
    ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>
            Our Philosophy
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesH2>Education</ServicesH2>
                <ServicesP>
                    Education is a key pillar to everything that we do at our organization. All of our students have
                    to perform in the classroom.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesH2>Sports</ServicesH2>
                <ServicesP>
                    We strongly believe that athletics provide the discipline, structure, and support network
                    needed to thrive in a new environment. By recruiting elite athletes, we know that they will be
                    given the best opportunity for success.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesH2>Character</ServicesH2>
                <ServicesP>
                Goals and Assists isn’t looking for just athletes, or even students. We are looking for leaders.
                Our goal through our program is to continue the growth of strong characters of future role
                models.
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
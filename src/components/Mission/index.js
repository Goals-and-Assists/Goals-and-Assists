import React from 'react'
import { 
    MissionContainer, 
    MissionH1, 
    MissionWrapper, 
    MissionCard, 
    MissionIcon, 
    MissionH2, 
    MissionP } from './MissionElements'
import Image from '../../images/goals_and_assists.jpg'

const Mission = () => {
  return (
    <MissionContainer>
        <MissionH1>Our Mission</MissionH1>
        <MissionWrapper>
            <MissionCard>
                <MissionIcon src={Image} alt='soccer player' />
                <MissionH2>Support</MissionH2>
                <MissionP>
                Our purpose is to provide financial and developmental assistance to nurture the athletic, academic, and
character development of gifted boys and girls from all over the world. By providing them with the support
structure they need to be relieved of the stresses related to basic day-to-day needs, we allow them to
fully focus on advancing their athletic abilities, progressing in their education, and further developing their
character.
                </MissionP>
            </MissionCard>
        </MissionWrapper>
    </MissionContainer>
  )
}

export default Mission
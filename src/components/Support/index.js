import React from 'react'
import SupportItems from '../SupportItems'
import { supportData } from './data'
import { 
  SupportContainer, 
  TopLine,
  TopLineWrapper,
  SupportWrapper
} from './Supportelements'


const Support = () => {
  return (
    <SupportContainer id='support'>
      <TopLineWrapper>
        <TopLine>Ways to Support</TopLine>
      </TopLineWrapper>
      <SupportWrapper>
        {
          supportData.map((item, index) => (
            <SupportItems data={item} key={index} />
          ))
        }
        </SupportWrapper>
    </SupportContainer>
  )
}

export default Support
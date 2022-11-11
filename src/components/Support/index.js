import React from 'react'
import SupportItems from '../SupportItems'
import { supportData } from './data'
import { 
  SupportContainer, 
  SupportH1,
  // TopLineWrapper,
  SupportWrapper
} from './Supportelements'


const Support = () => {
  return (
    <SupportContainer id='support'>
        <SupportH1>Ways to Support</SupportH1>
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
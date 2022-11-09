import React from 'react'
import SupportItems from '../SupportItems'
import { supportData } from './data'
import { SupportContainer, TopLine } from './Supportelements'


const Support = () => {
  return (
    <SupportContainer>
      <TopLine>Ways to Support</TopLine>
      {
        supportData.map((item, index) => (
          <SupportItems data={item} key={index} />
        ))
      }
    </SupportContainer>
  )
}

export default Support
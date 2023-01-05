import React, { useEffect } from 'react'
import {
    AmazonSmileContainer,
    AmazonImg
} from './AmazonSmileElements'
import Amazon from '../../images/amazon-smile.png'


const AmazonSmile = () => {
  useEffect(() => {
    
  })

  return (
    <AmazonSmileContainer>
        <AmazonImg src={Amazon} alt='Amazon Smile banner' />
    </AmazonSmileContainer>
  )
}

export default AmazonSmile
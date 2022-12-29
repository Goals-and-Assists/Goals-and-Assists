import React from 'react'
import {
    AmazonSmileContainer,
    AmazonImg
} from './AmazonSmileElements'
import Amazon from '../../images/amazon-smile.png'


const AmazonSmile = () => {
  return (
    <AmazonSmileContainer>
        <AmazonImg src={Amazon} alt='Amazon Smile banner' />
    </AmazonSmileContainer>
  )
}

export default AmazonSmile
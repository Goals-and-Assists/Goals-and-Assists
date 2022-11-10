import React from 'react'
import {
    SupportItemsContainer,
    SupportItemsWrapper,
    TextWrapper, 
    Heading, 
    Subtitle
} from './SupportItemsElements'

const SupportItems = ({data}) => {
  return (
    <SupportItemsContainer>
    <SupportItemsWrapper grid={data.grid}>
        <TextWrapper>
            <Heading>{data.headline}</Heading>
                <Subtitle>
                    {data.description}
                </Subtitle>
            </TextWrapper>
    </SupportItemsWrapper>
</SupportItemsContainer>
  )
}

export default SupportItems
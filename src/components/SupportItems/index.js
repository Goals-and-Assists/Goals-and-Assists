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
                <Subtitle>
                    {data.description2}
                </Subtitle>
                <Subtitle>
                    {data.description3}
                </Subtitle>
            </TextWrapper>
    </SupportItemsWrapper>
</SupportItemsContainer>
  )
}

export default SupportItems
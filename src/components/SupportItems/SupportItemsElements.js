import styled from "styled-components";

export const SupportItemsContainer = styled.div`
    color: #000;
    background: '#f9f9f9';
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 5px solid red; */

`

export const SupportItemsWrapper = styled.div`
    /* display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center; */
    /* border: 5px solid red; */
    width: 75%;
`

export const TextWrapper = styled.div`
    /* width: 100%; */
`
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1.%;
    font-weight: 600;
    color: '#f7f8fa';

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const Subtitle = styled.p`
    /* max-width: 440px; */
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color:  '#fff';
`
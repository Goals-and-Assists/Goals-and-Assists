import styled from "styled-components";

export const SupportContainer = styled.div`
    color: #000;
    background: '#f9f9f9';
`

export const SupportWrapper = styled.div`
    /* display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    border: 5px solid red;
    */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    border: 5px solid blue;
`

export const TextWrapper = styled.div`
    /* width: 800px;
    height: 600px;%;
    padding-top: 0px;
    padding-bottom: 60px;
    border: 5px solid blue; */
    width: 900px;
    border: 5px solid red;
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
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
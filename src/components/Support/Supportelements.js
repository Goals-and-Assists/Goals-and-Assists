import styled from "styled-components";

export const SupportContainer = styled.div`
    /* height: 800px; */
    color: #000;
    background: '#f9f9f9';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const SupportWrapper = styled.div`
    /* max-width: 1000px; */
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    /* grid-gap: 16px;
    padding: 0 50px; */
`

export const TopLineWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

// export const TopLine = styled.p`
//     color: #4682b4;
//     font-size: 26px;
//     line-height: 16px;
//     font-weight: 700;
//     letter-spacing: 1.4px;
//     text-transform: uppercase;
//     margin-bottom: 16px;
//     text-align: center;
//     flex-wrap: wrap;
// `

export const SupportH1 = styled.h1`
    font-size: 2.5rem;
    color: #01426C;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;


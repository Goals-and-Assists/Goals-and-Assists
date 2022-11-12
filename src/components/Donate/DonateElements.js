import styled from "styled-components";

export const DonateContainer = styled.div`
    background: #010606; 
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DonateWrapper = styled.div`
    padding: 50px 50px;
`
export const DonateH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    padding-left: 15px;
    display: flex;
    justify-content: center;
    text-allign: center;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;




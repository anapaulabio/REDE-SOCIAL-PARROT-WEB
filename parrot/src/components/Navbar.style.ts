import styled from "styled-components";

export const LogoImg = styled.img`
    width: 245px;

    @media only screen and (max-width: 600px){
        width: 8rem;
    }
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 5rem ;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);

    @media only screen and (max-width: 600px){
        padding: 0.7rem 1.5rem;
    }
`;


export const SpanOla = styled.span`
    font-weight: 400;
    font-size: 24px;
    line-height: 25px;
    color: #76BB4C;

    @media only screen and (max-width: 600px){
        font-size: 18px;
        line-height: 19px;
    }
`;

export const Sair = styled.a`
    text-decoration: none;
    color: #6033AA;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
`;


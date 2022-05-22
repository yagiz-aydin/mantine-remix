import styled from "styled-components";

export const CardContainer = styled.div`
    width: 340px;
    margin: auto;
    margin-right: 20px;
    border: ${({$border}) => $border && "2px solid #ecc58c"};
    h1, h2, p{
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

export const CardStarContainer = styled.h1`
    background: -webkit-linear-gradient(#ecc58c,#e3972f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const TextNameContainer = styled.h2`
    text-transform: uppercase;
`

export const TextDescriptionContainer = styled.p`
    height: 100px;
    text-align:center;
`
export const ImageContainer = styled.img`
    height: 30px;

`
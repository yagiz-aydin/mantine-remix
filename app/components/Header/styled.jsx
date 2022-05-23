
import styled from 'styled-components';

export const GithubIconContainer = styled.img`
    height: 50px;
    width: 50px;
    position: absolute;
    right:0px;
    background: white;
    top: 0px;
    border-radius: 5px 0px 0px 15px;
    padding:10px;
    cursor: pointer;
    animation: smooth;
    transition: all .2s ease-in-out;
    &:hover{
        margin: 5px 5px 0px 0px;
        transform: scale(1.25);
        background: #f0f0f0;
    }
`

export const HeaderContainer = styled.div`
    font-size: 20px;
`

import styled from 'styled-components';

export const LayoutContainer = styled.div`
    .center-container{
        flex-direction: column;
        width: 100%;
        height: 100vh;
        margin: 0;
        background-repeat: no-repeat;
        background-size:auto;
        background-image:linear-gradient(135deg, #544984d0, #473475d5, #2b2f77ce, #141852, #070b34d5),url('https://sahilshukla279.github.io/hosted-assest/space.png');
    }

    #space, .stars{
        overflow: hidden;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .stars{
        background-image: 
            radial-gradient(2px 2px at 20px 30px, rgb(255, 255, 255), rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
        background-repeat: repeat;
        background-size: 200px 200px;
        animation: zoom ${({bgSpeed}) => bgSpeed ? 1.8 : 4}s infinite;
        opacity: 0;       
    }

    .stars:nth-child(1){
        background-position: 50% 50%;
        animation-delay: 0s;
        }
    .stars:nth-child(2){
        background-position: 20% 60%;
        animation-delay: 1s;
        }
    .stars:nth-child(3){
        background-position: -20% -30%;
        animation-delay: 2s;
        }
    .stars:nth-child(4){
        background-position: 40% -50%;
        animation-delay: 3s;
    }

    // Animations
    @keyframes travel {
        0%{
            transform: translateX(0px);
            transform: rotate(10deg);
            bottom:1px;
        }
        50%{
            transform: translateX(-200px);
            bottom:50px;
            
        }
        75%{
            transform: translateX(400px);
            bottom:1px;
        }
        85%{
            transform: translateX(0px);
            transform: rotate(-10deg);
            bottom:50px;
            animation-delay: 5s;
        }
        100%{
            transform: translateX(-10px);
            transform: rotate(10deg);
            bottom:1px;
        }
    }

    @keyframes zoom{
        0%{
            opacity: 0;
            transform: scale(0.5);
            animation-timing-function: linear;
        }
        85%{
            opacity: 1;
            transform: scale(2.8);
            animation-timing-function: linear;
        }
        100%{
            opacity: 0;
            transform: scale(3.5);
            animation-timing-function: linear;
        }
    }
`

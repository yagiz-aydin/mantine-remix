import styled from "styled-components";

export const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const HeadTextContainer = styled.div`
    display: flex;
    justify-content: center;
    font-weight: 800;
    color: #fff;
    p{
        margin: 0px;
        position: absolute;
        font-size: 30px;
        line-height: 50px;
    }
      
      .down{
        animation-name: move, rot,bounce,explosion;
        animation-duration: 1s, 200ms,1s,2s;
        animation-timing-function: linear, linear,linear,ease-in-out;
        animation-iteration-count: 1, 5,1,1; 
        animation-fill-mode: forwards, forwards,forwards,forwards;
        animation-delay: 0s, 0s, 1s,1s;
      }
      
       @keyframes rot{
        from{transform: rotate(0deg) ;}
        to{transform: rotate(360deg) ;}
      } 
      
        @keyframes move{
        from{bottom: 100%;
        left:0; }
         to{
            top: 30%;
            left: 50%;
        }
      }   
      
        @keyframes bounce{
        0%,50%,100%{transform: translate(-50%, -50%) translatey(0) translatex(0);}
        25%{transform: translate(-50%, -50%) translatey(-40%) translatex(-10%);}
        75%{transform: translate(-50%, -50%) translatey(-20%) translatex(10%);}
      }  
       
      .slide{
        right: -50px;
        top: 40%;
        transform: translate(50%,-150%);
        animation-name: slide, bounce-h;
        animation-duration: 1s ,1s;
        animation-timing-function: linear,linear;
        animation-iteration-count: 1,1; 
        animation-fill-mode: forwards;
        animation-delay: 0s, 1s;
      } 
      
      @keyframes slide{
        0%{display: none;}
        100%{
            right: 50%;
            display: block;
            margin: 0;
        }
      }
      
`

export const StarIconContainer = styled.img`
    height: 250px;
    position: relative;
`
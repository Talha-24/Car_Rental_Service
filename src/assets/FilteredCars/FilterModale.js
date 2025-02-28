import styled, { keyframes } from "styled-components";


export const Modale=styled.div`
height: 100%;
width: 100%;
position: fixed;
left: 0;
top: 0;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
`

export const Close=styled.img`
position: absolute;
margin:1vmin;
top:0;
right:0;


`


const fadeIn=keyframes`
from{
    scale:0.8;
    opacity:0;
}
to{
    scale:1;
    opacity:1;
}
`

export const ModaleContent=styled.div`
position: relative;
  background-color: white;
  box-shadow: 0p 4px 10px rgb(0,0,0,0.9);
  height: 40%;
  width: 40%;
  border-radius: 0.5rem;
  animation: ${fadeIn} 0.3s ease-in-out;
`


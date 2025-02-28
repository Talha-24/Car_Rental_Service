import styled, { keyframes } from "styled-components";



export const Main = styled.div`
min-height: 100vh;
width: 100%;
background-color: white;
padding: 19.7px 49.8px;
overflow-y: auto;

`

export const H1 = styled.h1`
font-size: 5vmin;
font-weight: bold;
text-align: center;
`

const Showslow = keyframes`

 from{
    opacity:0;
    scale: 0.8;

 }
 to{
    opacity: 1;
    scale: 1;
 }
 `
export const Category = styled.ul`
width: 100%;
display: flex;
align-items:flex-start;
justify-content: flex-end;
gap: 15px;
height: 10px;
`
export const Label = styled.li`
font-size: 1rem;
`
export const CarsContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
height: 100%;
width: 100%;
background-color: white;
animation-name: ${Showslow};
animation-duration: 0.3s;
animation-timing-function: ease-in-out;
padding: 8px 15px;
`
export const NotificationContainer = styled.div`

height: 40%;
width: 100%;
`
export const Heading = styled.div`
font-size: 24px;
color: #FC4500;
font-weight: normal;
padding:  0px;
`

export const Back = styled.img`
height: 3vmin;
width: 3vmin;
position: absolute;
right:1%;
top: 1.8%;
cursor: pointer;
`
export const  Circleone=styled.span`
background-color: #0000FF;
height: 10px;
width: 10px;
border-radius: 50%;
margin-top: 4px;
`
export const Circlethree=styled.span`
background-color: #008000;
height: 10px;
width: 10px;
border-radius: 50%;
margin-top: 4px;
`
export const Circletwo=styled.span`
background-color: #808080;
height: 10px;
width: 10px;
border-radius: 50%;
margin-top: 4px;
`
export const Common=styled.li`
display: flex;
flex-direction: row;
align-items: center;
gap: 4px;
`
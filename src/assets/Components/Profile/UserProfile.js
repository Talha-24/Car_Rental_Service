import styled from "styled-components"



export const Parent=styled.div`
    /* display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border: 1px solid #dadada;
    left: 0;
    position: fixed;
    background-color: white;
    width: 97%;
    z-index: 1000;
    background-color: blue;
    height: 100%;
    padding: 5vmin;
    .modal { */
  position: fixed; /* Fixed position to overlay the screen */
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Black with transparency */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it stays on top */
  /* padding: 5vmin; */
`
export const Close=styled.button`
 position: absolute;
    right: 0%;
    padding: 10px;
    height: fit-content;
    width: fit-content;
    background-color: transparent;
    color: black;
    `
export const P=styled.p`
font-size: 0.8rem;
`
export const H6=styled.h6`
font-size: 3.5vmin;
   padding: 2vmin 0px;
   font-weight: 500;
`
export const Profile=styled.div`
 display: flex;
    flex-direction: column;
    gap: 3vmin;
`
export const UserData=styled.span`
 display: flex;
    flex-direction: column;
    padding: 0px 10px;
`

export const Save=styled.button`
    background-color: #FC500C;
    border:1px solid #FC500C;
    padding: 9px 20px;
    width: fit-content;
    height: fit-content;
    font-size: 2.5vmin;
    font-weight: 500;
    border-radius: 12vmin;    
    padding: 1.5vmin 4vmin;
    `
export const Logout=styled.button`
background-color: white;
    border:1px solid #FC500C;
    padding: 9px 20px;
    width: fit-content;
    height: fit-content;
    font-size: 2.5vmin;
    font-weight: 500;
    border-radius: 12vmin;    
    padding: 1.5vmin 4vmin;
    color: #FC500C;
`

export const UserDetail=styled.span`
 display: flex;
    flex-direction: column;
    padding: 0px 10px;
    `

export const UserProfile=styled.div`
 display: flex;
    flex-direction: column;
    padding: 0px 10px;`


export const Input=styled.input`

padding: 2vmin;
border-radius: 5px;
border: 1px solid #dadada;
outline: none;
width: 100%;
`
export const CrossImage=styled.img`
height: 4vmin;
width: 4vmin;
`
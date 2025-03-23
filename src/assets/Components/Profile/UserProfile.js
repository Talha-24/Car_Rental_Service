import styled from "styled-components"



export const Parent = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: white;
`
export const Close = styled.button`
 position: absolute;
    right: 0%;
    padding: 10px;
    height: fit-content;
    width: fit-content;
    background-color: transparent;
    color: black;
    `
export const P = styled.p`
font-size: 10px;
`
export const H6 = styled.h6`
font-size: 3.5vmin;
   padding: 2vmin 0px;
   font-weight: 500;
`
export const Profile = styled.div`
 display: flex;
    flex-direction: column;
    gap: 3vmin;
`
export const UserData = styled.span`
 display: flex;
    flex-direction: column;
    padding: 0px 10px;
`

export const Save = styled.button`
    background-color: #FC4500;
    border:1px solid #FC500C;
    width: fit-content;
    height: fit-content;
    font-size: 2.5vmin;
    font-weight: 500;
    border-radius: 12vmin;   
    font-size: 12px; 
    padding: 12px 22px;
    font-weight: bold;
    text-transform: uppercase;

    @media (max-width: 336px){
     padding: 10px 16px;
    }
     @media (max-width: 330px ){
     padding: 8px 14px;
     font-size: 10px;
}
    `


export const Logout = styled.button`
background-color: white;
    border:1px solid #FC500C;
    width: fit-content;
    height: fit-content;
    font-size: 12px;
    border-radius: 12vmin;    
    color: #FC4500;
    padding: 12px 22px;

    font-weight: bold;
@media (max-width: 336px){
      padding: 10px 16px;
       @media (max-width: 330px ){
     padding: 8px 14px;
     font-size: 10px;

}
`

export const UserDetail = styled.span`
 display: flex;
    flex-direction: column;
    padding: 0px 10px;
    `

export const UserProfile = styled.div`
 display: flex;
    flex-direction: column;
    padding: 0px 10px;`


export const Input = styled.input`
padding: 20px;
border-radius: 5px;
border: 1px solid #FC4500;
outline: none;
width: 100%;
height: 52px;
border-radius: 120px;
margin: 12px 0;
@media (min-width: 910px){
width: 350px;
}
@media (max-width: 510px){
height: 48px;
padding: 20px;
}
@media (max-width: 380px){
height: 40px;
}
@media (min-width:1000px ){
width: 400px}
@media (min-width: 1100px){
width: 450px}
@media (min-width: 1200px){
width: 470px }
`
export const CrossImage = styled.img`
height: 4vmin;
width: 4vmin;
color: red;
`
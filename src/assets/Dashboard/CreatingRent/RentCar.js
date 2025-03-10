
import styled from 'styled-components'
export const Form=styled.form`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
gap: 1vmin;
padding: 4vmin;
background-color: white;
border-radius: 0.2rem;

@media (max-width:773px) {
    width: 80%;
    
}
`
export const InputParent=styled.div`
display: flex;
flex-direction: row;
width: 100%;
gap: 2vmin;
justify-content: space-between;
@media (max-width: 840px) {
    flex-direction: column;
    width:100%;
    
}
`
export const Input=styled.input`
outline: none;
height: 100%;
font-size: 1rem;
text-transform: capitalize;
height: 50px;
width: 353px;
background-color: #f6f7f9;
padding: 0.1rem 0.8rem;

`
export const Select=styled.select`
width: 353px;
height: 50px;
outline: none;
border: 0.1vmin solid #C4C9D0;
border-radius: 0.2rem;
background-color: #f6f7f9;
`
export const  Span=styled.span`
width: 100%;
border: 0.1rem solid #C4C9D0;
border-radius: 0.2rem;
`
export const Label=styled.label`
font-size: 1.1rem;
font-weight: 500;
margin-bottom: 1vmin;
`
export const Textarea=styled.textarea`
height: 100%;
width: 100%;
border: 0.11rem solid #C4C9D0;
border-radius: 0.2rem;
padding: 10px;
outline: none;
background-color: #F6F7F9;
`
export const Element=styled.div`
display: flex;
flex-direction: column;
`
export const Error =styled.p`
color: red;
font-size:0.8rem;
font-weight: 500;
`
export const Title=styled.h1`
color: #070707;
font-size: 5vmin;
font-weight: bold;
text-align: center;
font-family: sans-serif;
`
export const TextFeat=styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: row;
gap: 2vmin;
@media (max-width:840px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    
}
`
export const TextFeatChild=styled.div`
display: flex;
flex-direction: column;
width: 50%;
height: 100%;
@media (max-width:840px) {
    width: 100%;
    
}
`
export const TextareaParent=styled.div`
height: 100px;
display: flex;
flex-direction: column;
width:100%;


@media (max-width: 840px){

    width: 100%;
    height: 100%;
}

`
export const InputButton=styled.div`
width: 120px;
height: 50px;
background-color: #dadada;
color: white;
text-align: center;
display: flex; 
align-items: center;
justify-content: center;
`
export const ImageContainer=styled.span`
width: 80%;
display: flex;
flex-direction: column;
gap: 10px;
border-radius: 4px;
`
export const Button=styled.button`
font-size: 2.4vmin;
font-weight: 500;
background-color: #FC4500;
width: 15%;
color: white;
border-radius: 0.1rem;
align-self: flex-end;
height: fit-content;
padding: 1vmin 0px;
`
export const Buttonone=styled.button`
/* height: 40px;
width: 80px; */
padding:10px  12px;

`
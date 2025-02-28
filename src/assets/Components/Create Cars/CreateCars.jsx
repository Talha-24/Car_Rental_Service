import React from 'react'
import "./CreateShowroom.css";
const CreateCars = () => {
  return (
    <div id='Parent'>
      <h5>Showroom Details</h5>
      <h6>Please enter your info</h6>
      <span id="inputs">
        <label htmlFor="">Showroom Name</label>
        <input  type="text"  placeholder="Type here"/>
      </span>
      <span id="inputs">
        <label htmlFor="">Location</label>
        <input  type="text"  placeholder="Type here"/>
      </span>
      <span id="inputs">
        <label htmlFor="">Phone</label>
        <input   type="text" placeholder="03xxxxxxxxxx" />
      </span>
      <span id="inputss">
        <label htmlFor="">Add Showroom Pic</label>
        <button onClick={(e)=>{
          e.target.childNodes[1].hidden='false';
        }}>
          <img src="src\assets\Components\Create Showrooms\WhatsApp Image 2025-02-10 at 10.49.59 PM.jpeg" alt="" />
          <input type="file" hidden={true} />
        </button>
      </span>

      <button>Continue</button>
    </div>
  )
}

export default CreateCars
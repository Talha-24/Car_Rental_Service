
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaArrowRight } from "react-icons/fa";
const Section_two = () => {



  let pictures=[{
    image: 'https://images.unsplash.com/photo-1624976172336-54d765427b6b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
    styling: 'w-[100%] max-h-[100vh] object-cover',
  }
  ,
  {
    image: 'https://images.unsplash.com/photo-1624976173209-55c50c12a943?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhciUyMHBvcnRyYWl0fGVufDB8fDB8fHww',
    styling: 'w-[100%] max-h-[100vh] object-cover',
  },
  {
    image: 'https://c4.wallpaperflare.com/wallpaper/883/187/577/audi-r8-car-vehicle-super-car-wallpaper-preview.jpg',
    styling: 'w-[100%] max-h-[100vh] object-cover',
  }
  ,
  {
    image: 'https://images.unsplash.com/photo-1624976172336-54d765427b6b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
    styling: 'w-[100%] max-h-[100vh] object-cover',
  }
  ,{
    image: 'https://images.unsplash.com/photo-1624976172336-54d765427b6b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
    styling: 'w-[100%] max-h-[100vh] object-cover',
  }
  ,{
    image: 'https://images.unsplash.com/photo-1624976172336-54d765427b6b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
    styling: 'w-[100%] max-h-[100vh] object-cover',
  }
  ,{
    image: 'https://images.unsplash.com/photo-1624976172336-54d765427b6b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
    styling: 'w-[100%] max-h-[100vh] object-cover',
  }
  ,
  {
    image: 'https://images.unsplash.com/photo-1624976172336-54d765427b6b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
    styling: 'w-[100%] max-h-[100vh] object-cover',
  }
]


  return (
    <div className='w-[100%]   signupform'>
      <div className="flex flex-row align-center justify-center w-[100%] h-[100vh]">
        <Carousel   showThumbs={false} infiniteLoop={true}>
          {pictures? pictures.map(function(picture){
            return(
              <div className="w-[100%]">
              <img className={`${picture.styling}`} src={`${picture.image}`} alt="" />
              </div>
            )
          }): ''}
          {/* <div className="w-[100%]">
            <img className='w-[100%] max-h-[100vh] object-cover' src="https://images.unsplash.com/photo-1624976172336-54d765427b6b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" />
          </div>
          <div className='w-[100%] h-[80%]'>
            <img className='w-[100%] max-h-[100vh] object-cover' src="" />
          </div>

          <div className='w-[100%] h-[80%]'>
            <img className='w-[100%] max-h-[100vh] object-cover' src="" />
          </div>
          <div>
            <img className='max-h-[100vh] w-[100%]' src="https://wallpapercave.com/wp/wp11969201.jpg" />
          </div> */}
        </Carousel>

      </div>
    </div>
  )
}

export default Section_two
import React from 'react'
import "./style.css"
import Carousel from '../Carousel/Carousel'


function header() {
  return (
    <div className='  header'>
    <img src="https://i0.wp.com/oakparktalon.org/wp-content/uploads/2024/04/MM9940_220518_0582.jpg?fit=1200%2C800&ssl=1" className='back'/>
    <div className='front'></div>
    <a href="/scan">

      <button type="button" className="btn btn-success btn-lg" >Got Anything?</button>
    </a>
      <div className='info'>
      <Carousel/>

      </div>

    </div>
  )
}

export default header

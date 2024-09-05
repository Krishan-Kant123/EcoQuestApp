import React from 'react'
import "./style.css"

function Carousel() {
  return (
    <div className='info'>
      <div id="carouselExampleInterval txt" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="https://th.bing.com/th/id/R.b5edf680b6a1e025f4450bcbcf2ae58a?rik=xhWWjcHA9Ua4tw&riu=http%3a%2f%2fwww.hcr-llc.com%2fhubfs%2fImages%2fBlog_Images%2fLandfill_Problems__Solutions-1.jpg%23keepProtocol&ehk=q1GjpWz3UZfAYKNjUg580fvudsyP9tB4Ez9OYh5O%2b24%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100 image" alt="..."/>
      <div className='text'>waste at source, social taboo, citizen's attitude, poor assessment, inadequate potential strategies unorganised informal sector of waste, unplanned fiscal, and poor implementation government policies.</div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://as2.ftcdn.net/v2/jpg/05/60/56/31/1000_F_560563108_3ml8FCwRdcg38foD5T99PpkgtqccG96i.jpg" class="d-block w-100 image" alt="..."/>
      <div className='text'>waste at source, social taboo, citizen's attitude, poor assessment, inadequate potential strategies unorganised informal sector of waste, unplanned fiscal, and poor implementation government policies. </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://img.freepik.com/premium-photo/photo-dump-with-dark-sky-trash-pile-with-word-garbage-it_902639-7696.jpg" class="d-block w-100 image" alt="..."/>
      <div className='text'>waste at source, social taboo, citizen's attitude, poor assessment, inadequate potential strategies unorganised informal sector of waste, unplanned fiscal, and poor implementation government policies.</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel

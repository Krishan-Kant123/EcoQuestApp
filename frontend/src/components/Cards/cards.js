import React from 'react'

function cards({s}) {
  return (
    <div className=' w-25 p-3'>
    <div className="card" >
  <img src="https://www.pngmart.com/files/7/Rewards-PNG-Photo.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Reward Name</h5>
    <p className="card-text">description</p>
    <a href="#" className="btn btn-success">Redeem</a>
  </div>
</div>
      
    </div>
  )
}

export default cards

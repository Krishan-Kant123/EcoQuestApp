import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='w-25 position-absolute top-50 start-50 border rounded rounded-2 translate-middle p-2'>
        <div className='fw-semibold fs-3 text-center'>Create a new account</div><br/>
        <div className="form-floating mb-3">
            <input type="name" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Name</label>
        </div><div className="form-floating mb-3">
            <input type="username" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
        </div>
        <br/>
        <div class= "mb-3 d-grid gap-2">
            <span class="text mx-2 fw-semibold" id="basic-addon1">Upload your profile pic :<span className='text text-danger'> *</span></span>
            <input type="file" class="form-control" id="inputGroupFile02"/>
        </div>
        <div className="d-grid">
            <button className="btn btn-primary" type="button">Signup</button>
        </div>
        <hr></hr>
        <div className="d-grid gap-2">
            <button className="btn btn-outline-primary" type="button">Login with Google</button>
            <button className="btn btn-outline-primary" type="button">Login with Facebook</button>
        </div>
     
        <br/>
        <div className='container-lg d-flex justify-content-end'>
            <Link to="/login" >Already a user ?</Link>
        </div>
       
    </div>
  )
}

export default Signup
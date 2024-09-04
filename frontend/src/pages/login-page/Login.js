import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';

const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        const username = usernameRef.current.value.trim();
        const password = passwordRef.current.value.trim();

        if (username === '' || password === '') {
            alert('Please fill in all fields');
            return;
        }

        try{
            const {data} = await axios.post('login',{username,password});
            console.log(data);
            if(data.user.success === false) {
                return; 
            }
            dispatch({type:'SET_USER',payload: data.user});
            navigate('/');
        }catch(Err) {
            alert('Invalid Credidentials');
        }
    }

  return (
    <div className='h-75 w-25 position-absolute top-50 start-50 border rounded rounded-2 translate-middle p-2'>
        
        <div className='fw-semibold fs-3 text-center'>Login to your account</div>
        <br/><br/>
        <div className="form-floating mb-3">
            <input ref={usernameRef} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Username or Email address</label>
        </div>
        <div className="form-floating">
            <input ref={passwordRef} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
        </div>
         
         <br/>
        <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button" onClick={handleSubmit}>Login</button>
        </div>
        <br/>
        <hr></hr>
        <br></br>
        <div className="d-grid gap-2">
            <button className="btn btn-outline-primary" type="button">Login with Google</button>
            <button className="btn btn-outline-primary" type="button">Login with Facebook</button>
        </div>
        <br/>
        <div className='container-lg d-flex justify-content-end'>
            <Link to="/signup" >New User ?</Link>
        </div>
       
    </div>
  )
}

export default Login
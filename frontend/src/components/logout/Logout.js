import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios';
import { useNavigate } from 'react-router';
import Loader from '../../utils/Loader/Loader';

const Logout = () => {
    const navigate = useNavigate();
    const [isLogout,setLogout] = useState(false);
    useEffect(()=>{
        let handler = async ()=>{
            const {data} = axios.get('/logout');
            setLogout(true);
            navigate('/login');
        }
        handler();
    })
  return (
    <>
        {!isLogout && <Loader/>}
    </>
  )
}

export default Logout
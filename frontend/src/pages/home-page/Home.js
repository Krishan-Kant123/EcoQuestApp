import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../utils/axios';
import Loader from '../../utils/Loader/Loader';
import { useNavigate } from 'react-router';
import Login from '../login-page/Login';
import Header from '../../components/Header/header';

const Home = () => {
  const userData = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // useEffect(()=>{
  //   const handler = async ()=>{
  //     try{
  //       const {data} = await axios.get('/getUser');
  //       if(data.user) {
  //         dispatch({type:'SET_USER',payload: data.user});
  //       }
  //     }catch(err) {
  //       navigate('/login');
  //       alert('You need to login first');
  //       return;
  //     }
  //   }
  //   handler();
  // });

  return (
    <>
      {/* {!userData.isLoggedIn && <Login/>} */}
   <Header/>

 
      
    </>
  )
}

export default Home
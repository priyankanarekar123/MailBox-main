import React from 'react'
import './profile.css';
import { useSelector } from 'react-redux';

const Profile = () => {
    //const email=useSelector((state)=>state.login.email)
    const email=localStorage.getItem("email");
  return (
    <div className='profile'>
      <h3>Email -- {email}</h3>
    </div>
  )
}

export default Profile

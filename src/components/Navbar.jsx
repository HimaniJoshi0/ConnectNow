import React, { useContext } from 'react'
import {signOut} from "firebase/auth";
import {auth} from "../firebase";
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)                      //to change the name and avatar  of current user
  return (
    <div className='navbar'>
      <span className="logo">Chit-Chat</span>
      <div className="user">
        <img src= {currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}> logout</button>   {/* to logout we use this firebse function */}
      </div>
    </div>
  )
}

export default Navbar
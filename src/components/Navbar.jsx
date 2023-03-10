import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { UserAuth } from '../AuthContext';

const Navbar = () => {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 60){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);


  // LOGOUT
  const {user,signout} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    try{
       await signout();
       navigate('/');
    }catch(err){         
       console.log(err);
    }
  }


  return (
    <>
    {
      colorChange ? (
        <div className='w-full flex items-center justify-between p-4 z-40 fixed top-0 bg-black'>
    {/* LEFT */}       
        <Link to='/'>
          <img className='w-32 h-12 object-contain md:w-48 md:h-12' src={Logo} alt="" />
        </Link>
    {/* RIGHT */}
    {
        user?.email ?(
       <div>
          <Link to='/account'>
              <button className='px-4 py-2 text-white md:px-6'>Account</button>
          </Link>
              <button onClick={handleLogout} className='bg-red-600 px-4 py-2 text-white rounded md:px-6'>Logout</button>
       </div>
        ):(
          <div>
            <Link to='/signin'>
              <button className='px-4 py-2 text-white md:px-6'>Sign In</button>
          </Link>
          <Link to='/signup'>
              <button className='bg-red-600 px-4 py-2 text-white rounded md:px-6'>Sign Up</button>
          </Link>
          </div>
        )
       }
      </div>
      
      ) : (
        <div className='w-full flex items-center justify-between p-4 z-30 fixed top-0'>
    {/* LEFT */}   
        <Link to='/'>
          <img className='w-32 h-12 object-contain md:w-48 md:h-12' src={Logo} alt="" />
        </Link>
    {/* RIGHT */}
       {
        user?.email ?(
       <div>
          <Link to='/account'>
              <button className='px-4 py-2 text-white md:px-6'>Account</button>
          </Link>
              <button onClick={handleLogout} className='bg-red-600 px-4 py-2 text-white rounded md:px-6'>Logout</button>
       </div>
        ):(
          <div>
            <Link to='/signin'>
              <button className='px-4 py-2 text-white md:px-6'>Sign In</button>
          </Link>
          <Link to='/signup'>
              <button className='bg-red-600 px-4 py-2 text-white rounded md:px-6'>Sign Up</button>
          </Link>
          </div>
        )
       }
    </div>
      )
    }
    </>
  )
}

export default Navbar
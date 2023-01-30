import React, { useState } from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <>
    {
      colorChange ? (
        <div className='w-full flex items-center justify-between p-4 z-30 fixed top-0 bg-black'>
    {/* LEFT */}       
          <img className='w-32 h-12 object-contain md:w-48 md:h-12' src={Logo} alt="" />
    {/* RIGHT */}
       <div>
          <button className='px-4 py-2 text-white md:px-6'>Sign In</button>
          <button className='bg-red-600 px-4 py-2 text-white rounded md:px-6'>Sign Up</button>
       </div>
    </div>
      ) : (
        <div className='w-full flex items-center justify-between p-4 z-30 fixed top-0'>
    {/* LEFT */}       
          <img className='w-32 h-12 object-contain md:w-48 md:h-12' src={Logo} alt="" />
    {/* RIGHT */}
       <div>
          <button className='px-4 py-2 text-white md:px-6'>Sign In</button>
          <button className='bg-red-600 px-4 py-2 text-white rounded md:px-6'>Sign Up</button>
       </div>
    </div>
      )
    }
    </>
  )
}

export default Navbar
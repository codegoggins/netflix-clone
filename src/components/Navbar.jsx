import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between p-4 z-30 fixed top-0'>
    {/* LEFT */}       
          <img className='w-48 h-12 object-cover' src={Logo} alt="" />
    {/* RIGHT */}
       <div>
          <button className='px-6 py-2 text-white'>Sign In</button>
          <button className='bg-red-600 px-6 py-2 text-white rounded'>Sign Up</button>
       </div>
    </div>
  )
}

export default Navbar
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../AuthContext';

const SignIn = () => {

  const {user,signin} = UserAuth();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try{
      await signin(email,password);
      navigate('/');
    }catch(error){
       setError(error.message);
    }
  }

  return (
    <div className='w-full h-screen flex items-center justify-center mb-12'>
    <img
      className='absolute top-0 object-cover h-screen w-full z-2'
      src="https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/430b26cf-b6e1-473e-a55d-0abc03631481/IN-en-20230123-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
    {/* {/* OVERLAY */}
    <div className='absolute top-0 w-full h-screen bg-black/60 z-3'></div>
    {/* FORM */}
        <div className='bg-red z-30 bg-black/75 p-16 rounded md:p-24'>
              <div className='flex flex-col items-center justify-center gap-6 z-10'>
                <h1 className='font-bold text-3xl'>Sign In</h1>
                {
                    error ? (
                         <p className='p-3 bg-red-500 my-1'>
                          {error.message}
                         </p>
                    ):(
                          null
                    )
                  }
                <form 
                onSubmit={handleSubmit}
                className='flex flex-col items-center justify-center gap-8'>
                  <input
                  onChange={(e)=>setEmail(e.target.value)}
                  className='py-2 px-3 rounded bg-gray-700 outline-none md:py-3 md:px-6'
                  type="text" placeholder='Email'/>
                  <input 
                  onChange={(e)=>setPassword(e.target.value)}
                  className='py-2 px-3 rounded bg-gray-700 outline-none md:py-3 md:px-6'
                  type="password" placeholder='Password'/>
                  <button className='bg-red-600 py-2 rounded font-bold w-full md:py-3 md:px-6'>Sign In</button>
                </form>
                <p className='flex gap-2'>
                <span>
                Don't have an account ?
                </span>
                <Link to='/signup' className='text-red-600'>
                  Sign Up
                </Link>
                </p>
            </div>
        </div>
  </div>
  )
}

export default SignIn
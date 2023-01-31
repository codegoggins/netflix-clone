import React from 'react'

const Account = () => {
  return (
    <div>
    {/* IMAGE */}
       <div className='h-[400px]'>
          <div className='absolute w-full h-[400px] top-0 left-0 bg-black/60'></div>
          <img className='h-full w-full object-cover' 
           src="https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/430b26cf-b6e1-473e-a55d-0abc03631481/IN-en-20230123-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
       </div>
    {/* SHOWS */}
        <div className='p-4 pb-8'>
            <h1 className='text-xl font-bold'>My Shows</h1>
        </div>
    </div>
  )
}

export default Account
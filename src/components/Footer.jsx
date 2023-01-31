import React from 'react'

const Footer = () => {
  return (
    <div className='h-[80px] border-t-2 border-[#303030] mt-20'>
      <div className='text-[#303030] flex gap-2 items-center justify-center p-6'>
        <p>
        © 2022 Netflix Clone All Rights Reserved by
        </p>
        <a href='https://github.com/codegoggins' target='_blank' className='text-white'>codegoggins</a>
      </div>
    </div>
  )
}

export default Footer
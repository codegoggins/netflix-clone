import React from 'react'

const Footer = () => {
  return (
    <div className='h-[90px] border-t-2 border-[#303030] overflow-hidden mt-24'>
      <div className='text-[#303030] flex flex-col gap-2 items-center justify-center p-2 md:flex-row'>
        <p>
        © 2022 Netflix Clone All Rights Reserved by
        </p>
        <a href='https://github.com/codegoggins' target='_blank' rel="noreferrer" className='text-white'>codegoggins</a>
      </div>
    </div>
  )
}

export default Footer
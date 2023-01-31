import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Movie from './Movie'

const Row = ({title,fetch}) => {
  
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    axios.get(fetch).then((response)=>{
       setMovies(response.data.results);
    })
 },[fetch]);
 
  
 return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        
        <div className='flex items-center group'>
             <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                 {
                    movies?.map((item,id)=>(
                       <Movie key={id} item={item}/>
                    )
                    )
                 }
             </div>
        </div>
    </div>
  )
}

export default Row
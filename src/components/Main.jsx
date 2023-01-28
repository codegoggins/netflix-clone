import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requests from '../requestsAPI';
import { ContentCutOutlined } from '@mui/icons-material';

const Main = () => {

  const [movies,setMovies] = useState([]);
  
  useEffect(()=>{
     axios.get(requests.requestPopular).then((response)=>{
        setMovies(response.data.results);
     })
  },[]);


  const movie = movies[Math.floor(Math.random()*movies.length)];

  const shrinkString = (str,num) => {
    if(str?.length > num){
      return str.slice(0,num) + '. . . . .';
    }else{
      return str;
    }
  };

  return (
    <div className='w-full h-[600px]'>
    
    {/* IMAGE OVERLAY */}
    <div className='absolute w-full h-[600px] top-0 left-0 bg-gradient-to-r from-black'></div>
    <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
    
    {/* SHOW DESCRIPTION */}
    <div className='w-full absolute top-[20%] p-4'>

    {/* TITLE */}
      <h1
      className='text-3xl md:text-5xl font-bold'
      >{movie?.title}</h1>

    {/* BUTTONS */}
    <div className='my-6'>
      <button>Play Now</button>
      <button>Watch Later</button>
    </div>
    
    {/* DESC */}
      <p className='text-gray-500 text-sm'>{movie?.release_date}</p>
      <p className='text-gray-200 text-lg my-2 md:max-w'>
      {
      shrinkString(movie?.overview,200)
      } 
      </p>
    </div>

    </div>
  )
}

export default Main
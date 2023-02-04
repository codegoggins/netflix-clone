import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import {doc,onSnapshot, updateDoc} from 'firebase/firestore';
import { UserAuth } from '../AuthContext';
import {db} from '../firebase'

const Account = () => {

  const [movies,setMovies] = useState([]);
  const {user} = UserAuth();

  useEffect(()=>{
    onSnapshot(doc(db,'users',`${user?.email}`),(doc)=>{
      setMovies(doc.data()?.savedShows);
    })
  },[user?.email]);

  const deleteShow = async (id) => {
      try{
         const shows = movies.filter((item)=>item.id !== id);
         await updateDoc(doc(db,'users',`${user?.email}`),{
          savedShows:shows
         });
         console.log(shows);
      }catch(err){
        console.log(err);
      }
  }

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
            <div className='flex flex-wrap items-center justify-center p-2 gap-12 sm:justify-start'>
                  {
                    movies?.map((item)=>(
                    <div 
                    key={item.id}
                    className='w-[250px] lg:w-[280px] cursor-pointer relative'>
                      <img className='w-full h-full block object-cover' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                      {/* HOVER OVERLAY */}
                      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                      <p className='white-space-normal text-md md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                      <p
                      onClick={()=>deleteShow(item.id)} 
                      className='absolute top-4 right-2 cursor-pointer hover:text-red-600'>
                          <DeleteIcon/>
                      </p>
                      </div>
                    </div>
                  ))
                  }
            </div>
        </div>
    </div>
  )
}

export default Account
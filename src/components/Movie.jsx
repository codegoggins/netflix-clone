import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { arrayUnion,doc,updateDoc } from 'firebase/firestore';
import { UserAuth } from '../AuthContext';
import {db} from '../firebase'

const Movie = ({item}) => {

  const [like,setLike] = useState(false);  
  const {user} = UserAuth();
  const [saved,setSaved] = useState(false);
  
  const savedId = doc(db,'users',`${user?.email}`);

  const saveShow = async () => {
      if(user?.email){
        setLike(!like);
        setSaved(true);
        await updateDoc(savedId,{
           savedShows:arrayUnion({
             id:item.id,
             title:item.title,
             img:item.backdrop_path
           })
        })
      }else{
         alert("Sign In to Save a Show");
      }
  }

  return (
    <div className='w-[240px] lg:w-[280px] cursor-pointer inline-block relative p-2'>
        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
        {/* HOVER OVERLAY */}
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
            <p className='absolute top-4 right-4 cursor-pointer' onClick={saveShow}>
                {
                    like ? (<FavoriteIcon/>) : (<FavoriteBorderIcon/>)
                }
            </p>
        </div>
    </div>
  )
}

export default Movie
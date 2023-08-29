import React, { useState } from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

const LikeComponent = ({onClick}) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked)
        console.log('like is ' + isLiked)
        onClick()
    }

  return (
    <>
    <h1>LikeComponent</h1>
    {isLiked ? 
        <AiFillHeart 
            className='fs-1 color text-danger' 
            onClick={()=>handleLike()} 
        /> : 
        <AiOutlineHeart 
            className='fs-1 color text-danger' 
            onClick={()=>handleLike()} 
        />
    }
    
    
    </>
  )
}

export default LikeComponent
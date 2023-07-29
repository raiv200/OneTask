import React from 'react'
import Star  from './Star'

 const StarRating = () => {
  return (
    <div className="group flex items-center md:justify-center  px-2 py-3  rounded-md cursor-pointer  transition duration-300 ease-in ">
        <div className="flex space-x-1">
           <Star />
           <Star />
           <Star />
           <Star />
           <Star />
        </div>
    </div>
  )
}

export default StarRating;
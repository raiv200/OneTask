import React from 'react'

const BrandSection = () => {
  return (
    <div className="flex flex-col items-center w-full bg-gray-50 min-h-full space-y-6 z-20 p-16">
       <p className="text-3xl font-bold font-inter text-gray-800">
         Join 1000+ Highly Productive Teams.
       </p>
       <img className="w-[1000px] h-[110px] " src="/taskupp-brand.png" alt="" />
    </div>
  )
}

export default BrandSection
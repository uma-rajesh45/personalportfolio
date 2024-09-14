import React from 'react'
import Skeleton from "./Skeleton"
const GridSkeleton = () => {
    const arr:number[]= [1,2,3,4,5,6]
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
        {arr.map((value)=>(
      <Skeleton key={value} height={200} highlightColor='#ced4da' baseColor='#343a40'/>

        ))}
    </div>
  )
}

export default GridSkeleton

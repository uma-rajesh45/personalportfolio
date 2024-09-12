import Image from 'next/image'
import React from 'react'
type ExperienceCardProps={
  title:string,
  description:string,
  image:string
}
const ExperienceCard = ({title,description,image}:ExperienceCardProps) => {
  return (
    <div className='flex gap-3 bg-black-200 rounded-3xl h-[200px] items-center border-collapse border-t-slate-400 border-t-2 rounded-b-none'>
      <Image alt={title} src={image} height={100} width={100}/>
      <div className='flex flex-col gap-3'>
        <h2 className='font-sans text-2xl font-bold'>{title}</h2>
        <p className='text-sm font-thin font-sans pr-7'>{description}</p>
      </div>
    </div>
  )
}

export default ExperienceCard

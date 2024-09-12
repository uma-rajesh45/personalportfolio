import { workExperience } from '@/data'
import React from 'react'
import ExperienceCard from './ExperienceCard'

const WorkExperienceCards = () => {
  return (
    <>
    <h1 className='text-5xl font-semibold'>My Work <span className='text-purple text-pretty'>Experience</span></h1>
    <div className='grid grid-cols-1 mt-10 md:grid-cols-2 max-w-7xl gap-12'>
        {workExperience.map((experience)=>(
            <ExperienceCard description={experience.desc} title={experience.title} image={experience.thumbnail} key={experience.id}/>
        ))}
    </div>
    </>
  )
}

export default WorkExperienceCards

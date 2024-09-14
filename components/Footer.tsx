import React from 'react'
import MagicButton from './ui/MagicButton'
import { CgArrowTopRight } from 'react-icons/cg'
import { SocialMedia } from './SocialMedia'

const Footer = () => {
  return (
    <footer className="min-w-7xl w-full bg-[url('/footer-grid.svg')] text-center" id='contact'>
        <div className='m-auto flex flex-col gap-3 items-center pt-20'>
            <h1 className='text-3xl font-bold font-sans '>Lets bring your <span className='text-purple text-pretty'>Idea</span> into life!</h1>
            <p className='font-extralight text-sm'>React out to me lets discuss the idea and lets start the action!</p>
            <a href="mailto:thinklikecoder748@gmail.com">
                <MagicButton icon={<CgArrowTopRight/>} position='right' title='Contact me!'/>
            </a>
        </div>
        <div className='flex flex-col items-center justify-center gap-3 md:flex md:flex-row md:justify-between mt-20'>
          <SocialMedia/>
          <p className='text-xs font-light py-5 mt-5 md:py-0 md:mt-0'>All copy rights reserved &copy;.uma rajesh</p>

        </div>
    </footer>
  )
}

export default Footer

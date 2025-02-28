import React from 'react'
import Heading from './Heading'

const About = () => {
  return (
    <div>
      <Heading heading={'About Us'}></Heading>
      <div className='px-14'>
        <span className='text-[60px] font-bold text-[#00BF63] font-electrolize'>L</span>
        <span className='font-electrolize text-[#00BF63] text-xl font-[600]'>ocus: </span>
        <span className='font-[400]'>Explore where you are .It’s your go-to platform to discover and engage with people around you</span>
      </div>

    </div>
  )
}

export default About

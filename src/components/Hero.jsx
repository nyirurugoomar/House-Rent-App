import React from 'react'
import HeroImage from '../assets/imageHero.png'

function Hero() {
  return (
    <>
    <div id='home' className='w-screen h-full text-center pt-40 bg-hero-bg bg-cover'>
        <div className='grid md:grid-cols-2 max-w-[1340px] m-auto mx-10  '> 
        <div className='flex flex-col justify-center md:items-start mb-20 '>
            <h1 className=' text-[75px] text-start text-white font-[700] tracking-wide '>Let Us Help You To Choose Your Best</h1>
            <p className='text-[20px] font-[300] text-white text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci quam, hendrerit sit amet ultrices ac, sagittis ultrices purus. Proin accumsan, justo</p>      
        </div>
        <div>
          <img className='w-full px-10 ' src={HeroImage}alt='/'/>
       </div>
       </div>
      </div>
    </>
  )
}

export default Hero
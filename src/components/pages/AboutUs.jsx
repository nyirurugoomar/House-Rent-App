import React from 'react'
import whoweare from './images/photowhoweare.png'

function AboutUs() {
  return (
    <div className='h-full w-full'>
        <div className=' h-[15rem] bg-about-bg bg-cover'>
            <h1 className='pt-24 text-center text-[50px] text-white font-[700]'>About Us</h1>
        </div>

        <div className=''>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto mb-10 mt-10'>
                <div className='flex flex-col justify-center md:items-start w-full px-10 py-10 smm:w-full '>
                    <img className='w-full px-10 ' src={whoweare}alt='/'/>
                </div>
                <div className='mt-60'>
                    <h1 className='font-bold text-[55px] text-[#0B0961]   '>Who We Are </h1>
                    <p className='text-[18px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci quam, hendrerit sit amet ultrices ac, sagittis ultrices purus. Proin accumsan, justo</p>      
                </div>
                
            </div>

        </div>
        

    </div>
  )
}

export default AboutUs
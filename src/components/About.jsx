import React from 'react'
import smarthouse from '../assets/amico.png'

function About() {
  return (
    <>
    <div id='about' className='w-screen h-full text-center '>
        <div className='grid md:grid-cols-2 max-w-[1340px] m-auto mx-10  '> 
        <div className='flex flex-col justify-center md:items-start mb-20 '>
            {/* <h1 className=' text-[75px] text-start text-white font-[700] tracking-wide '>Let Us Help You To Choose Your Best</h1> */}
            <p className='text-[30px] font-[300] text-[#0B0961] text-start'>XXXXX is developing durably- and sustainably designed one- to four-bedroom homes priced within the means of low- to middle-income families in the City of Kigali.</p>   
             <button className='bg-[#0B0961] text-white p-4 rounded-2xl w-[158px] mt-10 tracking-wider'>View More</button>   
        </div>
        <div>
          <img className='w-full px-10 ' src={smarthouse}alt='/'/>
       </div>
       </div>
      </div>
    </>
  )
}

export default About
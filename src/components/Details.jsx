import React from 'react'
import check from '../assets/check-square.png'

function Details() {
  return (
    <>
    <div id='detail' className='w-screen h-full text-center mt-20 bg-[#D9D9D9] p-20 '>
        <div className='grid md:grid-cols-2 max-w-[1340px] m-auto mx-10  '> 
        <div className='flex flex-col justify-center md:items-start mb-20 '>
            {/* <h1 className=' text-[75px] text-start text-white font-[700] tracking-wide '>Let Us Help You To Choose Your Best</h1> */}
            <p className='text-[30px] font-[300] text-[#0B0961] text-start w-[410px]'>XXX Housing Development Advantages</p>   
             <button className='bg-[#0B0961] text-white p-4 rounded-2xl w-[158px] mt-10 tracking-wider'>View More</button>   
        </div>

        <div className='  justify-center md:items-start mt-20 '>
            <div className='flex flex-row mb-8'>
               <img src={check} width={'50px'}  alt=''/> 
               <p  className='text-[20px] font-[300] text-[#0B0961] text-start'> Prime Location in close proximity to schools, shopping centers, working place markets and hospital</p>
            </div>
            
            <div className='flex flex-row mb-8'>
               <img src={check} width={'50px'}  alt=''/> 
               <p  className='text-[20px] font-[300] text-[#0B0961] text-start'> Variety of offerings</p>
            </div>
                 
            <div className='flex flex-row mb-8'>
               <img src={check} width={'50px'}  alt=''/> 
               <p  className='text-[20px] font-[300] text-[#0B0961] text-start'>Local and Durable Construction Materials</p>
            </div>

            <div className='flex flex-row mb-8'>
               <img src={check} width={'50px'}  alt=''/> 
               <p  className='text-[20px] font-[300] text-[#0B0961] text-start'>Affordable High-Quality House Ecological and Aesthetically pleasing Enviroment</p>
            </div>       
            
        </div>
        
        
        
       </div>
      </div>
    </>
  )
}

export default Details
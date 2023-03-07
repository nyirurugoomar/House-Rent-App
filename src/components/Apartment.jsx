import React from 'react'
import onebedroom from '../assets/one bedroom.png'
import twobedroom from '../assets/two bedroom.png'
import threebedroom from '../assets/three bedroom.png'

function Apartment() {
  return (
    <>
    
    <div id='apartment' className='w-screen h-full text-center mt-10 '>
         
         <div className=''>
             <h1 className='text-[40px] font-[700] text-[#0B0961] mb-10'>Apartment units for sale</h1>
         </div>

         <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mb-20 mx-10'>
            <div className='w-[360px] h-[360]'>
            <img src={onebedroom} alt="" />
            <h1 className='text-center font-[800] text-[30px] tracking-widest mt-4'>ONE BEDROOM</h1>
            <p className='text-center text-[15px]'>A one Bedroom apartment has a building area of 43m2 on the Ground Floor and 38 m2 on First to third Floor. It contains One Bathroom and an Open Kitchen</p>
            <h1 className='text-center font-[800] text-[30px] text-[#0B0961]  mt-4'>$20,000</h1>
            </div>

            <div className='w-[360px] h-[360]'>
            <img src={twobedroom}  alt="" />
            <h1 className='text-center font-[800] text-[30px] tracking-widest mt-4'>TWO BEDROOM</h1>
            <p className='text-center text-[15px]'>A two-bedroom Apartment on a 73m2 and 72m2 built area is built with a choice of One Bath or 1.5 bath. One gets to enjoy the standard open Kitchen and spacious</p>
            <h1 className='text-center font-[800] text-[30px] text-[#0B0961]  mt-4'>$39,000</h1>
            </div>

            <div className='w-[360px] h-[360]'>
            <img src={threebedroom}  alt="" />
            <h1 className='text-center font-[800] text-[30px] tracking-widest mt-4'>THREE BEDROOM</h1>
            <p className='text-center text-[15px]'>A three Bedroom apartment on a 116m2 and 110 m2 built area is designed to accommodate a family with spacious living area, Open kitchen, storage room, Three</p>
            <h1 className='text-center font-[800] text-[30px] text-[#0B0961]  mt-4'>$64,691</h1>
            </div>
         </div>

         <div className='items-center '>
            <button className=' bg-[#0B0961] text-white p-4 cursor-pointer rounded-xl text-[20px]'>View More</button>
         </div>

    </div>
    </>
  )
}

export default Apartment
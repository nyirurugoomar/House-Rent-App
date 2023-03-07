import React from 'react'
import f1 from '../assets/f1.png'
import f2 from '../assets/f2.png'
import f3 from '../assets/f3.png'
import f4 from '../assets/f4.png'
import Slide from 'react-reveal/Slide';
function Features() {
  return (
    <div id='feature' className='w-screen h-full'>

<div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <h1 className='text-center font-[800] text-[45px] mt-4'>Our House Features</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 p-20'>
          <div>
            <Slide bottom>
            <img src={f1}  alt="" />
            <p className='text-center font-[800] text-[16px] tracking-widest'>Solar Geysers</p>
            </Slide>
          </div>
          <div>
            <Slide bottom>
            <img src={f2} alt="" />
            <p className='text-center font-[800] text-[16px] tracking-widest'>Double water rentention wall to prevent humidity</p>
            </Slide>
          </div>
          <div>
            <Slide bottom>
            <img src={f3} alt="" />
            <p className='text-center font-[800] text-[16px] tracking-widest'>Wi-Fi enabled
             connectivity
             </p>
            </Slide>
          </div>
          <div>
            <Slide bottom>
            <img src={f4} className="hover:scale-110 ease-in duration-300"  alt="" />
            <p className='text-center font-[800] text-[16px] tracking-widest'>Many opportunity
for upgrades</p>
            </Slide>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Features
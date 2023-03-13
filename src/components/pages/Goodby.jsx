import React from 'react'

function Goodby() {
  return (
   <>
        <div className='h-screen w-screen bg-byby-bg bg-cover -mb-10 '>
                <div className='pt-40'>
                <h1 className='text-[50px] text-white text-center'>Say Good Bye To Commissions👋 </h1>
                <p className='text-[20px] text-white text-center'>Lorem ipsum dolor sit amet, consectua</p>

                </div>
                
                <div className=' flex md:gap-20 justify-center mt-20'>
                    <div>
                    <button className='bg-white text-[#0B0961] mr-2 p-4 rounded-2xl md:w-[258px]   cursor-pointer font-[700]'>I WANT TO SELL A HOUSE</button> 
                    </div>
                    <div>
                    <button className='bg-white text-[#0B0961] p-4 rounded-2xl md:w-[258px]   cursor-pointer font-[700]'>I WANT TO BUY A HOUSE</button>
                        
                    </div>

            </div>
        </div>
   </>
  )
}

export default Goodby
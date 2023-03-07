import React from 'react'
import logo from '../assets/logo.png'
import {  FaFacebook, FaInstagram, FaTwitter,  } from 'react-icons/fa'

function Footer() {
  return (
    <div id='footer' className='w-screen h-full text-center mt-10 bg-[#0B0961] '>
         
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4  mx-10'>
            <div className=''>
            <img src={logo} width={'200px'} height={'200px'} alt="" />
            </div>

            <div className=''>
            <ul className='flex gap-8 text-[18px] text-center text-white mt-20 font-[600]'>
              <li>Home</li>
              <li>About</li>
              <li>Typologies</li>
              <li>Financing</li>
              <li>Gallery</li>
            </ul>
            <p className='text-center text-white text-[12px]  mt-4 ml-10 tracking-widest '>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
            </div>

            <div className=''>
            <div className='flex ml-40 gap-8 max-w-[330px] mt-16'>
                    <div className='rounded-full shadow-lg bg-white  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        {/* <a href='#'> */}
                        <FaFacebook />
                        {/* </a> */}
                        
                    </div>

                    <div className='rounded-full shadow-lg bg-white p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        
                          <FaTwitter />
                       
                    </div>

                    <div className='rounded-full shadow-lg bg-white p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaInstagram />
                    </div>

                    
                    
                </div>
            </div>
         </div>
         <h1 className='text-white text-[13px] font-[700]'>© 2023, House sell Inc. All Rights Reserved.</h1>
    </div>
  )
}

export default Footer
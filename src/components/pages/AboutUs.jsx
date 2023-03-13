import React from 'react'
import whoweare from './images/photowhoweare.png'
import users from './images/users.svg'
import services from './images/services.svg'
import team from './images/team.svg'
import decision from './images/decition.png'
import dream from './images/dream.png'

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
                <div className='md:mt-60 md:text-center'>
                    <h1 className='font-bold md:text-[55px] text-[#0B0961] '>Who We Are </h1>
                    <p className='text-[18px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci quam, hendrerit sit amet ultrices ac, sagittis ultrices purus. Proin accumsan, justo</p>      
                </div>
                
            </div>

        </div>

        <div className='md:h-20 bg-[#0B0961] mx-8  lg:grid-cols-3   text-center md:py-4 text-white'>
            <div className='md:flex gap-20 md:items-center md:ml-40 '>

            
            <div className=' flex gap-8 '>
                <img src={users} className='w-[75px] h-[45px] ' alt="" />
                <div className='mb-10 w-[15rem] '>
                <h1 className='text-start font-[700] text-[25px]'>100+</h1>
                <p className='text-start font-[700] text-[13px]'>Satisfied Entrepreneurs</p>
                </div>
                
            </div>

            <div className=' flex gap-8'>
            <img src={team} className='w-[75px] h-[45px] ' alt="" />
                <div className='mb-10 w-[15rem] '>
                <h1 className='text-start font-[700] text-[25px]'>50+</h1>
                <p className='text-start font-[700] text-[13px]'>Team Strength</p>
                </div>
                
            </div>

            <div className=' flex gap-8'>
            <img src={services} className='w-[75px] h-[45px] ' alt="" />
                <div className='mb-10 w-[15rem] '>
                <h1 className='text-start font-[700] text-[25px]'>200+</h1>
                <p className='text-start font-[700] text-[13px]'>Services Delivered</p>
                </div>
                
            </div>
            
            </div>
            

        </div>

        <div className=''>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto  mt-10 mx-14'>
                <div className='flex flex-col justify-center md:items-start w-full px-10 py-10 smm:w-full '>
                    <img className='w-full px-10 ' src={decision}alt='/'/>
                </div>
                <div className='md:mt-40 md:text-center '>
                    <h1 className='font-bold md:text-[30px] text-[#0B0961] text-center '>We Help Our Clients Make Better Decision </h1>
                    <p className='text-[16px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci quam, hendrerit sit amet ultrices ac, sagittis ultrices purus. Proin accumsan, justo</p>      
                </div>
                
            </div>

        </div>


        <div className=''>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto mb-10  mx-14'>
                <div className='md:mt-40 md:text-center '>
                    <h1 className='font-bold md:text-[30px] text-[#0B0961] text-center '>Helping you to find the property for your dream</h1>
                    <p className='text-[16px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci quam, hendrerit sit amet ultrices ac, sagittis ultrices purus. Proin accumsan, justo</p>      
                </div>
                <div className='flex flex-col justify-center md:items-start w-full px-10 py-10 smm:w-full '>
                    <img className='w-full px-10 ' src={dream}alt='/'/>
                </div>
                
                
            </div>

        </div>
        

    </div>
  )
}

export default AboutUs
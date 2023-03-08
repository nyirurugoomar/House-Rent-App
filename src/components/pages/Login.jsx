import React from 'react'

function Login() {
  return (
    
    <div className='h-full w-full md:bg-hero-bg   bg-cover'>

        <div className='pt-40  text-center'>
            <div className=' mx-40'>
              <div className='p-20'>
            <h1 className='text-center text-[30px] font-[700] font-krona text-white mb-10'>Contact US</h1>
                <form
                  action=""
                  method=""
                  enctype=""
                >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='text-sm py-2 font-[700] font-krona text-white text-start'>First Name:</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='fname'
                      name='fname'
                      placeholder='First Name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-sm py-2 font-[700] font-krona text-white text-start'>
                    Second Name:
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='lname'
                      name='lname'
                      placeholder='Second Name'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                  <label className='text-sm py-2 font-[700] font-krona text-white text-start'>Phone:</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='number'
                    name='phone'
                    placeholder='Phone'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className=' text-sm py-2 font-[700] font-krona text-white text-start'>Email:</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    placeholder='Email'
                  />
                </div>
                <div className='flex flex-col py-2 '>
                  <label className=' text-sm py-2 font-[700] font-krona text-white text-start'>Message:</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300 '
                    rows='10'
                    name='message'
                    placeholder='Message'
                  ></textarea>
                </div>
                </div>
                <button type="submit" className='w-[150px] p-4 text-black mt-4 bg-white rounded-2xl hover:bg-[#0B0961] hover:text-white font-[700] font-krona mr-[40rem]'>
                Submit
                </button>
                </form>
            </div>
            </div>
        
        </div>

    </div>
  )
}

export default Login
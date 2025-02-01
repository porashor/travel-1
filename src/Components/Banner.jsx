import React from 'react'
import videoBg from "../assets/video/banner1.mp4"
const Banner = () => {
  return (
    <div className='w-full h-[100vh] bg-blue-700 text-white relative overflow-hidden flex items-center justify-center'>
        {/* background video loaded  */}
        <video src={videoBg} className='absolute w-[100%] top-0 h-full object-cover z-0 brightness-75' loop autoPlay muted></video>
        {/* main area of banner  */}
        <div className='w-[80%] absolute mx-auto text-white space-y-10'>
          {/* header section  */}
          <h5 className='text-xl font-semibold '>For Travels</h5>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold xl:text-6xl '>Search Your <span>Holiday!</span></h1>
        <div className=' rounded-xl shadow-2xl shadow-slate-200 opacity-90 mx-auto h-[200px] bg-white z-30'>
          {/* additional form loaded here  */}
          <div className='text-[#333] flex flex-col text-xl py-5 px-10'>
            <label htmlFor="" className='font-semibold'>Search for your description </label>
            <input type="text" placeholder='enter name here...' className='py-3 px-5 bg-slate-200 my-2 rounded-2xl '  />
          </div>
        </div>
        </div>
      this is banner area
    </div>
  )
}

export default Banner

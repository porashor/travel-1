import React from 'react'
import videoBg from "../assets/video/banner1.mp4"
import { CiLocationOn } from 'react-icons/ci'
import { SiDatefns } from 'react-icons/si'
import Btn from "../Components/Btn"
const Banner = () => {
  return (
    <div className='w-full h-[100vh] bg-blue-700 text-white relative overflow-hidden flex items-center justify-center'>
        {/* background video loaded  */}
        <video src={videoBg} className='absolute w-[100%] top-0 h-full object-cover z-0 brightness-75' loop autoPlay muted></video>
        {/* main area of banner  */}
        <div className='w-[80%] absolute mx-auto text-white space-y-10'>
          {/* header section  */}
          <h5 className='text-xl font-semibold '>For Travels</h5>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold xl:text-6xl '>Search Your <span className='underline decoration-blue-400'>Holiday!</span></h1>
          {/* white box here  */}
        <div className=' rounded-xl shadow-2xl shadow-slate-200 opacity-90 mx-auto h-fit py-4 relative bg-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 '>
          {/* filter button  */}
          <div className='absolute bottom-[-20px] left-[47%]'>
            <Btn>Filter all</Btn>
          </div>
          {/* additional form loaded here  */}
          <div className='text-[#333] flex flex-col text-xl py-5 px-10'>
            <label htmlFor="" className='font-semibold'>Search for your description : </label>
            {/* input and icon  */}
            <div className='flex items-center justify-between bg-slate-200 rounded-2xl px-2'>
              <input type="text" placeholder='enter name here...' className='py-3 px-5 bg-slate-200 my-2 rounded-2xl '  />
              <CiLocationOn/>
            </div>
          </div>
          {/* 2nd additional face */}
          <div className='text-[#333] flex flex-col text-xl py-5 px-10'>
            <label htmlFor="" className='font-semibold'>Select your date:</label>
            {/* input and icon  */}
            <div className='flex items-center justify-between bg-slate-200 rounded-2xl px-2'>
              <input type="date" placeholder='enter name here...' className='py-3 px-5 bg-slate-200 my-2 rounded-2xl '  />
              <SiDatefns/>
            </div>
          </div>
          <div className='text-[#333] flex flex-col text-xl py-5 px-10'>
            <label htmlFor="" className='font-semibold'>Max price </label>
            {/* input and icon  */}
            <div className='flex items-center justify-between bg-slate-200 rounded-2xl px-2'>
              <input type="text" placeholder='enter name here...' className='py-3 px-5 bg-slate-200 my-2 rounded-2xl '  />
              <CiLocationOn/>
            </div>
          </div>
        </div>
        </div>
      this is banner area
    </div>
  )
}

export default Banner

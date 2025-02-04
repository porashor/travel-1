import React from 'react'
import video from '../assets/video/banner1.mp4'
import Btn from '../Components/Btn'
import { footherNavData } from '../Data/Data'
import SocialLinks from '../Components/SocialLinks'
import Logo from '../Components/Logo'
const Foother = () => {
  return (
    <div className="relative bg-gray-800 text-white p-4">
      {/* video background area  */}
      <video src={video} autoPlay loop muted className='absolute brightness-75 top-0 left-0 w-full z-0 h-[500px]  object-cover'></video>
      {/* main container area  */}
      <div className='w-[80%] mx-auto z-10 relative'>
        {/* upper section of foother  */}
        <div className='py-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
          {/* 2 contant will be loaded here  */}
          <div className='flex flex-col gap-3'>
            <p className='text-xl uppercase font-bold'>keep in touch</p>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>Travel with us</h1>
          </div>
          <form action="#" className='flex items-center justify-center gap-3'>
            <input type="text" placeholder='enter your email here...' className='py-3 px-5 bg-slate-200 text-white rounded-2xl' />
            <Btn>send</Btn>
          </form>
        </div>
        {/* lower section of foother */}
        <div>
          {/* lower container */}
          <div className='grid grid-cols-1 lg:grid-cols-2 bg-white text-black p-7 my-7 rounded-2xl gap-5'>
            {/* company details for foother  */}
            <div>
              {/* logo sections  */}
              <Logo/>
              {/* company details sections  */}
              <p className='text-xs py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rerum odio ut? Nemo dolorum blanditiis iure pariatur sunt ad suscipit illum exercitationem eius, mollitia aut repellat harum architecto vitae quaerat in esse omnis expedita. Excepturi laboriosam illo id consectetur voluptatibus!</p>
              {/* navLinks  */}
              <SocialLinks/>
            </div>
            {/* company important details for foother  */}
            <div className='flex items-center justify-between gap-3'>
              {footherNavData.map((item, index) => (
                <div key={index} className=''>
                  {/* navber  */}
                  <div>
                    {/* header  */}
                    <h1 className='text-xl font-bold text-center'>{item.navName}</h1>
                    {/* links  */}
                    <div>{item.nav.map((item, index)=>(
                      <div key={index}>
                        <a href={item.link}>{item.name}</a>
                      </div>
                    ))}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Foother

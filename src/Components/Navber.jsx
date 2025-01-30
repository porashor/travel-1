import React from 'react'
import Btn from '../Components/Btn'
import { navData } from '../Data/Data'
const Navber = () => {
  return (
    <div className="bg-white text-black border-b border-gray-100 shadow-lg">
      {/* container   */}
      <div className='w-[80%] mx-auto my-5 flex items-center justify-between gap-6'>
        {/* logo area  */}
        <div>
          <h1 className='text-xl font-bold font-poppins'><a href={"/"}>Travelwith</a></h1>
        </div>
        {/* nav area and secret button */}
        <div className='flex items-center gap-6'>
          <div className='flex items-center justify-center gap-6 text-xl font-semibold text-[#333]'>
            {navData.map((item, index) => (
              <div key={index} className=''>
                <a href={item.links}>{item.name}</a>
              </div>
            ))}
          </div>
          <Btn>BOOK NOW</Btn>
        </div>
      </div>
    </div>
  )
}

export default Navber

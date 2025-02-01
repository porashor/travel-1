import React from 'react'
import { visitPost } from '../Data/Data'
import { BiDollar, BiLocationPlus } from 'react-icons/bi'
import Btn from "../Components/Btn"
const VisitPlace = () => {
  return (
    <div className='bg-white text-black py-5'>
        {/* container section  */}
        <div className='w-[80%] mx-auto py-10'>
            {/* header section  */}
            <h1 className='font-semibold text-slate-600 py-3'>You can visit those place </h1>
            {/* main post section  */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-center justify-between'>
                {/* all information loaded here  */}
                {visitPost.map((item, index)=>(
                    <div key={index} className='w-full min-h-[300px] bg-slate-100 rounded-2xl border-1 border-slate-100 shadow-xl hover:shadow-slate-400 hover:scale-105 transition-all duration-200'>
                        {/* image  */}
                        <img src={item.img} alt="" className='w-full rounded-2xl' />
                        {/* header, location and cost  */}
                        <div className='px-4 py-5 flex items-center justify-between'>
                            {/* header and location  */}
                            <div>
                                <h1 className='text-xl font-semibold text-slate-700'>{item.name}</h1>
                                <div className='flex gap-3 items-center justify-start text-slate-600'>
                                    <BiLocationPlus/>
                                    <p className='text-xs'>{item.location}</p>
                                </div>
                            </div>
                            {/* cost  */}
                            <div className='flex items-center gap-1 text-2xl font-bold'>
                                <BiDollar/>
                                <p>{item.amount}</p>
                            </div>
                        </div>
                        {/* details sections */}
                        <p className='text-xs leading-4 px-4 pb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero neque reprehenderit quos iusto tempore eveniet sequi nulla cum velit dignissimos exercitationem, possimus assumenda eos illo quasi optio quia itaque ullam.</p>
                        {/* button area  */}
                        <div className='flex items-center justify-center pb-5'>
                            <Btn>Place Order Now</Btn>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default VisitPlace

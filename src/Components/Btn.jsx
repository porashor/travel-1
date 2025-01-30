import React from 'react'

const Btn = ({children}) => {
  return (
    <div className='bg-gradient-to-r from-blue-900 to-blue-500 text-white p-2 rounded-full cursor-pointer py-2 px-6 font-semibold'>
      {children}
    </div>
  )
}

export default Btn

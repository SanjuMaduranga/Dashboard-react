import React from 'react'

export default function Dashboard() {
  return (
    <div className='flex flex-basis relative'>
      <div className='ml-[80px] mt-[80px] mb-[40px] basis-2/3 w-2/3 h-screen'>
        <div className='flex justufy-between item-center '>
        <div className=''>
            <div className='font-poppins font-semibold text-[40px]'>
              Dashboard
            </div>
            <div className='mt-[5px] font-poppins text-gray-500'>
              This is the dashboard...
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

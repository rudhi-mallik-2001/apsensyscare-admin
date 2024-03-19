import React from 'react'
import Menu from './Menu'
import Reviews from './Reviews'

function DashRightCont() {
  return (
    <div className='w-full flex flex-row  gap-x-4'>
      <div className='flex flex-col gap-y-4 max-w-[99%]'>
        <div className='w-full flex flex-row gap-x-2 justify-between'>
          {/* <Menu /> */}
        </div>
        <div className='w-full'>
          <Reviews />
        </div>
      </div>
      {/* <div className='flex flex-col gap-y-4 w-[49%]'>
        <div className='w-full flex flex-row gap-x-2 justify-between'>
          <Menu />
        </div>
        <div className='w-full'>
          <Reviews />
        </div>
      </div> */}



    </div>

  )
}

export default DashRightCont
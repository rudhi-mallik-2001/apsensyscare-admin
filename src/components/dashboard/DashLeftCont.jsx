import React from 'react'
import {Menu} from './index'
import RevenueHistory from './RevenueHistory'
import Pendingorder from './Pendingorder'

function DashLeftCont() {
  return (
    <div className='w-full flex flex-col  gap-y-4'>
        <div className='w-full flex flex-row gap-x-2 justify-between'>
            <Menu/>
            <Menu/>
        </div>
        <div className='w-full border p-4  rounded-md'>
            <RevenueHistory/>
        </div>
        <div className='w-full flex flex-col border rounded-md'>
          <div className='w-full flex flex-col gap-y-2'>
          <h1 class="text-2xl font-extrabold leading-none tracking-tight text-gray-400 md:text-2xl lg:text-2xl p-4 dark:text-white">Pending Orders</h1>
          <Pendingorder/>
          </div>
          
        </div>
    </div>
  )
}

export default DashLeftCont
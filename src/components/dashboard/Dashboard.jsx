import React from 'react'
import { DashLeftCont, DashRightCont } from "./index"

const Dashboard = () => {
  return (

    <div className="w-full px-4 flex flex-row justify-between">
      <div className='w-[59%]  px-2'>
        <DashLeftCont />
      </div>
      <div className='w-[39%]  px-2'>
        <DashRightCont />
      </div>

    </div>

  )
}

export default Dashboard
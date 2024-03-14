import React, { useRef, useState } from 'react'
import { revenueHistory } from '../../api/Api'
import { Line } from 'react-chartjs-2'

function RevenueHistory() {
  const [date, setDate] = useState()
  revenueHistory().then(() => {

  })
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'First dataset',
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)'
      },
      {
        label: 'Second dataset',
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: '#742774',
      },
    ],
  };
  const ref = useRef()
  return (
    <div className='w-full flex flex-col gap-2'>
      <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-400 md:text-2xl lg:text-2xl  dark:text-white">30 Day Revenue History</h1>
      {/* <img src="https://www.thoughtco.com/thmb/vPZchuBNtuGgiChRefakysv1saQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bar-chart-build-of-multi-colored-rods-114996128-5a787c8743a1030037e79879.jpg" alt="" /> */}
      {/* <Line
        ref={ref}
        data={data}
       
      /> */}

    </div>
  )
}

export default RevenueHistory
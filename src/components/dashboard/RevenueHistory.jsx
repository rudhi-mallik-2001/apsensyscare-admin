import React from 'react'

function RevenueHistory() {
  return (
    <div className='w-full flex flex-col gap-2'>
      <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-400 md:text-2xl lg:text-2xl  dark:text-white">30 Day Revenue History</h1>
      {/* <img src="https://www.thoughtco.com/thmb/vPZchuBNtuGgiChRefakysv1saQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bar-chart-build-of-multi-colored-rods-114996128-5a787c8743a1030037e79879.jpg" alt="" /> */}
      <Line
        data={{
          labels: revenueData.map((data) => data.label),
          datasets: [
            {
              label: "Revenue",
              data: revenueData.map((data) => data.revenue),
              backgroundColor: "#064FF0",
              borderColor: "#064FF0",
            },
          ],
        }}
        options={{
          elements: {
            line: {
              tension: 0.5,
            },
          },
          plugins: {
            title: {
              text: "Monthly Revenue & Cost",
            },
          },
        }}
      />

    </div>
  )
}

export default RevenueHistory
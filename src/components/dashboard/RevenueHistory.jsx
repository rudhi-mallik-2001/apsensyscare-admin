import React, { useEffect, useState } from 'react'
import { revenueHistory } from '../../api/Api'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, defaults } from "chart.js/auto";
defaults.maintainAspectRatio = true;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";
function RevenueHistory() {
  const [revenue, setRevenue] = useState([])
  useEffect(()=>{
    revenueHistory().then((res) => {
      setRevenue(res)
    }) 
  },[])
  
  // console.log(revenue)
  const revenueData = [
    {
      "label": "Jan",
      "revenue": 64854,
      "cost": 32652
    },
    {
      "label": "Feb",
      "revenue": 54628,
      "cost": 42393
    },
    {
      "label": "Mar",
      "revenue": 117238,
      "cost": 50262
    },
    {
      "label": "Apr",
      "revenue": 82830,
      "cost": 64731
    },
    {
      "label": "May",
      "revenue": 91208,
      "cost": 41893
    },
    {
      "label": "Jun",
      "revenue": 103609,
      "cost": 83809
    },
    {
      "label": "Jul",
      "revenue": 90974,
      "cost": 44772
    },
    {
      "label": "Aug",
      "revenue": 82919,
      "cost": 37590
    },
    {
      "label": "Sep",
      "revenue": 62407,
      "cost": 43349
    },
    {
      "label": "Oct",
      "revenue": 82528,
      "cost": 45324
    },
    {
      "label": "Nov",
      "revenue": 56979,
      "cost": 47978
    },
    {
      "label": "Dec",
      "revenue": 87436,
      "cost": 39175
    }
  ]
  return (
    <div className='w-full flex flex-col gap-2'>
      <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-400 md:text-2xl lg:text-2xl  dark:text-white">30 Day Revenue History</h1>
      {/* <img src="https://www.thoughtco.com/thmb/vPZchuBNtuGgiChRefakysv1saQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bar-chart-build-of-multi-colored-rods-114996128-5a787c8743a1030037e79879.jpg" alt="" /> */}
      <div>
        <Line
          data={{
            labels: revenue.map((data) => data.order_date),
            datasets: [
              {
                label: "Revenue",
                data: revenue.map((data) => data.total_amount_sold),
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
                text: "",
              },
            },
          }}
        />
      </div>


    </div>
  )
}

export default RevenueHistory
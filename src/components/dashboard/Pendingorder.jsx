import React, { useEffect, useState } from 'react'
import { fetchpendingOrder } from '../../api/Api'
import { Link } from 'react-router-dom'

function Pendingorder() {
    const [pendingOrder, setpendingOrder] = useState([])
    useEffect(() => {
        fetchpendingOrder().then((res) => {
            setpendingOrder(res)
        })
    }, [])
    console.log(pendingOrder)
    return (
        <>
            {
                pendingOrder.map((order,idx) => {
                    return (
                        <Link 
                        to={`orders/${order.order_id}`}
                        key={idx} 
                        className='w-full flex justify-between  gap-y-2 p-4 hover:bg-[#f6f6f6] cursor-pointer'>
                            <div className='w-full flex justify-start items-start  gap-2'>
                                <div className='border w-[50px] h-[50px] rounded-[50%] flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                    </svg>
                                </div>
                                <div className='w-[59%] flex flex-col justify-start items-center'>
                                    <div className='w-full text-[18px]'>{order.order_date}</div>
                                    <div className='w-full text-[12px]'>by {order.f_name},{order.total_quantity} Items</div>
                                </div>
                            </div>
                            <div className='w-[20%] flex justify-center items-center'>{order.order_total}.00</div>
                        </Link>
                    )
                })
            }

        </>
    )
}

export default Pendingorder
import React from 'react'

function Pendingorder() {
    return (
        <div className='w-full flex justify-between  gap-y-2 p-4 hover:bg-[#d9d9d9]'>
            <div className='w-full flex justify-start items-start  gap-2'>
                <div className='border w-[50px] h-[50px] rounded-[50%]'><img src="" alt="image" /></div>
                <div className='w-[59%] flex flex-col justify-start items-center'>
                    <div className='w-full text-[18px]'>Date/Time</div>
                    <div className='w-full text-[12px]'>Date/Time</div>

                </div>
            </div>

            <div className='w-[20%] flex justify-center items-center'>price</div>
        </div>
    )
}

export default Pendingorder
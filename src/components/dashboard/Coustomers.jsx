import React from 'react'

function Coustomers() {
    return (
        <div className='w-[49%] h-[800px] border flex flex-col justify-between p-2 rounded-md'>
            <div className='flex flex-col gap-y-2'>
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />

            </div>
            <button class="bg-grey hover:bg-[#ffb356] text-black hover:text-white rounded-md">
                See all Reviews
            </button>
        </div>
    )
}

export default Coustomers
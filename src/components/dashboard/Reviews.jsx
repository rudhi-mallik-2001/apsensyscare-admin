import React from 'react'
import Review from './Profile'

function Reviews() {
    return (
        <div className='w-full h-[800px] border flex flex-col justify-between p-2 rounded-md'>
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

export default Reviews
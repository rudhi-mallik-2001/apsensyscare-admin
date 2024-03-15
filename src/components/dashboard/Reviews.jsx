import React from 'react'
import Review from './Profile'
import { Link } from 'react-router-dom'

function Reviews() {
    return (
        <div className='w-full h-[800px] border flex flex-col justify-between p-2 rounded-md'>
            <div className='flex flex-col gap-y-2'>
                <Review />
                {/* <Review />
                <Review />
                <Review /> 
                <Review /> */}

            </div>
            <Link class="border flex flex-row justify-around cursor-pointer rounded-md " to={'/customers'}>
                <button class="w-full bg-grey hover:bg-[#ffb356] text-black hover:text-white rounded-md">
                    See all Users
                </button>
            </Link>

        </div>
    )
}

export default Reviews
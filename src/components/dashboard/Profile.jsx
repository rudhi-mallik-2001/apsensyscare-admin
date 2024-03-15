import React, { useEffect, useState } from 'react'
import { customerfetch } from '../../api/Api'
import { Link } from 'react-router-dom'

function Profile() {
  const [user, setUser] = useState([])
  useEffect(() => {
    customerfetch("fetch")
      .then((res) => {
        setUser(res);
        console.log(user);


      })
  }, [])
  return (
    <>
      {
        user.map((item) => {
          return (
            <Link class=" border flex flex-row justify-around cursor-pointer rounded-md " to={`/customers/${item.userId}`}>
              <div className='w-[300px] flex flex-row justify-between gap-2 hover:bg-[#f6f6f6] rounded-md py-2 px-1 cursor-pointer'>
                <div className='border w-[50px] h-[50px] rounded-[50%] flex justify-center items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                  </svg>
                </div>
                <div className='w-[calc(100%_-_50px)]'>{item.f_name}</div>
              </div>
            </Link>


          )


        })
      }
    </>






  )
}

export default Profile;
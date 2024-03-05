import React, { useEffect, useState } from 'react'
import { fetchAllCategory } from '../../index'
import { Link } from 'react-router-dom'
const Categories = () => {
  const [categories, setCategory] = useState([])

  useEffect(() => {
    fetchAllCategory()
      .then((res) => {
        setCategory(res)
      })
  }, [])
  return (

    <div className='w-full flex-col  justify-start items-start p-3 gap-2'>
      <div className='w-[100%] flex justify-end gap-y-2 mb-2'>
      <Link class="w-[10%] border flex flex-row justify-around cursor-pointer rounded-md hover:bg-[#ffb356] hover:text-[#fff] py-1" to={'/add-category'}>Add Categories</Link>
      </div>
     
      <div className='w-full flex flex-row gap-4 justify-between'>
        {
          categories.map((item, idx) => {
            return (

              <div className="card w-96 bg-base-100 shadow-xl">
                <figure ><img className='w-full' src={`https://apsensyscare.com/Image/category/${item.category_img}`} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card- items-center text-center">{item.category_name}</h2>
                  <div className="card-actions justify-between">
                    <Link to={`/products/${item.id}`} className="w-[30%] border flex flex-row justify-around cursor-pointer rounded-md hover:bg-[#ffb356] hover:text-[#fff] py-1">
                      Products
                    </Link>
                    <Link to={`/category/edit/${item.id}`} className="w-[30%] border flex flex-row justify-around cursor-pointer rounded-md hover:bg-[#ffb356] hover:text-[#fff] py-1">
                      Edit
                    </Link>
                  </div>
                </div>
              </div>


            )
          })
        }
      </div>
    </div>
  )
}

export default Categories
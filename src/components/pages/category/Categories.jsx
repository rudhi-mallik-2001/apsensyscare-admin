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
    <div className='w-full flex justify-start items-start p-3 gap-2'>
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
  )
}

export default Categories
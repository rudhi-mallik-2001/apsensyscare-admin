import React, { useEffect, useState } from 'react'
import { fetchProducts, fetchAllProducts } from '../../../api/Api'
import { Link } from 'react-router-dom'
const Products = ({ filterItem }) => {
  const [product, setProducts] = useState([])
  useEffect(() => {
    filterItem !== undefined ? fetchProducts(filterItem)
      .then((res) => {
        setProducts(res.product)
      }) : fetchAllProducts()
        .then((res) => {
          setProducts(res.product)
        }) 
  }, [filterItem])
  return (
    <div className='w-[calc(100%_-_200px)] flex flex-row flex-wrap justify-start items-start content-start gap-2 bg-[#fff] px-2'>
      <div className='w-[100%] border rounded-md p-2 flex flex-row justify-end  gap-y-2 mb-2'>
        <Link className="w-[10%] flex flex-row justify-around cursor-pointer rounded-md hover:bg-[#ffb356] hover:border border-black hover:text-[#fff] py-1 gap-2" to={'/add-size'}>Add Size</Link>
        <Link className="w-[10%] flex flex-row justify-around cursor-pointer rounded-md hover:bg-[#ffb356] hover:border border-black hover:text-[#fff] py-1 gap-2" to={'/add-product'}>Add Product</Link>
      </div>
      <div className='flex flex-row flex-wrap justify-start items-start content-start gap-2'>
        {
          product.length >= 1 ? product.map((item) => {
            return (
              <Link to={`/products/edit/${item.id}`} className='w-[150px] h-[200px] border-2 text-[12px] p-2 cursor-pointer text-center rounded-md shadow-md'>
                <div>
                  <img className='w-[100px]' src={`https://apsensyscare.com/Image/all_products/${item.product_image}`} alt="" srcset="" />
                </div>
                <p>{item.name}</p>
              </Link>
            )
          }) : <></>
        }
      </div>
    </div>

  )
}

export default Products